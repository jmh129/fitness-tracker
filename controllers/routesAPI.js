const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/api/workout", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workout/:id", (req, res) => {
  const id = req.params.id;
  const exercise = req.body;
  db.Workout.findByIdAndUpdate(id, { $push: { exercises: exercise } })
    .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workout", (req, res) => {
    db.Workout.create({})
      .sort({ date: -1 })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  
