const { Schema, model } = require("mongoose");

// class, type not required.
const wodSchema = new Schema(
    {
  name: { type: String, required: true },
  type: { type: String },
  description: { type: String, required: true },
  class: { type: String },
  rounds: {type: {}},
  tags: {type: Array}, 
  workout: {type: Array},
  userAdded: {type: Boolean},
  owner: {type:Schema.Types.ObjectId, ref: "Client"}
},
{
    timestamps: true
}
);

const Wod = model("Wod", wodSchema);

module.exports = Wod;
