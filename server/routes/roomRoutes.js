import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";
import { createRoom, getOwnerRooms, getRooms, toggleRoomAvailability } from "../controllers/roomController.js";

const roomRouter = express.Router();

roomRouter.post('/', (req, res, next) => {
  upload.array("images", 4)(req, res, (err) => {
    if (err) {
      console.log("Upload error name:", err.name);
      console.log("Upload error message:", err.message);
      console.log("Full upload error:", JSON.stringify(err, null, 2));
      return res.status(500).json({ success: false, message: err.message });
    }
    next();
  });
}, protect, createRoom);

roomRouter.get('/', getRooms)
roomRouter.get('/owner', protect, getOwnerRooms)
roomRouter.post('/toggle-availability', protect, toggleRoomAvailability)

export default roomRouter;