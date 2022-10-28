const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema(
  {
    user_id: String,
    ordEmail: Boolean,
    ordSms: Boolean,
    draEmail: Boolean,
    draSms: Boolean,
    awaSms: Boolean,
    awaEmail: Boolean,
    proSms: Boolean,
    proEmail: Boolean,
    preSms: Boolean,
    preEmail: Boolean,
    traSms: Boolean,
    traEmail: Boolean,
    
  },
  { timestamps: true },
  { collection: "notifications" }
);

const Notification = mongoose.model("Notifications", notificationSchema);

module.exports = Notification;
