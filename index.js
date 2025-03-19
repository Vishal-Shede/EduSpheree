const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON data
app.use(express.json());

// Sample route for testing
app.get('/', (req, res) => {
    res.send('EduSphere Server is Running Successfully!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});