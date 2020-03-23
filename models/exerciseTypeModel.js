const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;
const ExerciseSchema = new Schema({
  type: {
    type: String
  }
});

module.exports = mongoose.model(`Exercise`, ExerciseSchema);
