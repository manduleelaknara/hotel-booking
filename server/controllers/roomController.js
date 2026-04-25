import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

// Get all rooms
export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find({}).populate("hotel");
    res.json({ success: true, rooms });
  } catch (error) {
    console.log("Get rooms error:", error.message);
    res.json({ success: false, message: error.message });
  }
};

// Get single room
export const getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id).populate("hotel");
    if (!room) return res.json({ success: false, message: "Room not found" });
    res.json({ success: true, room });
  } catch (error) {
    console.log("Get room error:", error.message);
    res.json({ success: false, message: error.message });
  }
};

// Create room (Admin)
export const createRoom = async (req, res) => {
  try {
    const { roomType, pricePerNight, amenities, description } = req.body;

    const hotel = await Hotel.findOne({ owner: req.user._id });
    if (!hotel) {
      return res.status(404).json({ success: false, message: "Hotel not found for this user" });
    }

    const images = [];

    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        images.push(`/uploads/${file.filename}`);
      }
    }

    const room = await Room.create({
      hotel: hotel._id,
      roomType,
      pricePerNight,
      amenities: JSON.parse(amenities),
      description,
      images,
    });

    res.json({
      success: true,
      message: "Room created successfully",
      room,
    });
  } catch (error) {
    console.log("Create room error:", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Unknown error",
    });
  }
};

// Update room (Admin)
export const updateRoom = async (req, res) => {
  try {
    const { roomType, pricePerNight, amenities, description } = req.body;

    const room = await Room.findById(req.params.id);
    if (!room) return res.json({ success: false, message: "Room not found" });

    let images = room.images;

    if (req.files && req.files.length > 0) {
      images = [];
      for (const file of req.files) {
        images.push(`/uploads/${file.filename}`);
      }
    }

    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        roomType,
        pricePerNight,
        amenities: amenities ? JSON.parse(amenities) : room.amenities,
        description,
        images,
      },
      { new: true }
    );

    res.json({
      success: true,
      message: "Room updated successfully",
      room: updatedRoom,
    });
  } catch (error) {
    console.log("Update room error:", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Unknown error",
    });
  }
};

// Delete room (Admin)
export const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) return res.json({ success: false, message: "Room not found" });
    res.json({ success: true, message: "Room deleted successfully" });
  } catch (error) {
    console.log("Delete room error:", error.message);
    res.json({ success: false, message: error.message });
  }
};

// Get owner rooms
export const getOwnerRooms = async (req, res) => {
  try {
    const hotel = await Hotel.findOne({ owner: req.user._id });
    if (!hotel) {
      return res.json({ success: false, message: "Hotel not found" });
    }

    const rooms = await Room.find({ hotel: hotel._id });
    res.json({ success: true, rooms });
  } catch (error) {
    console.log("Get owner rooms error:", error.message);
    res.json({ success: false, message: error.message });
  }
};

// Toggle room availability
export const toggleRoomAvailability = async (req, res) => {
  try {
    const { roomId } = req.body;
    const room = await Room.findById(roomId);
    if (!room) return res.json({ success: false, message: "Room not found" });

    room.isAvailable = !room.isAvailable;
    await room.save();

    res.json({
      success: true,
      message: "Availability updated",
      room,
    });
  } catch (error) {
    console.log("Toggle availability error:", error.message);
    res.json({ success: false, message: error.message });
  }
};