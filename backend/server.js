import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import userRoutes from "./routes/userRoute.js"
import ticketRoutes from "./routes/ticketRoute.js"
import connectDB from "./dbConnect.js"
import cookieParser from "cookie-parser"


const app = express();
app.options('*', cors({
  origin: "https://help-desk-frontend-bay.vercel.app",
  credentials: true
}));

app.use(cors({
    origin: "https://help-desk-frontend-bay.vercel.app",
    
    credentials:true
}))
app.use(express.json());
app.use(cookieParser())

const PORT = process.env.PORT || 3001

connectDB()

app.get("/",(req, res)=>{

    return res.json({"message":"API RUNNING SUCCESSFULLY"})

})

app.use("/api/auth",userRoutes)
app.use("/api/tickets",ticketRoutes)

app.listen(PORT, ()=>{

    console.log(`Server Running on Port ${PORT}`)

})