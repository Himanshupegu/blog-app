const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://blog-app:bvTJCugWnpUdGvv7@cluster0.ogjquq6.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({ username, password: bcrypt.hashSync(password, salt) });
    res.json(userDoc);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.listen(4000);

// mongodb+srv://blog-app:bvTJCugWnpUdGvv7@cluster0.ogjquq6.mongodb.net/?retryWrites=true&w=majority

// bvTJCugWnpUdGvv7
