// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Enable CORS
const cors = require('cors');
app.use(cors());

// Enable JSON parsing
app.use(express.json());

// In-memory database
let comments = [];

// Add a comment
app.post('/comments', (req, res) => {
    const { comment } = req.body;
    if (!comment) {
        return res.status(400).json({ error: 'Comment is required' });
    }
    comments.push(comment);
    res.status(201).json({ message: 'Comment added' });
});

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Delete all comments
app.delete('/comments', (req, res) => {
    comments = [];
    res.json({ message: 'All comments deleted' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});