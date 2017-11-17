// Import MySQL connection.
const connection = require("./connection.js");



// Object for all SQL statement functions.
const orm = {
    all: (tableInput, cb) => {
        connection.query('SELECT * FROM ' + tableInput + ';', (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    update: (tableInput, condition, cb) => {
        connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition + ';', (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    create: (tableInput, val, cb) => {
        connection.query('INSERT INTO ' + tableInput + " (burger_name) VALUES ('" + val + "');", (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },


};



// Export the orm object for the model (burger.js) in models.
module.exports = orm;