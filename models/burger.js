// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    all:  (cb) =>{
        orm.all('burgers', (res) => {
            cb(res);
        });
    },
    update: (id, cb) =>{
        orm.update("burgers", id, cb);
    },
    // The variables cols and vals are arrays.
    create: (name, cb) => {
        orm.create("burgers", name, cb);
    },

    
};

// // Export the database functions for the controller (catsController.js).
module.exports = burger;