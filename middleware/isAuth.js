
const { openToken } = require("../helpers/jwt")
const logger = require("../helpers/logger")
const db = require("../models/db")



exports.isAuthUser = async(req, res, next) => {
    if (req.signedCookies[process.env.TOKEN_NAME]) {
        const token = await openToken(req.signedCookies[process.env.TOKEN_NAME]);
        
        if (token.role && token.role === "admin") {
            return res.redirect("/admin/dashboard")
        } else {
            return res.redirect("/user/dashboard")
        }
        
    } else {
        next()
    }
    
}

exports.isUserLogin = async(req, res, next) => {
    if (req.signedCookies[process.env.TOKEN_NAME]) {
        next()
    } else {
        
        //Save The Preferred URL
        res.cookie("preferredUrl", { url: req.originalUrl }, { signed: true, maxAge: 1000 * 60 * 60 * 24 * 1 });
        
        //Check If URL Contain The Word "ADMIN"
        if (req.originalUrl.includes("admin")) {
            return res.redirect("/admin/login")
        } else {
            return res.redirect("/login")
        }
        

    }
    
}


exports.isAdmin = async (req, res, next) => {

    const { id,role:theRole } = await openToken(req.signedCookies[process.env.TOKEN_NAME]);

    if (theRole !== "admin") {
        
        return res.render("error/error", {
            title: "Not Allowed",
            text: "You are not allow to enter this page",
            button: {
                link: "/",
                text: "Back To Homepage"
            }
        });

        
    }

    
    db.query("SELECT role FROM f_admins WHERE uid = ? LIMIT 1", id, (err, role) => {
        if (err) logger.debug(err)
        else {
            let data = role[0];
            
            if (!data) {
                res.render("error/error", {
        title: "Not Allowed",
        text: "You are not allow to enter this page",
        button: {
            link: "/",
            text:"Back To Homepage"
        }
        
    })
            } else {
                next()
            }
        }
    })
    
}