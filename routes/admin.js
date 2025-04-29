const { Router } = require('express');
const adminRouter = Router();
const {adminModel} = require("../db");

const jwt = require("jsonwebtoken");
const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET

adminRouter.post("/signup", async (req,res) =>{
     const { email, password, firstname, lastname } = req.body;
 
     try {
       await adminModel.create({
         email,
         password,
         firstname,
         lastname
       });
       res.send({
         message: "admin signup successful",
       });
     } catch (error) {
       console.error("Signup error:", error);
       res.status(500).send({  
         message: "Error during user signup",
         error: error.message,
       });
     }
})

adminRouter.post("/signin", async (req,res) =>{
     const { email, password } = req.body;

     const admin = await adminModel.findOne({
    email: email,
    password: password
    //bcrypt logic here
  });
  if(admin){
    const token = jwt.sign({
      id: admin._id,
    }, JWT_ADMIN_SECRET);

    //cookies logic here write

    res.json({
      token: token,
    })

  }else{
    res.status(403).json({
      message: "Invalid credentials",
    });
  }

  res.send({ 
     message: "admin signin successfully", 
});
}) 

adminRouter.post("/", (req,res) =>{
     res.send({
          message: "Admin course endpoint"
     }); 
})

adminRouter.put("/", (req,res) =>{
     res.send({
          message: "Admin course adding endpoint"
     });
})



module.exports = { adminRouter };
