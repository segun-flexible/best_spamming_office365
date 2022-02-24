
const asyncHandler = require("../../helpers/asyncHandler");
const { getDateFormatForPost } = require("../../helpers/dateTime");
const { getLogs, deleteLogById } = require("../../helpers/logs");
const { getNextOffset, paginateData } = require("../../helpers/pagination");

exports.adminDashboardGet = asyncHandler(async (req, res, next) => {
 
    const limit = req.query.limit || parseInt(process.env.LIMIT),currentPage = parseInt(req.query.page)|| 1;
   
    //Pagination VAR
    let paginationArr,link,prevBtn = null, nextBtn = null;

    const logs = await getLogs(limit, getNextOffset(currentPage, limit));
    
    await logs.map(l => {
        l.l_created_at = getDateFormatForPost(l.l_created_at)
    })

    //Pagination
    const pageData = await getLogs(99999999999, 0);
    paginationArr = paginateData(limit, pageData.length);
 
    //Prev
    if (currentPage > 1) {
        prevBtn = currentPage - 1;
    }

    //Next
    if (currentPage !== "" && paginationArr[paginationArr.length - 1] > currentPage) {
        nextBtn = currentPage + 1
    };

    //Pagination Link
    const url = req.originalUrl.split("?")[0];

    link = `${url}?`
    
    //Response Back
    return res.render("admin/pages/dashboard/dashboard", {
        title: "Admin ",
        logs,
        prevBtn,
        nextBtn,
        currentPage,
        paginationArr,
        link
    })

})

exports.adminDashboardDelete = asyncHandler(async (req, res, next) => {
    
    await deleteLogById(req.body.id);
    res.json({status:true,message:"Logs Deleted"})
})