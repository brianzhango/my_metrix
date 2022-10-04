const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    id: String,
    first_name: String,
    last_name: String,
    department: String,
    company: String,
    phone: String,
    work_phone: String,
    email: String,
  },
  { timestamps: true },
  { collection: "users" }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;
