var express = require("express");

// sub-apps
// --------

var sub1 = express();
sub1.get("/", function(req, res){
  res.json({status: "SUCCESS!!!!!!"});
});

var sub2 = express();
sub2.get("/", function(req, res){
  res.json({
    foo: "bar",
    baz: "quux"
  });
});

// main app
// --------

var app = express();

app.use("/foo", sub2);
app.use("/", sub1);

// Exports
// -------

module.exports = app;