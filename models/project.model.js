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
 
const Project = mongoose.model("Projects", projectSchema);

module.exports = Project;
