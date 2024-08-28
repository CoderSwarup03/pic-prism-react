const jwt = require("jsonwebtoken")

// middleware have three things (1. req, 2. res, 3. next)
const verifyToken = async (req, res, next) => {
    const authHeader = req.header("Authorization");

    const token = authHeader && authHeader.split("")[1];
    if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });

    try {

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err)
                return res.status(403).json({ success: false, message: "Forbidden" });

            req.id = user.id;
            req.author = user.author;
            req.accountType = user.accountType;

            // next function moving
            next();
        });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal Servar Error" })
    }
}


// Bearer ej4597cd7v545fx8f
// We have splite this token->
// [ 'Bearer', 'ej4597cd7v545fx8f' ]