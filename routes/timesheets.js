const express = require('express');
const router = express.Router();
const Timesheet = require('../models/Timesheet');

// GET all timesheets
router.get('/', async (req, res) => {
  try {
    const timesheets = await Timesheet.find();
    res.json(timesheets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new timesheet
router.post('/', async (req, res) => {
  const timesheet = new Timesheet(req.body);
  try {
    const newTimesheet = await timesheet.save();
    res.status(201).json(newTimesheet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;