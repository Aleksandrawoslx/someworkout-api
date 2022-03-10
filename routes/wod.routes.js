const router = require("express").Router();
const Wod = require("../models/Wod.model");
const mongoose = require("mongoose")
const {isAuthenticated} = require("../middleware/jwt.middleware");
const req = require("express/lib/request");
const { route } = require("./auth.routes");


router.get("/", isAuthenticated, (req, res, next)=>{
  Wod.find()
  .then(allWods => res.json(allWods))
  .catch(err=> res.json(err));
})

router.post("/", (req,res, next)=>{

  const wodDetails = {
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    rounds: req.body.rounds,
    workout: req.body.workout,
    tags: req.body.tags
  }

  Wod.create(wodDetails)
  .then(wodMade =>{
    res.status(201).json(wodMade)
  })
  .catch(err=>{
    console.log("workout error try again", err);
    res.status(500).json({
      message: "error creating a wod",
      error: err
    });
  })
})

router.get("/:wodId", isAuthenticated, (req,res,next)=>{
  const {wodId} = req.params; 

  Wod.findById(wodId)
  .then(wod => res.json(wod))
  .catch(err => res.status(500).json(err))
})

module.exports = router;

