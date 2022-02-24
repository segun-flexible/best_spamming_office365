const { updateAdminById } = require("../../../helpers/admin")
const asyncHandler = require("../../../helpers/asyncHandler")
const { openToken } = require("../../../helpers/jwt")
const { hashPassword } = require("../../../helpers/password")

//PROFILE & PASSWORD SETTINGS
exports.adminProfileSettingsGet = asyncHandler(async (req, res, next) => {
    res.render("admin/pages/settings/profileSettings", {
        title: "Admin Profile Settings"
    })
})


//SAVE UPDATE
exports.adminProfileSettingsPost = asyncHandler(async (req, res, next) => {
    const { id } = await openToken(req.signedCookies[process.env.TOKEN_NAME])
    
    if(req.body.password) req.body.password = await hashPassword(req.body.password);
        
    await updateAdminById(id, req.body);

    return res.json({ status: true, message: "Changes Saved" })
});


