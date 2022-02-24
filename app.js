const express = require('express');
const cors = require("cors");
const hpp = require("hpp");
const path = require('path');
const cookieParser = require('cookie-parser');
const errorMiddleWare = require("./middleware/errorMiddleware");
const logger = require("./helpers/logger");
const generalRoute = require("./routes/general/general");
const adminRoute = require("./routes/admin/admin");
const authRoute = require('./routes/auth/auth');





try {


//Require ENV
require("dotenv").config()


//Required Database
/* require('./models/db'); */

const app = express();

//Cors
app.use(cors({origin:"*",credentials:true}))


//Helmet

  /* app.use(helmet(
  {
    contentSecurityPolicy: false,
  }
)) */


//Hpp Security
app.use(hpp())

  // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

  

app.use(express.json({ limit: "900mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static(path.join('public')));


//Routes


//AUTH ROUTE
app.use("/", authRoute)

//GENERAL ROUTE
app.use("/", generalRoute)

//ADMIN ROUTE
app.use("/admin", adminRoute)




//Error Middleware
app.use(errorMiddleWare)


app.listen(process.env.PORT || 3000 ,()=>console.log("Started")) 
  

process.on('uncaughtException', function (err) {
  logger.debug(err)
});

process.on('unhandledRejection', (reason, promise) => {
  logger.debug(reason)
})




  
} catch (error) {
  logger.debug(error)
}