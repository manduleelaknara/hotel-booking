import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        console.log("Token:", token ? "exists" : "missing");
        
        if(!token){
            return res.json({success: false, message: "not authenticated"})
        }

        const decoded = jwt.decode(token);
        console.log("Decoded userId:", decoded?.sub);
        
        const userId = decoded?.sub;
        if(!userId){
            return res.json({success: false, message: "not authenticated"})
        }

        const user = await User.findOne({_id: userId});
        console.log("User:", user ? "found" : "not found");
        
        if(!user){
            return res.json({success: false, message: "User not found"})
        }
        req.user = user;
        next()
    } catch (error) {
        console.log("Error:", error.message);
        res.json({success: false, message: error.message})
    }
}