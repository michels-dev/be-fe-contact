const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Routes
const contactRoutes = require('./routes/contact');
app.use('/api', contactRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Page Not Found' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
