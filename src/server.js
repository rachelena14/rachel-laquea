const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function setHeaders(res, path) {
    if (path.endsWith('.js')) {
      res.type('application/javascript');
    }
  }
  
app.use(express.static('public', { setHeaders: setHeaders })); // Serve static files from 'public' directory

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Middleware
app.use((req, res, next) => {
  if (req.path.endsWith('.js')) {
    res.type('application/javascript');
  }
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error Handling
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Listen on a Port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});