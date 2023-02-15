import StudentModel from "../models/studentMod.js"

class StudentController{

    // Creating data
    static createDoc= async(req,res)=>{
        try {
            const {name,age,fees}=req.body
        const doc=new StudentModel({
            name:name,
            age:age,
            fees:fees,
        })
            
        
        const result = await doc.save()
        console.log(result)
        res.redirect("/student")
        } catch (error) {
            console.log(error)
            
        }
        

    }
    // Get all Data 
    static getAllDoc=async(req,res)=>{
        try {
            const result=await StudentModel.find()
            // console.log(result)
            res.render("./partial/index",{data:result})
        } catch (error) {
            console.log(error)
            
        }
       
    }

    // Edit Data
    static editDoc= async(req,res)=>{
        console.log(req.params.id)
        try {
            const result = await StudentModel.findById(req.params.id)
            console.log(result)
            res.render("./partial/edit",{data:result})    // result ka data me store h 
        } catch (error) {
            console.log(error)
        }

   
    }
    //Update data
    static UpadteDocById=async(req,res)=>{
        //  console.log(req.params._id)
        //  console.log(req.body)
        try {
            const result =await StudentModel.findByIdAndUpdate(req.params.id,req.body)                // req.body from above doc
        
            console.log(result)
        } catch (error) {
            console.log(error)
            
        }
        res.redirect("/student")
     
    }
    // Delete data
    static deleteDoc= async(req,res)=>{
        //console.log(req.params.id)
        try {
            const result =await StudentModel.findByIdAndDelete(req.params.id)
            console.log(result)
            res.redirect("/student")
        } catch (error) {
            console.log(error)
            
        }
    }
   
}

export default StudentController