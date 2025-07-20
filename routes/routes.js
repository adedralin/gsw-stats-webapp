const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('home', { title: 'Golden State Warriors Statistics' });
});

// Roster route (Hardcoded Data)
router.get('/roster', (req, res) => {
  const players = [
    {
      name: "Stephen Curry",
      num: 30,
      position: "PG",
      college: "Davidson",
      height: "6'2",
      weight: "185 lbs",
      bday: "March 14, 1988",
      experience: "14 seasons"
    },
    {
      name: "Klay Thompson",
      num: 11,
      position: "SG",
      college: "Washington State",
      height: "6'6",
      weight: "215 lbs",
      bday: "February 8, 1990",
      experience: "12 seasons"
    },
    {
      name: "Draymond Green",
      num: 23,
      position: "PF",
      college: "Michigan State",
      height: "6'6",
      weight: "230 lbs",
      bday: "March 4, 1990",
      experience: "12 seasons"
    },
    {
      name: "Andrew Wiggins",
      num: 22,
      position: "SF",
      college: "Kansas",
      height: "6'7",
      weight: "197 lbs",
      bday: "February 23, 1995",
      experience: "9 seasons"
    },
    {
      name: "Kevon Looney",
      num: 5,
      position: "C",
      college: "UCLA",
      height: "6'9",
      weight: "222 lbs",
      bday: "February 6, 1996",
      experience: "8 seasons"
    }
  ];

  res.render("roster", { players });
});

// Record route (Hardcoded Data)
router.get("/record", (req, res) => {
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
