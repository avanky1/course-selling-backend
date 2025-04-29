const { Router } = require('express');
const userRouter = Router();

userRouter.get('/signup', (req, res) => {
  res.send({
     message: "User signup endpoint" 
});
});

userRouter.get('/signin', (req, res) => {
  res.send({ 
     message: "User signin endpoint" 
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


