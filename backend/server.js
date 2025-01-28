const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Path to the blogs.json file
const BLOGS_FILE = './blogs.json';

// API to fetch all blogs
app.get('/blogs', (req, res) => {
  fs.readFile(BLOGS_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading blogs file' });
    }
    res.json(JSON.parse(data || '[]'));
  });
});

// API to add a new blog
app.post('/blogs', (req, res) => {
  const newBlog = req.body;

  // Read existing blogs, append the new one, and save
  fs.readFile(BLOGS_FILE, 'utf8', (err, data) => {
    const blogs = data ? JSON.parse(data) : [];
    blogs.push(newBlog);
    fs.writeFile(BLOGS_FILE, JSON.stringify(blogs, null, 2), (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ message: 'Error saving blog' });
      }
      res.status(201).json({ message: 'Blog added successfully' });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
