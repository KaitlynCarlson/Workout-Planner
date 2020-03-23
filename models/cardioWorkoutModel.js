const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;
const cardioExerciseSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  distance: {
    type: Number,
    required: `Cardio distance is a required field`
  },
  duration: {
    type: Number,
    required: `Cardio duration is a required field`
  }
});

module.exports = mongoose.model(`Cardio`, cardioExerciseSchema);
