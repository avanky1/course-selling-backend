
function createCourseRoutes(app){
     
app.post('course/purchase', function (req, res) {
     res.send({
            message: "user course purchase"
     });
})


app.get('/courses', function(req, res) {
     res.send({
            message: "all courses endpoint"
     });

}) 

}


module.exports = createCourseRoutes;