const { Router } = require('express');
const adminRouter = Router();
const {adminModel} = require("../db");


adminRouter.post("./signup", (req,res) =>{
     res.send({
          message: "Admin signup endpoint"
     });
})

adminRouter.post("./signin", (req,res) =>{
     res.send({
          message: "Admin signin endpoint"
     });
}) 

adminRouter.post("./", (req,res) =>{
     res.send({
          message: "Admin course endpoint"
     }); 
})

adminRouter.put("./", (req,res) =>{
     res.send({
          message: "Admin course adding endpoint"
     });
})



module.exports = { adminRouter };
