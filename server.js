const express = require("express");
const bodyParser = require("body-parser");
//this expands verbs able to use when submitted a form (beyond GET and POST)
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");

const port = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Imports routes and gives server access to them.
const routes = require("./controllers/routes.js");

app.use("/", routes);




app.listen(port);