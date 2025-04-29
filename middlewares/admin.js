const jwt = require("jsonwebtoken");
const JWT_ADMIN_SECRET = process.env.JWT_USER_SECRET


function adminMiddleare(req, res, next){
     const token = req.headers.token;
     const decoded = jwt.verify(token, JWT_ADMIN_SECRET)
     if(decoded){
          req.userId = decoded.id;
          next()
     }else{
          req.status(403).json({
               message: "you are not signed in"
          })
     }

}

module.exports= {
     userMiddleare: userMiddleare
}