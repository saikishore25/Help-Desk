import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import userModel from '../models/userModel.js'
import generateTokenAndSetCookie from '../utils/generateTokenAndSetCookie.js';

const SignUp = async (req, res) => {

    const {userName, email, password} = req.body;
    console.log(userName, email, password)

    if(!userName || !email || !password){

        return res.status(400).json({ message: 'All fields are required' });
    }
    try{

        const existingUser = await userModel.findOne({ email });
        console.log(existingUser)

        if(existingUser){

            console.log("xxxx")
            return res.status(400).json({ message:'Email already in use'});
        } 

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({userName, email, password: hashedPassword});
        const token = generateTokenAndSetCookie(newUser._id, res);

        console.log(token)

        res.status(201).json({ user: newUser, token });
    } 
    
    catch(error){

        console.error('Signup Server Error:', error); 
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const Login = async (req, res) => {

    const { userName, password } = req.body;

    try{

        const user = await userModel.findOne({ userName });
        if(!user){

            return res.status(401).json({ message: 'Invalid credentials' });
        } 

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){

            return res.status(401).json({ message: 'Invalid credentials' });

        } 

        const token = generateTokenAndSetCookie(user._id, res)
        return res.status(200).json({message:"User Logged In Successfully",user, userID:user._id});
    } 
    
    catch(error){

        return res.status(500).json({message:'Server error', error:error.message});
    }
};

const Logout = async (req, res) => {

    const {userID} = req.body;
    console.log("UserID", userID)
    const user = await userModel.findOne({_id:userID});
    console.log("User to logout Found", user);

    if(!user){

        console.log("Unknown User Trying To Logout!!");
        return res.status(401).json({message:"Unknown User Trying To Logout!!"})
    }
    res.clearCookie('authToken', {

        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // false in dev
        sameSite: process.env.NODE_ENV === 'production' ? 'Strict' : 'Lax',
        path: '/', // MUST match path used in res.cookie()
        
    });

    return res.status(200).json({message:'Logged out successfully'});
};


const checkAuth = async (req, res)=>{
    
    try{
        
        console.log("Checking User Authentication...")
        console.log(req.user)
        const user = await userModel.findById(req.user.id);
        console.log("User Found:", user);

        return res.status(200).json({message:"User is Authenticated", isAuthenticated: true, user:user.userName, userID:user._id});
        
    }

    catch(error){
         
        console.log("Internal Server Error", error);
        return res.status(500).json({message:"Server Error"})

    }
  
}
 


export {SignUp, Login, Logout, checkAuth};
