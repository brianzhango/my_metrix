const mongoose = require("mongoose");

const jobDetailSchema = mongoose.Schema(
  {
    job_number: String,
    material_type: String,
    thickness: String,
    colour: String,
    pattern: String,
    panel_num: String,
    sqm: String,
    price: String,
    rgba: [String],
  },
  { timestamps: true },
  { collection: "job_details" }
);

const Detail = mongoose.model("Job_details", jobDetailSchema);

module.exports = Detail;
