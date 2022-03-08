const { Schema, model } = require("mongoose");

const meetSchema = new Schema({
  description: { type: String },
  assignedWods: {type: Schema.Types.ObjectId, ref: "Wod"}

},
{
    timestamps: true
}
);

const Meet = model("Meet", meetSchema);

module.exports = Meet; 