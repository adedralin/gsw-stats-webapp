// routes/routes.js
const express = require('express');
const router = express.Router();
const path = require('path');
const targetDB = path.resolve(__dirname, '..', 'modules', 'db.js');
const targetPlayerSchema = path.resolve(__dirname, '..', 'models', 'playerSchema.js');

// Home route
router.get('/', (req, res) => {
  res.render('home', { title: 'Golden State Warriors Statistics' });
});

// Roster route
router.get('/roster', (req, res) => {
  // console.log(targetDB + " target db here");
  const connectDB = require(targetDB);
  // connectDB(true);
  const modelPlayer = require(targetPlayerSchema);
  modelPlayer.find({active:true}, 'num name position height weight bday experience active college').lean()
    .then( function(players) {
    console.log(`Database players:' + ${JSON.stringify(players)}`);
    res.render('roster',{players});
  // connectDB(false);
  });
})

// Record route
router.get('/Warriors-Record.html', (req, res) => {
  res.render('record', { title: 'Golden State Warriors Record' });
});

module.exports = router;
