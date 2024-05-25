const express = require('express');
const app = express();
const db = require('./db.js');  // Assuming you have this file for database connection
const bodyParser = require('body-parser');
const userRouter = require('./routes/user_route.js');
const hotelRouter = require('./routes/hotel_route.js');


app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.use('/user', userRouter);
app.use('/hotel',hotelRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
