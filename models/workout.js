"use strict";
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
      unique: true
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Type of exercise is required."
        },
        name: {
          type: String,
          trim: true,
          required: "Name of exercise is required."
        },
        weight: {
          type: Number
        },
        sets: {
          type: Number
        },
        reps: {
          type: Number
        },
        duration: {
          type: Number,
          required: "Duration (minutes) of exercise is required."
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});
module.exports = mongoose.model(`Workout`, WorkoutSchema);
