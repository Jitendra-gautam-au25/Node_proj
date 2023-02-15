import mongoose from "mongoose";


const studentSchema=new mongoose.Schema({
    name:{type:String,
        required:true,
        trim:true},
    age:{type:Number,
        required:true,
        min:18,
        max:60},
    fees:{type:Number,
        required:true,
    }
})



//Models

const StudentModel=mongoose.model("Record",studentSchema)

export default StudentModel;