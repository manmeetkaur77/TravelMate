//-------------------------------------------------SERVER SETUP-------------------------------------------------
//-------------------------------------------------SERVER SETUP-------------------------------------------------
const mongoose = require('mongoose');
const express = require('express');
const app = require("./app.js");
const connectDB = require('./db/index.js');
const dotenv = require("dotenv");
dotenv.config({path:'./congif.env'});

connectDB();


const port = process.env.PORT;
console.log(process.env)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});






