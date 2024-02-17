import dotenv from "dotenv"
import dbconnect from "./db/index.js"


dotenv.config({
    path:'./env'
})

dbconnect();


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