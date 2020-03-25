"use strict";
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
    unique: true
  },
  exercises: Array
});
module.exports = mongoose.model(`Workout`, WorkoutSchema);
