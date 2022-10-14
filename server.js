const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');


require("dotenv").config();

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

// parse requests of content-type - application/json
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// app.use(cors(corsOptions));
app.use(cors());

app.use("/api/jobs", require("./routes/job.route"));

app.use("/api/users", require("./routes/user.route"));

app.use("/api/upload", require("./routes/uploadFile"))

const db = require("./models");

db.mongoose
  .connect(
    "mongodb+srv://brianozhang:869323246@cluster0.ima9o2n.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to the database!");
    console.log();
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

if (process.env.NODE_ENV === 'production'){
// ... other app.use middleware 
app.use('/static',express.static("/front-end/build"));

// // Right before your app.listen(), add this:
// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname,  "front-end", "src", "views", "pages", "Login.js"));
// });

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname,  "front-end", "build", "index.html"));
});


}

const PORT = process.env.PORT || 8082;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

