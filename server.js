//-------------------------------------------------SERVER SETUP-------------------------------------------------
const dotenv=require("dotenv");
const app=require("./app.js")
const port = 3000;
dotenv.config({path: "/Users/manmeetkaur/Desktop/Big Folder/TravelMate/congif.env"});
console.log(process.env);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
