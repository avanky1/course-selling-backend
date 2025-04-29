const { Router } = require('express');
const adminRouter = Router();
const {adminModel} = require("../db");


adminRouter.post("./signun", (req,res) =>{
     res.send({
          message: "Admin signup endpoint"
     });
})

adminRouter.post("./signin", (req,res) =>{
     res.send({
          message: "Admin signin endpoint"
     });
})

adminRouter.post("./course", (req,res) =>{
     res.send({
          message: "Admin course endpoint"
     });
})

adminRouter.put("./course", (req,res) =>{
     res.send({
          message: "Admin course adding endpoint"
     });
})



module.exports = { adminRouter };
