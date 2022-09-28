const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")

require('dotenv').config();

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

// app.use(cors(corsOptions));
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const jobsRouter = require('./routes/jobs');

app.use('/jobs', jobsRouter);

const db = require("./models");

db.mongoose
  .connect("mongodb+srv://brianozhang:869323246@cluster0.ima9o2n.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    console.log()
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
