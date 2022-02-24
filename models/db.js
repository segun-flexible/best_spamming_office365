const mysql = require("mysql");
const logger = require("../helpers/logger");
const db = mysql.createPool({
    connectionLimit : 900,
    host     : 'cryptoinvestment.czfgkwcbq8zf.us-east-1.rds.amazonaws.com',
    user     : 'admin',
    password : 'iamtheowner',
    database: 'office360',
    charset: "utf8mb4"
});

db.getConnection((err,data) => {
    if (err) {
        logger.debug(err)
        return console.log(err)
    }else console.log("DB CONNECTED")
    
    
    
})

module.exports = db