
const { Router } = require('express');
const courseRouter = Router();

courseRouter.post('/purchase', (req, res) => {
  res.send({ message: "User course purchase" });
});

courseRouter.get('/preview', (req, res) => {
  res.send({ message: "preview courses endpoint" });
});

module.exports = { courseRouter };








// const {Router} = require('express');

// const courseRouter = Router();

// courseRouter.post('/purchase', function (req, res) {
//      res.send({
//             message: "user course purchase"
//      });
// }) 

// courseRouter.get('/preview', function(req, res) {
//      res.send({
//             message: "all courses endpoint"
//      });
// }) 

// module.exports = {courseRouter: courseRouter};

