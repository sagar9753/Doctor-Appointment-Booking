import User from "../models/User.js";
import Booking from "../models/Booking.js"
import Doctor from "../models/Doctor.js";

export const getUserProfile = async (req, res) => {
    try {
        const userId = req.userId;

        const user = await User.findById(userId);

        if (!user)
            return res.status(404).json({ success: true, msg: "User not found" });

        const { password, ...rest } = user._doc;

        res.status(200).json({ success: true, msg: "Profile info found", data: { ...rest } });
    } catch (err) { 
        res.status(500).json({ success: false, error: err.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const checkEmail = await User.findOne({email: req.body.email});
        
        if(checkEmail && checkEmail.id !== userId)
            return res.status(400).json({ success: false, msg: "Email is already used" });

        const updatedUser = await User.findByIdAndUpdate(userId, { $set: req.body }, { new: true }).select('-password'); 
        res.status(200).json({ success: true, msg: "User updated", data: updatedUser });
    } catch (err) {
        res.status(500).json({ success: false, msg: err.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId);

        res.status(200).json({ success: true, msg: "User Deleted" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

export const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).select("-password")

        res.status(200).json({ success: true, msg: "User found", data: user });
    } catch (err) {
        res.status(404).json({ success: false, error: err.message });
    }
}

export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({}).select("-password")

        res.status(200).json({ success: true, msg: "All users found", data: users });
    } catch (err) {
        res.status(404).json({ success: false, error: err.message });
    }
}

export const getAppointments = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.userId });

        const doctorIds = bookings.map(ele => ele.doctor.id);

        const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select("-password");

        res.status(200).json({ success: true, msg: "Appointments are found", data: doctors });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}