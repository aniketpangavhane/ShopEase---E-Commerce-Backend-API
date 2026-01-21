const app = require("./app");
const connectDB = require("./config/db");
require("dotenv").config();

connectDB();

app.listen(process.env.PORT,()=>{
    console.log({
        message:"Server running on PORT 5000"
    });
});

