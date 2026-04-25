import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
 
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
 
import userRouter from "./routes/userRoutes.js";
import hotelRouter from "./routes/hotelRoutes.js";
import roomRouter from "./routes/roomRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";
 
connectDB();
 
const app = express();
 
app.use(express.json());
app.use("/uploads", express.static("uploads"));
 
app.use(cors({
    origin: "*",
    credentials: false
}));
 
app.use(clerkMiddleware());
 
app.use("/api/clerk", clerkWebhooks);
 
app.get("/", (req, res) => res.send("API is working"));
 
app.use("/api/user", userRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/bookings", bookingRouter);
 
const PORT = process.env.PORT || 3000;
 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));