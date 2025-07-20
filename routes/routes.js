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
  router.get("/roster", function (req, res) {
  const players = [
    { name: "Stephen Curry", number: 30, position: "PG", college: "Davidson", height: "6'2", weight: "185 lbs" },
    { name: "Klay Thompson", number: 11, position: "SG", college: "Washington State", height: "6'6", weight: "215 lbs" },
    { name: "Draymond Green", number: 23, position: "PF", college: "Michigan State", height: "6'6", weight: "230 lbs" },
    { name: "Andrew Wiggins", number: 22, position: "SF", college: "Kansas", height: "6'7", weight: "197 lbs" },
    { name: "Kevon Looney", number: 5, position: "C", college: "UCLA", height: "6'9", weight: "222 lbs" }
  ];
  res.render("roster", { players });
});

})

// Record route
router.get("/record", function (req, res) {
  const record = {
    teamName: "Golden State Warriors",
    wins: 44,
    losses: 38,
    ppg: 118.9,
    rpg: 44.6,
    apg: 29.7,
  };
  res.render("record", { record });
});


module.exports = router;
