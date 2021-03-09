const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

// const bookLibraryModel = require('../models/bookLibrary');

//const bookLibraryListData = require('../data/bookLibraryList.json');

const accessTokenSecret = 'youraccJzdWIiOiIxMjM0NTY3ODkwesstokensecret';
const refreshTokenSecret = 'yourrefreshtokensecrethere';
const refreshTokens = [];

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, accessTokenSecret, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }

          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
};
const users = [
  {
      username: 'john',
      password: 'password123admin',
      role: 'admin'
  }, {
      username: 'anna',
      password: 'password123member',
      role: 'member'
  }
];

// app.get('/referrals', async (req, res) => {
//   const referrals = await referralModel.find({});

//   try {
//     res.send(referrals);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

app.post('/login', (req, res) => {
  // Read username and password from request body
  const { username, password } = req.body;

  // Filter user from the users array by username and password
  const user = users.find(u => { return u.username === username && u.password === password });

  if (user) {
      // Generate an access token
      const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);

      res.json({
          accessToken
      });
  } else {
      res.send('Username or password incorrect');
  }
});


app.post('/login', (req, res) => {
  // read username and password from request body
  const { username, password } = req.body;

  // filter user from the users array by username and password
  const user = users.find(u => { return u.username === username && u.password === password });

  if (user) {
      // generate an access token
      const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' });
      const refreshToken = jwt.sign({ username: user.username, role: user.role }, refreshTokenSecret);

      refreshTokens.push(refreshToken);

      res.json({
          accessToken,
          refreshToken
      });
  } else {
      res.send('Username or password incorrect');
  }
});

app.post('/token', (req, res) => {
  const { token } = req.body;

  if (!token) {
      return res.sendStatus(401);
  }

  if (!refreshTokens.includes(token)) {
      return res.sendStatus(403);
  }

  jwt.verify(token, refreshTokenSecret, (err, user) => {
      if (err) {
          return res.sendStatus(403);
      }

      const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' });

      res.json({
          accessToken
      });
  });
});

app.post('/logout', (req, res) => {
  const { token } = req.body;
  refreshTokens = refreshTokens.filter(token => t !== token);

  res.send("Logout successful");
});

app.get('/referrals', authenticateJWT, (req, res) => {
  res.json(referralListData);
});

app.post('/referral', authenticateJWT, async (req, res) => {
  
  // const { role } = req.user;
  // if (role !== 'admin') {
  //     return res.sendStatus(403);
  // }
  // const referral = req.body;
  // referralListData.push(referral);
  // res.send('Book added successfully');

  const referral = new referralModel(req.body);
  
  try {
    await referral.save();
    res.send(referral);
  } catch (err) {
    res.status(500).send(err);
  }
});




//app.delete('/referral/:id', async (req, res) => {
  //try {
    //const referral = await referralModel.findByIdAndDelete(req.params.id)

    //if (!referral) res.status(404).send("No item found")
    //res.status(200).send()
  //} catch (err) {
    //res.status(500).send(err)
  //}
//})


//app.patch('/referral/:id', async (req, res) => {
  //try {
    //await referralModel.findByIdAndUpdate(req.params.id, req.body)
    //await referralModel.save()
    //res.send(referral)
  //} catch (err) {
    //res.status(500).send(err)
  //}
//})

module.exports = app