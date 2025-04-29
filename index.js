const express = require("express");
const {useRouter} = require("./routes/user");
const {createUserRouter} = require("./routes/userRoutes");
const {createCourseRouter} = require("./routes/courseRoutes");

const app = express();

app.use("/user", useRouter);
app.use("/course", courseRouter);

// createUserRouter(app);
// createCourseRouter(app);

app.listen(300);
