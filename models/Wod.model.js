const { Schema, model } = require("mongoose");

// class, type not required.
const wodSchema = new Schema(
    {
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  class: { type: String },
  tag: {type: Array}, 
  workout: {type: Array},
  userAdded: {type: Boolean}
},
{
    timestamps: true
}
);

const Wod = model("Wod", wodSchema);

module.exports = Wod;