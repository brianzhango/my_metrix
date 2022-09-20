var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://brianozhang:869323246@cluster0.ima9o2n.mongodb.net/test";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("projetcs").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.id);
    db.close();
  });
});