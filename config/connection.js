// Set up MySQL connection.
const mysql = require("mysql");



const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

// Makes connection to SQL database
connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});



// Export connection for ORM to use.
module.exports = connection;