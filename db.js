require('dotenv').config();
const mongoose = require('mongoose');
const { Schema } = mongoose;

async function connectDB() {
     try {
       await mongoose.connect(process.env.MONGODB_URI);   
       console.log("Connected to MongoDB...");
     } catch (err) {
       console.error("MongoDB connection error:", err);
     }
   }
   
connectDB();


const userSchema = new Schema({
     email: {
          type: String,
          required: true,
          unique: true
     },
     password: {
          type: String,
          required: true
     },
     fullname: {
          type: String,
          required: true
     },
     lastname: {
          type: String,
          required: true 
     }


})

const adminSchema = new Schema({
 
     email: {
          type: String,
          required: true,
          unique: true
     },
     password: {
          type: String,
          required: true
     },
     fullname: {
          type: String,
          required: true
     },
     lastname: {
          type: String,
          required: true 
     }

})

const courseSchema = new Schema({
     title: {
          type: String,
          required: true
     },
     description: {
          type: String,
          required: true
     },
     price: {
          type: Number,
          required: true
     },
     imageUrl:{
          type: String,
          required: true
     },
     createdBy: {
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'admin', 
          required: true 
     }
          
})


const purchaseSchema = new Schema({
     userId: { 
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'user', required: true 
     },
     courseId: { 
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'course', required: true 
     }
     
})

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);


module.exports = { userModel, adminModel, courseModel, purchaseModel };