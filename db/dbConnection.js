import mongoose from "mongoose";

const mongoDb=async(MongodbUrl)=>{
    try{
        mongoose.connect(MongodbUrl)
        console.log("DB connect successfully")
    }
    catch (error){
        console.log("db not connect error")
    }
}

export default mongoDb