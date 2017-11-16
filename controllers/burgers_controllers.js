var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger");

//Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render("index", {burger_data});
    });
});

// router.post("/api/burgers", function (req, res) {
//     console.log(res.body);
//     console.log(res.body);
//     res.send("test");

//     burger.create([
//         "name"
//     ], [
//         req.body.name,
//     ], function (result) {
//         // Send back the ID of the new quote
//         res.json({
//             id: result.insertId
//         });
//     });
// });


// router.delete("/api/cats/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     burger.delete(condition, function (result) {
//         if (result.affectedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// Export routes for server.js to use.
module.exports = router;