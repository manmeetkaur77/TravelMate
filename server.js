//-------------------------------------------------SERVER SETUP-------------------------------------------------
//-------------------------------------------------SERVER SETUP-------------------------------------------------
const mongoose = require('mongoose');
const express = require('express');
const app = require("./app.js");
const connectDB = require('./db/index.js');
const dotenv = require("dotenv");

dotenv.config({path:'./congif.env'});

connectDB();
//console.log(process.env)
app.use("/",(req,res)=>{
    res.send("hi")
    console.log("Server is running...");
})

const port =8080;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});







