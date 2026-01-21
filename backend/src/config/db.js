const mongoose = require("mongoose");

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGU_URI);
      console.log("MONGODB connected Successfully");
    } catch (error) {
       console.log("MongoDB not connected",error);
    }
};

module.exports=connectDB;