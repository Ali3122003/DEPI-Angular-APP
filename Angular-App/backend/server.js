const express = require('express');
const cors = require('cors');
const db = require('./db'); // Import the connection pool

const app = express();

// Enable CORS
app.use(cors());

// API route
app.get('/', (req, res) => {
  // Use the pool to ping the database
  db.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err.message);
      res.status(500).json({ 
        message: 'Node.js backend is running', 
        dbStatus: 'Database connection failed', 
        error: err.message 
      });
      return;
    }

    connection.ping((pingErr) => {
      connection.release(); // Release the connection back to the pool
      if (pingErr) {
        console.error('Error pinging the database:', pingErr.message);
        res.status(500).json({ 
          message: 'Node.js backend is running', 
          dbStatus: 'Database connection failed', 
          error: pingErr.message 
        });
      } else {
        console.log('Database connection successful');
        res.status(200).json({ 
          message: 'Node.js backend is running', 
          dbStatus: 'Database connection successful' 
        });
      }
    });
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
