const mongoose = require("mongoose");

const addressSchema = mongoose.Schema(
  {
    unit_num: String,
    street_num: String,
    street_name: String,
    suburb: String,
    state: String,
    country: String,
    postcode: String,
    user_id: String,
  },
  { timestamps: true },
  { collection: "addresses" }
);

const Address = mongoose.model("Addresses", addressSchema);

module.exports = Address;
