// 4 steps to create a server
// -> 1. Express ko bulana padega && 
const express = require('express');
const dotenv = require('dotenv');
const { connetDb } = require("./connection");
// readdirSync used for folder stracture read
const {readdirSync} = require('fs')


// const authRoute = require("./routes/authRoutes")


// bindind env files
dotenv.config();

// -> 2. Express ko call karna padega ak var mai.
const app = express();

// -> 3. Port define karna padega(means like a door)
const port = process.env.PORT || 8000;

// app.use("/api",authRoute);



// -> 4. Making routes
app.get("/", (req, res) => {
    res.send("Hellow Server");
})


connetDb();

// how to use routes
// app.use("/api", authRoute);
// call readdirSync 

// importing and using routes dynmamically
readdirSync("./routes").map((route) => {
    app.use("/api",require(`./routes/${route}`))
})

// console.log(readdirSync("./routes"))

// -> 5. Server start karna padega
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})