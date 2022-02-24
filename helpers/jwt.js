const jwt = require("jsonwebtoken");

exports.signToken = (obj) => {
    return new Promise((resolve, reject) => {
        try {
        const tk = jwt.sign(obj, process.env.TOKEN_SECRET);
        resolve(tk)
        } catch (error) {
            reject(error)
        }
    })
}


exports.openToken = (token) => {
    return new Promise((resolve, reject) => {
        try {
            const tk = jwt.verify(token, process.env.TOKEN_SECRET);
        resolve(tk)
        } catch (error) {
            reject(error)
        }
    })
}
