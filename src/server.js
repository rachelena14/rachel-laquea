const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

app.use((req, res, next) => {
  if (req.path.endsWith('.js')) {
    res.type('application/javascript');
  }
  next();
});

app.use(express.static('public')); // Serve static files from 'public' directory

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