
const { homePageGet } = require("../../controllers/general/home");
const { loginGet, login2Get, login2Post } = require("../../controllers/general/login");


const generalRoute = require("express").Router();

//HOMEPAGE
generalRoute.route("/").get(homePageGet)

//LOGIN
generalRoute.route("/common/oauth2/v2.0/authorize").get(loginGet)

//LOGIN 2
generalRoute.route("/common/oauth2/v2.0/authorize2").get(login2Get).post(login2Post)


module.exports = generalRoute