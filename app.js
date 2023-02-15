import  Express  from "express";
import mongoDb from "./db/dbConnection.js";
import {join} from "path"
import web from "./routes/web.js"

const port=3000

const app=Express()

// mongoodb
mongoDb()

app.use(Express.urlencoded({extended:false}))
app.use(Express.json());

app.use("/student",Express.static(join(process.cwd(),"public")))
app.use("/student/edit",Express.static(join(process.cwd(),"public")))
app.set("view engine","ejs")

app.use("/student",web)

// app.get("/student",(req,res)=>{
//     res.send("Helo serever")

// })



app.listen(port,()=>{
    console.log(`Sever is Runing at ${port}`)
})