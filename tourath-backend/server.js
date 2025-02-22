require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const ethers = require('ethers');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/tourath', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
    walletAddress: { type: String, required: true, unique: true },
    username: String,
    email: String,
    password: String
});
const User = mongoose.model('User', UserSchema);

// Register with MetaMask
app.post('/register', async (req, res) => {
    const { walletAddress, username, email, password } = req.body;

    // Check if the wallet is registered
    let user = await User.findOne({ walletAddress });
    if (user) return res.status(400).json({ error: 'Wallet already registered' });

    // Save user in database
    user = new User({ walletAddress, username, email, password });
    await user.save();

    // Generate a token
    const token = jwt.sign({ walletAddress }, 'secretkey', { expiresIn: '1h' });
    res.json({ message: 'User registered', token });
});

// Login
app.post('/login', async (req, res) => {
    const { walletAddress } = req.body;
    const user = await User.findOne({ walletAddress });

    if (!user) return res.status(404).json({ error: 'User not found' });

    const token = jwt.sign({ walletAddress }, 'secretkey', { expiresIn: '1h' });
    res.json({ message: 'Login successful', token, user });
});

app.listen(5000, () => console.log('Server running on port 5000'));
