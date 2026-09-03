// Minimal Express + Socket.io server with auth stubs and upload handling
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000' }
});

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// In-memory stores (replace with DB in production)
const users = {};
const messages = {}; // {roomId: [{from, text, timestamp}]}

const upload = multer({ dest: 'uploads/' });

app.post('/api/signup', async (req, res) => {
  const { username, password, displayName } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Missing fields' });
  if (users[username]) return res.status(409).json({ error: 'User exists' });
  const hash = await bcrypt.hash(password, 10);
  users[username] = { username, passwordHash: hash, displayName: displayName || username };
  const token = jwt.sign({ username }, process.env.JWT_SECRET || 'devsecret');
  res.json({ token, user: users[username] });
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ username }, process.env.JWT_SECRET || 'devsecret');
  res.json({ token, user: { username, displayName: user.displayName } });
});

app.post('/api/upload-avatar', upload.single('avatar'), (req, res) => {
  // Returns uploaded file URL; in prod, move to S3 and return URL
  if (!req.file) return res.status(400).json({ error: 'No file' });
  const url = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  res.json({ url });
});

// Simple room messaging via Socket.io
io.on('connection', (socket) => {
  console.log('socket connected', socket.id);

  socket.on('join', (roomId) => {
    socket.join(roomId);
  });

  socket.on('message', (payload) => {
    const { roomId, from, text } = payload;
    messages[roomId] = messages[roomId] || [];
    const msg = { from, text, timestamp: Date.now() };
    messages[roomId].push(msg);
    io.to(roomId).emit('message', msg);
  });

  // Placeholder for WebRTC signaling (offer/answer/ice)
  socket.on('signal', ({ toSocketId, data }) => {
    if (toSocketId) io.to(toSocketId).emit('signal', { from: socket.id, data });
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log('Server listening on', PORT));
