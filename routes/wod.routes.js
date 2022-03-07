const router = require("express").Router();
const Wod = require("../models/Wod.model");
const mongoose = require("mongoose")
const isAuthenticated = require("../middleware/isAuthenticated");
const req = require("express/lib/request");


router.get("/wods", isAuthenticated, (req, res, next)=>{
  Wod.find()
  .then(allWods => res.json(allWods))
  .catch(err=> res.json(err));
})

router.post("/wods", isAuthenticated, (req,res, next)=>{
  const wodDetails = {
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    rounds: req.body.rounds,
    workout: req.body.workouts,
    
  }
})


module.exports = router;

