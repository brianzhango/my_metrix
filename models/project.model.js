const mongoose = require("mongoose")
      
const projectSchema = mongoose.Schema(
  {
    id: String,
    name: String,
    po_ref: String,
    user_id: Number
  },
  { timestamps: true },
  {collection:"projects"}
)
 
module.exports = mongoose.model("Projects", projectSchema);
