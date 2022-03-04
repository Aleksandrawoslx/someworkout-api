const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
  name: { type: String, required: true },
  surname: {type: String},
  description: { type: String, required: true },
  assignedWod: {type: Schema.Types.ObjectId, ref: "Wod"} 
  // userref 
},
{
    timestamps: true
}
);

const Client = model("Client", clientSchema);

module.exports = Client; 

