const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
require('dotenv').config();  // process.env

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('contact', { layout: false });
});

app.post('/send', (req, res) => {
    console.log(req.body);
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Gender: ${req.body.gender}</li>
      <li>Company: ${req.body.company}</li>      
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
      <li>State: ${req.body.state}</li>
      <li>Skills: ${req.body.skills}</li>
      <li>Additional skills: ${req.body.AdditionalSkills}</li>
      <li>Terms and conditions: ${req.body.termsAndConditions}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

    // Step 1
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL || 'your gmail account', //your gmail account
            pass: process.env.PASSWORD || 'your gmail password' //your gmail password
        }
    });

    // Step 2
    /*
        Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps TODO:
    */
    let mailOptions = {
        from: 'jitenderwebdesigner@gmail.com', //email sender
        to: 'jitenderwebdesigner@gmail.com', //email receiver
        subject: 'Nodemailer - Test',
        text: 'Wooohooo it works!!',
        html: output // html body
    };

    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return console.log('Error occursasdsda', err);
        }
        res.render('contact', { layout: false, msg: 'Email has been sent' });
        return console.log('Email sent!!!');
    });
});

app.listen(3000, () => console.log('Server started...'));