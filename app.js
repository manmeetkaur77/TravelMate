
const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./Routes/tourRoutes.js");
const userRouter = require("./Routes/userRoutes.js");

// ✅ Define app first

console.log("NODE_ENV:", process.env.NODE_ENV);
const app = express(); 

app.use(morgan("dev"));


// Middleware to parse JSON in requests
app.use(express.json());

//-------------------------------------------------ROUTES-------------------------------------------------
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
