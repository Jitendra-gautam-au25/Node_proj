import mongoose from "mongoose";

const mongoDb=async()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/CurdPro")
        console.log("DB connect successfully")
    }
    catch (error){
        console.log("db not connect error")
    }
}

export default mongoDb