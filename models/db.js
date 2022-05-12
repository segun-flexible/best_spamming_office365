const mysql = require("mysql");
const logger = require("../helpers/logger");
const db = mysql.createPool({
    connectionLimit : 900,
    host     : 'usdt.mysql.database.azure.com',
    user     : 'usdt',
    password : 'Iamtheowner@',
    database: 'test',
    charset: "utf8mb4"
});

db.getConnection((err,data) => {
    if (err) {
        logger.debug(err)
        return console.log(err)
    }else console.log("DB CONNECTED")
    
    
    
})

module.exports = db