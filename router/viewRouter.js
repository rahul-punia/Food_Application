const viewRouter=require("express").Router();
const {getTrialPage,getHomePage,getPlansPage,getLoginPage}=require("../controller/viewController")
viewRouter.get("/trial",getTrialPage);
viewRouter.get("/",getHomePage);
viewRouter.get("/plan",getPlansPage);
viewRouter.get("/login",getLoginPage);
module.exports=viewRouter;