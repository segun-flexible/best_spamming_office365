
const { adminDashboardGet, adminDashboardDelete } = require("../../controllers/admin/dashboard");
const { adminProfileSettingsGet, adminProfileSettingsPost } = require("../../controllers/admin/settings/profile");

const { isUserLogin, isAdmin } = require("../../middleware/isAuth");
const { userDetails } = require("../../middleware/userInfo");



const adminRoute = require("express").Router();

//ADMIN DASHBOARD
adminRoute.route("/dashboard").get(isUserLogin, isAdmin, userDetails, adminDashboardGet).delete(isUserLogin, isAdmin, userDetails, adminDashboardDelete);

//ADMIN SETTINGS
adminRoute.route("/profile").get(isUserLogin, isAdmin, userDetails, adminProfileSettingsGet).post(isUserLogin, isAdmin, userDetails, adminProfileSettingsPost);


module.exports = adminRoute