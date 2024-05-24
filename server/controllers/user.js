import User from "../models/User.js";

export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(userId, { $set: req.body }, { new: true });

        res.status(200).json({ success: true, msg: "User updated", data: updatedUser });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
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