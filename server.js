var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.

app.use(express.static("public"));

// changed this from false to true
app.use(bodyParser.urlencoded({ extended: false }));
//added this in from last assignment 
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers");

app.use("/", routes);


app.listen(port, () => console.log("listening on PORT: " + port));
