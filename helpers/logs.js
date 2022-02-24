const db = require("../models/db");

//GET LOGS
exports.getLogs = (limit,offset) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM f_logs limit ? OFFSET ?`,[limit,offset], (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })
};

//DELETE LOG BY ID
exports.deleteLogById = (logId) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM f_logs WHERE l_id = ?`,parseInt(logId), (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })
};

//INSERT LOG 
exports.insertLog = (obj) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO f_logs SET ?`,obj, (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })
};
