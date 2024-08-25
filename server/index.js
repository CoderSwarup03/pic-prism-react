// 4 steps to create a server
// -> 1. Express ko bulana padega && 
const express = require('express');
const dotenv = require('dotenv');

// bindind env files
dotenv.config();

// -> 2. Express ko call karna padega ak var mai.
const app = express();

// -> 3. Port define karna padega(means like a door)
const port = process.env.PORT || 8000;

// -> 4. Making routes
app.get("/",(req, res) =>{
    res.send("Hellow Server");
})

// -> 5. Server start karna padega
app.listen(port,()=> {
    console.log(`Server is running on port ${port}`)
})