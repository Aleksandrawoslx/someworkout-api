const router = require("express").Router();
const Client = require("../models/Client.model");
const mongoose = require("mongoose")
const {isAuthenticated} = require("../middleware/jwt.middleware");


router.get("/", (req, res, next)=>{
  Client.find()
  .populate("clientMeets")
  .then(allClients => res.json(allClients))
  .catch(err=> res.json(err));
})

router.post("/",  (req,res, next)=>{

  const clientDetails = {
    name: req.body.name,
    surname: req.body.surname,
    birth: req.body.birth,
    description: req.body.description, 
  }

  Client.create(clientDetails)
  .then(clientCreated =>{
    res.status(201).json(clientCreated)
  })
  .catch(err=>{
    console.log("workout error try again", err);
    res.status(500).json({
      message: "error creating a wod",
      error: err
    });
  })
})

router.get('/:clientId', (req, res, next) => {
  const { clientId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(clientId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Client.findById(clientId)
    .populate('clientMeets')
    .then(client => res.json(client))
    .catch(err => res.status(500).json(err));
});


module.exports = router;

