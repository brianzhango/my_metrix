const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    job_number: String,
    status: String,
    ETA: Date,
    approved: Boolean,
    project_id: String,
  },
  { timestamps: true },
  { collection: "jobs" }
);

const Job = mongoose.model("Jobs", jobSchema);

module.exports = Job;
