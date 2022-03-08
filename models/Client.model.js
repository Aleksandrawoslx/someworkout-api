const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
  name: { type: String, required: true },
  surname: {type: String},
  description: { type: String, required: true },
  assignedWods: [{type: Schema.Types.ObjectId, ref: "Wod"}]

},
{
    timestamps: true
}
);

const Client = model("Client", clientSchema);

module.exports = Client; 

