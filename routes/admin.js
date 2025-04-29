const { Router } = require('express');
const adminRouter = Router();


adminRouter.post("./admin", (req,res) =>{
     res.send({
          message: "Admin endpoint"
     });
})


module.exports = { adminRouter };
