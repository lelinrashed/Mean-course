const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

// body perser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully.'
  });
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'fajiefjofjio',
      title: 'This is coming from the server',
      content: 'This is coming from the server'
    },
    {
      id: 'fajiereofjio',
      title: 'This is second coming from the server',
      content: 'This is second coming from the server'
    },
    {
      id: 'fajieferfjio',
      title: 'This is third coming from the server',
      content: 'This is third coming from the server'
    },
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
