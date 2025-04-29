const { Router } = require('express');
const { userModel } = require("../db"); 
const userRouter = Router();

userRouter.post('/signup', async (req, res) => {
  const { email, password, firstname, lastname } = req.body;
 
  try {
    await userModel.create({
      email,
      password,
      firstname,
      lastname
    });
    res.send({
      message: "User signup successful",
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).send({
      message: "Error during user signup",
      error: error.message,
    });
  }
});

userRouter.post('/signin', (req, res) => {
  const { email, password } = req.body;
  res.send({ 
     message: "User signin successfully", 
});
});

userRouter.get('/purchases', (req, res) => {
  
  res.send({
     message: "User purchase endpoint"
});
});

module.exports = { userRouter };





// // const express = require('express');
// // const Router = express.Router;

// const {Router} = require('express'); // uper ke 2 line aur ye 1 line same kaam karte h

// const userRouter = Router();

// userRouter.get('/signup', function(req, res) {
//      res.send({
//           message: "User signup endpoint"
//      });
// }); 

// userRouter.get('/signin', function(req, res) {
//      res.send({
//           message: "user signin endpoint"
//      });
// });

// userRouter.get('/purchases', function(req, res) {
//      res.send({
//           message: "user purchase endpoint"
//      });
// });


// module.exports = {userRouter:userRouter};


