import dotenv from "dotenv"
import dbconnect from "./db/index.js"


dotenv.config({
    path:'./env'
})

//db connect is the async fuction so return a promise
dbconnect()
.then(() => {
 
    app.on("error",(error)=>{
         console.log("error: ",error);
         throw error;
        })
    
    app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server is running on port:,${process.env.PORT}`)
    
})
} )
.catch((err) =>{
      console.log("Mongo db is failed to connect",err)
})



/*
import {DB_NAME} from "constants";

import express from "express";
import { log } from "console";
const app= express()
;( async()=> {
     
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       app.on("error", (error) => {
        console.log("error: ",error);
       })
    
      app.listen(procces.env.PORT,()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
      })
    }

    catch(error){
        console.log("ERROR:",error);
        throw error;   
    }

})()

*/