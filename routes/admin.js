const { Router } = require('express');
const adminRouter = Router();
const {adminModel, courseModel} = require("../db");

const jwt = require("jsonwebtoken");
const { JWT_ADMIN_SECRET } = require("../config"); 

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


adminRouter.post("/course", adminMiddleware, async (req,res) =>{
     const adminId= req.userId;

     const {title, description, price, imageUrl} = req.body;

     await courseModel.create({
          title,
          description,
          price,
          imageUrl,
          createdBy: adminId
     })
     res.send({
          message: "course added successfully",
          courseId: course._id
     }); 
})

adminRouter.put("/", (req,res) =>{
     res.send({
          message: "Admin course adding endpoint"
     });
})



module.exports = { adminRouter };
