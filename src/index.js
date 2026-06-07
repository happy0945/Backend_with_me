
import DBConnection from "./db/index.js"


DBConnection()






// (async()=> {

//     try {
        
//         const connectioInstant = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("Error:", (error)=>{
//             console.log("ERROR:", error)
//             throw error;
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`Server Listing at PORT ${process.env.PORT}`)
//         })



//     } catch (error) {
//         console.log("ERROR: ", error)

//     }

// })()