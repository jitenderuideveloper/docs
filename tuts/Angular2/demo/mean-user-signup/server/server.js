require('./config/config'); // set process.env.MONGODB_URI and process.env.port

const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routesIndex = require('./routes/index.router');
//const referralRouter = require('./routes/referralRoutes.js');
//const connectDB = require('./DB/Conncection');

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'Error in MongoDB connection:'));
dbConnection.once('open', function() {
console.log('MongoDB connection succeeded.');
});

const app = express();
//app.use(express.static('public'));
app.use(cors())
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json({ extended: false }));

app.use('/api', routesIndex);
app.listen(process.env.PORT, () => console.log('Server is running...'));
