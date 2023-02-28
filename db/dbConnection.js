import mongoose from "mongoose";


// const mongoDb =  () => {
//     const MongodbUrl = ""
//     mongoose.connect(MongodbUrl, {
//         useNewUrlParser: true,
//         // useCreateIndex:true,
//         useUnifiedTopology: true,
//         // useFindAndModify: false,
//     }).then(() => {
//         console.log("Connection successFull")
//     }).catch(() => {
//         console.log("No connected")

//     })
// }

const mongoDb =  (MongodbUrl) => {
     mongoose.connect(MongodbUrl, {
        useNewUrlParser: true,
        // useCreateIndex:true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
    }).then(() => {
        console.log("Connection successFull")
    }).catch(() => {
        console.log("No connected")

    })
}



export default mongoDb