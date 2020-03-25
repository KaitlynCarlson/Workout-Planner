`use strict`;

const db = require(`../models`);

module.exports = app => {
  app.get(`/api/workouts/`, (req, res) => {
    db.Workout.find({})
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
  app.get(`/api/workouts/range`, (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post(`/api/workouts`, (req, res) => {
    db.Workout.create({})
      .then(newWorkout => {
        res.json(newWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put(`/api/workouts/:id`, (req, res) => {
    db.Workout.update(
      { _id: req.params.id },
      { $push: { exercises: req.body } }
    )
      .then(updatedWorkout => {
        res.json(updatedWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
