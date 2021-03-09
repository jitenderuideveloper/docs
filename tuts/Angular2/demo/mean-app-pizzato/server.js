const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.Port || 3000;
const uri = "mongodb+srv://jitender:jitu1234@cluster0.cisrx.mongodb.net/pizzato?retryWrites=true&w=majority";
//const connectDB = require('./DB/Conncection');

const foodRouter = require('./routes/food.js');

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(express.json({ extended: false }));

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.use(foodRouter);

app.listen(3000, () => { console.log('Server is running...') });