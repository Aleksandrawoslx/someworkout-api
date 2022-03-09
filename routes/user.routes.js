const router = require("express").Router();
const User = require("../models/User.model");
const Client = require("../models/Client.model");
const mongoose = require("mongoose");
const { isAuthenticated } = require("../middleware/jwt.middleware");

router.get("/", (req, res, next) => {
  User.find()
    .populate("userClients")
    .then((userProfile) => res.json(userProfile))
    .catch((err) => res.json(err));
});

router.get("/:userId", (req, res, next) => {

})

router.put('/:userId', (req, res, next) => {
    const { userId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    const userDetails = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        userClients: req.body.userClients,
        userWods: req.body.userWods
    }
  
    User.findByIdAndUpdate(userId, userDetails, { new: true })
      .then((updatedUser) => res.json(updatedUser))
      .catch(error => res.status(500).json(error));
  });

  router.get('/:userId', (req, res, next) => {
    const { userId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    User.findById(userId)
      .populate('userClients')
      .then(user => res.json(user))
      .catch(err => res.status(500).json(err));
  });

// router.post("/", (req, res) => {

//   const { userId } = req.body.user;

//   const clientDetails = {
//     title: req.body.title,
//     description: req.body.description,
//     user: userId,
//   };

//   Client.create(clientDetails)
//     .then((newClient) => {
//       return User.findByIdAndUpdate(userId, {
//         $push: { userClients: newClient._id },
//       });
//     })
//     .then((response) => res.json(response))
//     .catch((err) => {
//       console.log("error creating a new task", err);
//       res.status(500).json({
//         message: "error creating a new task",
//         error: err,
//       });
//     });
// });

module.exports = router;
