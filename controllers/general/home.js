const asyncHandler = require("../../helpers/asyncHandler");

exports.homePageGet = asyncHandler(async (req, res, next) => {

    return res.render("general/page/home", {
        title: ""
    })
})

