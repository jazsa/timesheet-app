const mongoose = require('mongoose');

const TimesheetSchema = new mongoose.Schema({
  user: { type: String, required: true },
  date: { type: Date, required: true },
  hours: { type: Number, required: true },
  category: { type: String, enum: ['normal', 'off-hours', 'project'], required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Timesheet', TimesheetSchema);