const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const readUsersFromFile = () => {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
};

const writeUsersToFile = (users) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
};

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  const users = readUsersFromFile();
  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ email, password });
  writeUsersToFile(users);
  res.status(201).json({ message: "Sign-up successful" });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const users = readUsersFromFile();
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  res.status(200).json({ message: "Login successful" });
});


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
