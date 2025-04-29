const express = require("express");
const app = express();


app.post('/user/signup', function(req, res) {
     res.send({
            message: "User signed up successfully"
     });

}) 

app.post('/user/signin', function(req, res) {
     res.send({
            message: "User signed in successfully"
     });

})

app.get('user/purchases', function(req, res) {
     res.send({
            message: "users course purchases endpoint"
     });
})
app.get('course/purchase', function(req, res) {
     res.send({
            message: "user course purchase"
     });
})


app.get('/courses', function(req, res) {
     res.send({
            message: "all courses endpoint"
     });

})






app.listen(300);
