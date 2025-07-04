import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/userRoute.js";
import ticketRoutes from "./routes/ticketRoute.js";
import connectDB from "./dbConnect.js";

dotenv.config();
connectDB();

const app = express();

const allowedOrigins = [
  "http://localhost:5173", "https://help-desk-frontend-omega.vercel.app"
];




// ✅ Main CORS middleware
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

// ✅ Body parser and cookie
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "API running successfully" });
});

app.use("/api/auth", userRoutes);
app.use("/api/tickets", ticketRoutes);

const PORT = process.env.PORT || 3001;
export default app;