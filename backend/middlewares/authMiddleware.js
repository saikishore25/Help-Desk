import jwt from "jsonwebtoken"

const authenticateUser = (req, res, next) => {

    const token = req.cookies.authToken 
    console.log("Token:", token)

    if(!token){

        console.log("No Token Found");
        return res.status(401).json({ message: 'No token provided' });
    }

    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // attach user info
        next();
    } 
    
    catch(error){

        console.log("Invalid Token")
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export default authenticateUser
