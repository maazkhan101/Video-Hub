// require("dotenv").config();

import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";

import connectDB from "./db/index.js";


dotenv.config({
    path: "./env",
});
connectDB()
.then(() => {

    app.listeen(process.env.PORT || 8000, () => {

        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })

}).catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
});


// (async () => {
//   try { 
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error"  , (error) => {
//         console.log("ERROR",error);
//         throw error;
//   })

//   app.listen(process.env.PORT, () => {

//     console.log(`Server is running on port ${process.env.PORT}`);
//   })
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
// }
// )   ();