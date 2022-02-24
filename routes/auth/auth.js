const { adminLoginGet, adminLoginPost, logoutGet } = require("../../controllers/auth/admin/adminAuth");

const { isAuthUser, isUserLogin } = require("../../middleware/isAuth");

const authRoute = require("express").Router();

//<!------ADMIN--------->

//ADMIN LOGIN
authRoute.route("/admin/login").get(isAuthUser, adminLoginGet).post(isAuthUser, adminLoginPost);


//LOGOUT
authRoute.route("/logout").get(isUserLogin, logoutGet);

module.exports = authRoute

