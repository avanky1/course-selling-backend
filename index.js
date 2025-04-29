const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");


// const {createUserRouter} = require("./routes/userRoutes");
// const {createCourseRouter} = require("./routes/courseRoutes");

const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

// createUserRouter(app);
// createCourseRouter(app);

app.listen(3000, () => console.log("Server is running"));
