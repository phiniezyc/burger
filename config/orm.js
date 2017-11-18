// Import MySQL connection.
const connection = require("./connection.js");



// Object for all SQL statement functions.
const orm = {
    //tableInput is the data columns, etc in our SQL database
    //orm object takes data to be inserted into database as a callback
    all: (tableInput, callback) => {
        connection.query('SELECT * FROM ' + tableInput + ';', (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    update: (tableInput, condition, callback) => {
        connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition + ';', (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    create: (tableInput, val, callback) => {
        connection.query('INSERT INTO ' + tableInput + " (burger_name) VALUES ('" + val + "');", (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },


};



// Export the orm object for the model (burger.js) in models.
module.exports = orm;