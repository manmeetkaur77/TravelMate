const userController=require("../Controllers/userController.js");
const express=require("express");
const userrouter=express.Router();

userrouter.route('/').get(userController.getAllUsers);
module.exports=userrouter