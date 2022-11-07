const mysql= require("promise-mysql")
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'demo178',
    connectionLimit: 10
});

module.exports = pool