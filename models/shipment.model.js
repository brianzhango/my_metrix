const mongoose = require("mongoose")
      
const shipmentSchema = mongoose.Schema(
  {
    job_number: String,
    ship_id: String,
    ship_date: Date,
    track_number: String,
    freighter: String
  },
  { timestamps: true },
  {collection:"shipments"}
)
 
const Shipment = mongoose.model("Shipments", shipmentSchema);

module.exports = Shipment;