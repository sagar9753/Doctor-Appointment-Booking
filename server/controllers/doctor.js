import Doctor from "../models/Doctor.js";

export const updateDoctor = async (req, res) => {
    try {
        const doctorId = req.params.id;
        const updatedDoctor = await Doctor.findByIdAndUpdate(doctorId, { $set: req.body }, { new: true });

        res.status(200).json({ success: true, msg: "Doctor updated", data: updatedDoctor });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

export const deleteDoctor = async (req, res) => {
    try {
        const doctorId = req.params.id;
        await Doctor.findByIdAndDelete(doctorId);

        res.status(200).json({ success: true, msg: "Doctor Deleted" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

export const getDoctor = async (req, res) => {
    try {
        const doctorId = req.params.id;
        const doctor = await Doctor.findById(doctorId).select("-password")

        res.status(200).json({ success: true, msg: "Doctor found", data: doctor });
    } catch (err) {
        res.status(404).json({ success: false, error: err.message });
    }
}

export const getAllDoctor = async (req, res) => {
    try {
        const {query} = req.query;
        let doctors;

        if (query) {
            doctors = await Doctor.find({
                isApproved: "approved", $or: [
                    { name: { $regex: query, $options: "i" } },
                    { speciality: { $regex: query, $options: "i" } },
                ]
            }).select("-password")
        }
        else {
            doctors = await Doctor.find({isApproved: "approved"}).select("-password")
        }

        res.status(200).json({ success: true, msg: "All Doctors found", data: doctors });
    } catch (err) {
        res.status(404).json({ success: false, error: err.message });
    }
}