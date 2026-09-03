# Nexus

A responsive, dark-first social & communication web application scaffold inspired by Discord and Instagram.

This repository contains two top-level folders:

- app/ — Next.js + Tailwind CSS frontend (UI, feed, chat, call UI components)
- server/ — Express + Socket.io backend (auth stubs, realtime messaging, file uploads)

Goals implemented in scaffold

- Dark-mode-first modern UI with Tailwind and glassmorphism styles
- Left navigation, main content area, right contextual drawer components
- Auth endpoints (signup/login) stubbed with JWT-based sessions
- Socket.io setup for realtime messaging (client + server stubs)
- WebRTC call UI hook and placeholder for integrating peer connections
- Profile avatar/banner upload endpoint (multer) and placeholder storage

Getting started (development)

1. Install dependencies

   cd server && npm install
   cd ../app && npm install

2. Start both servers locally

   # Terminal 1
   cd server && npm run dev

   # Terminal 2
   cd app && npm run dev

Open http://localhost:3000 to view the frontend. The frontend expects the backend at http://localhost:4000 by default. See .env.example files to change ports and secrets.

Next steps

- Replace in-memory data stores with a database (Postgres, MongoDB)
- Hook up file uploads to cloud storage (S3) and serve via CDN
- Implement secure password hashing, email verification, rate-limiting
- Add WebRTC signaling routing in the server to support peer connections
- Add production build scripts and Docker deployment
