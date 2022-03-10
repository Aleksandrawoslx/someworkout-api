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

router.put('/:clientId', (req, res, next) => {
  const { clientId } = req.params;

 

  const clientDetails = {
      name: req.body.name,
      surname: req.body.surname,
      description: req.body.description,
      
  }

  Client.findByIdAndUpdate(clientId, clientDetails, { new: true })
    .then((updatedClient) => res.json(updatedClient))
    .catch(error => res.status(500).json(error));
});

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

  

  Client.findById(clientId)
    
    .then(client => res.json(client))
    .catch(err => res.status(500).json(err));
});

router.delete('/:clientId', (req, res, next) => {
  const { clientId } = req.params;

 
  Client.findByIdAndRemove(clientId)
    .then(() => res.json({ message: `Client with ${clientId} is removed successfully.` }))
    .catch(error => res.status(500).json(error));
});


module.exports = router;

