// Import ORM for functions that interact with database.
const orm = require("../config/orm.js");

const burger = {
    all: (cb) => {
        orm.all('burgers', (res) => {
            cb(res);
        });
    },
    update: (id, cb) => {
        orm.update("burgers", id, cb);
    },
    create: (name, cb) => {
        orm.create("burgers", name, cb);
    },
};

// // Export the database functions for the controller (routes.js).
module.exports = burger;