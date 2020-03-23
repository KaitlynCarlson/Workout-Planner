const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;
const ExerciseSchema = new Schema({});

module.exports = mongoose.model(`Exercise`, ExerciseSchema);
