var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
// Set Handlebars.
var exphbs = require("express-handlebars");

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(methodOverride("_method"));



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/routes.js");

app.use("/", routes);




app.listen(port);
