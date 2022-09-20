const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./models");
const projectModel = require("./models/project.model");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

  let MongoClient = require('mongodb').MongoClient;

app.get('/', (req, res) => {
    MongoClient.connect("mongodb+srv://brianozhang:869323246@cluster0.ima9o2n.mongodb.net/test", function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        dbo.collection("projects").find({}).toArray(
        function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
});