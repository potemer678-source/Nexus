# Server

This is the Express + Socket.io backend for the Nexus scaffold.

Environment

Create a .env with values like:

PORT=4000
JWT_SECRET=your_jwt_secret
CLIENT_ORIGIN=http://localhost:3000

Routes

- POST /api/signup — { username, password, displayName }
- POST /api/login — { username, password }
- POST /api/upload-avatar — form-data file field name: avatar

Socket.io

- Connect to the server and use `join` and `message` events to participate in rooms.
- `signal` event is provided for WebRTC signaling between peers (emit to socket id).
