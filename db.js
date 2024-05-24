const mongoose = require('mongoose');
const db_url = 'mongodb://localhost:27017/rohit';

mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Some error connecting to database:', err);
});

db.once('open', () => {
  console.log('Connected to database successfully!');
});

module.exports = db;
