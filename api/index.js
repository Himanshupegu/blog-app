require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'upload/' });
const fs = require('fs');

const salt = bcrypt.genSaltSync(10);
const secret = 'ddfjiowe2993213k9kdfjd4';

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());
// app.use(express.static('upload'));
app.use('/upload', express.static(__dirname + '/upload'))

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);

  if (passOk) {
    jwt.sign(
      { username, id: userDoc._id },
      secret,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id: userDoc._id,
          username,
        });
      }
    );
  } else {
    res.status(400).json('Wrong Credentials');
  }
});

app.get('/profile', (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Token missing or invalid' });
  }

  jwt.verify(token, secret, {}, (err, info) => {
    if (err) {
      return res
        .status(403)
        .json({ message: 'Token verification failed' });
    }
    res.json(info);
  });
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').json('ok');
});

app.post(
  '/post',
  uploadMiddleware.single('file'),
  async (req, res) => {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);

    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
      if (err) {
        return res
          .status(403)
          .json({ message: 'Token verification failed' });
      }
      const { title, summary, content } = req.body;
      const postDoc = await Post.create({
        title,
        summary,
        content,
        cover: newPath,
        author: info.id,
      });

      res.json(postDoc);
    });
  }
);

app.get('/post', async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', ['username'])
      .sort({ createdAt: -1 })
      .limit(20);

    res.json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'A n error occurred while fetching posts.' });
  }
});

app.get('/post/:id', async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate('author', ['username']);
  res.json(postDoc);
});

app.listen(4000);
