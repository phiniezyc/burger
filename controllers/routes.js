const express = require("express");
const router = express.Router();


// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

//Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burger.all((burger_data) => {
        console.log(burger_data);
        res.render('index', {
            burger_data
        });
    });
});
router.put("/burgers/update", (req, res) => {
    burger.update(req.body.burger_id, (result) => {
        console.log(result);
        res.redirect("/");
    });
});
router.post("/burgers/create", (req, res) => {
    burger.create(req.body.burger_name, (result) => {
        console.log(result);
        res.redirect("/");
    });
});




// Export routes for server.js to use.
module.exports = router;