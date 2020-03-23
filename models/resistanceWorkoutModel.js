"use strict";

const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const resistanceWorkoutSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  weight: {
    type: Number,
    required: `Weight is a required input field`
  },
  sets: {
    type: Number,
    required: `Sets is a required input field`
  },
  reps: {
    type: Number,
    required: `Reps is a required input field`
  },
  duration: {
    type: Number,
    required: `Duration is a required input field`
  }
});

module.exports = mongoose.model(
  `resistanceWorkoutModel`,
  resistanceWorkoutSchema
);
