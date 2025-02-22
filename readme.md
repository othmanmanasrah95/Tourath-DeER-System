Tourath Decentralized Engagement & Reward System (Pilot Version)

Overview:
This is the pilot version of the Tourath Decentralized Engagement & Reward System, a blockchain-powered platform that integrates MetaMask authentication and a local user registration system. Users register with MetaMask, then set up an email, username, and password for later logins.

Features:

- MetaMask Authentication: Users connect their wallets for authentication.

- Local User Registration: Email, username, and password stored in MongoDB.

- Smart Contract Integration: Ethereum-based registration verification.

- Express.js Backend: Manages authentication and data storage.

- React.js Frontend: Provides a user-friendly UI.

Tech Stack

- Frontend: React.js, ethers.js
- Backend: Node.js, Express.js, MongoDB
- Blockchain: Solidity (Ethereum/Ganache)
- Security: MetaMask, JWT

Installation

Prerequisites

- Node.js v20.18.0

- MongoDB

- MetaMask

Setup Backend

# Clone the repo

git clone https://github.com/yourusername/tourath-pilot.git
cd tourath-pilot/tourath-backend

# Install dependencies

npm install

# Start MongoDB (if running locally)

mongod --dbpath=/path/to/db

# Run backend

node server.js

Setup Frontend
cd ../tourath-frontend

# Install dependencies

npm install

# Start frontend

npm start

Usage

Open http://localhost:3000.

Click "Connect MetaMask" and approve the connection.

If new, enter username, email, and password.

If returning, you are automatically logged in.
