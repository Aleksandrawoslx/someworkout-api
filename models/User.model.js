const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  userClients: {type: Schema.Types.ObjectId, ref: "Client"},
  userWods: {type: Schema.Types.ObjectId, ref: "Wod"}
});

const User = model("User", userSchema);

module.exports = User;
