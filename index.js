const express = require('express');
const path = require('path');
const connectDB = require('./db');
const timesheetRoutes = require('./routes/timesheets');

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(express.static('public'));

app.use('/api/timesheets', timesheetRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});