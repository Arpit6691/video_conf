# Video Conference Application

A full-stack video conferencing application built with the MERN stack (MongoDB, Express.js, React, Node.js) and WebRTC/Socket.io for real-time communication.

## Features

- **Real-time Video & Audio:** Seamless communication using WebRTC and Socket.io.
- **User Authentication:** Secure login and registration.
- **Meeting History:** Keep track of past meetings.
- **Modern UI:** Built with React, Vite, and Material-UI for a responsive, clean interface.

## Tech Stack

### Frontend
- React (built with Vite)
- Material-UI (MUI) for styling and components
- Socket.io-client for real-time signaling
- Axios for HTTP requests
- React Router DOM for routing

### Backend
- Node.js & Express.js
- MongoDB with Mongoose for database management
- Socket.io for WebSockets and real-time event handling
- Bcrypt for secure password hashing

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB (local or Atlas)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Arpit6691/video_conf.git
   cd video_conf
   ```

2. **Backend Setup**
   - Navigate to the backend directory:
     ```bash
     cd Backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `Backend` folder and add your environment variables (e.g., `MONGO_URI`, `PORT`, etc.).
   - Start the backend server:
     ```bash
     npm run dev
     ```

3. **Frontend Setup**
   - Open a new terminal and navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the Vite development server:
     ```bash
     npm run dev
     ```

4. **Access the Application**
   - Open your browser and go to `http://localhost:5173` (or the port provided by Vite).

## License
ISC
