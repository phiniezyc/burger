// Import ORM for functions that interact with database.
const orm = require("../config/orm.js");

const burger = {
    //burger object takes a callback since we want to pass future data to it 
    all: (callback) => {
        orm.all('burgers', (res) => {
            callback(res);
        });
    },
    update: (id, callback) => {
        orm.update("burgers", id, callback);
    },
    create: (name, callback) => {
        orm.create("burgers", name, callback);
    },
};

// // Export the database functions for the controller (routes.js).
module.exports = burger;