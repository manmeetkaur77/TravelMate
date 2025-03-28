const authController=require("./authController.js")


exports. getAllUsers=(req,res)=>{
    res.status(200).json({
        status:"success"
    })
}
exports. getUsers=(req,res)=>{
    res.send("hi")
    console.log("hi")
}
exports. delAllUsers=(req,res)=>{
    res.send("hi")
}
exports. patchAllUsers=(req,res)=>{
    res.send("hi")
}


