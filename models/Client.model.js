const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
  name: { type: String, required: true },
  surname: {type: String},
  birth: {type: Number},
  weight: {type: Number},
  description: { type: String, required: true },
  clientMeets: [{type:Schema.Types.ObjectId, ref: "Meet"}]

},
{
    timestamps: true
}
);

const Client = model("Client", clientSchema);

module.exports = Client; 

