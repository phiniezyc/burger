// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    all: function (cb) {
        orm.all('burgers', function (res) {
            cb(res);
        });
    },
    update: function(id, cb) {
        orm.update("burgers", id, cb);
    },
    // The variables cols and vals are arrays.
    create: function (name, cb) {
        orm.create("burgers", name, cb);
    },

    
};

// // Export the database functions for the controller (catsController.js).
module.exports = burger;