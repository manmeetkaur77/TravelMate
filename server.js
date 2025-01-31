//-------------------------------------------------SERVER SETUP-------------------------------------------------
const dotenv = require("dotenv");
dotenv.config({path:'./config.env'});

const app = require("./app.js");


const port = process.env.PORT || 3000;
console.log(process.env)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



