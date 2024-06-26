import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    },
    photo: {
        type: String
    },
    fees: {
        type: Number
    },
    role: {
        type: String,
    },

    // Fields for doctors only
    speciality: {
        type: String
    },
    qualifications: {
        type: Array,
    },

    experiences: {
        type: Array,
    },

    bio: {
        type: String,
        maxLength: 50
    },
    about: {
        type: String
    },
    timeSlots: {
        type: Array
    },
    reviews: [{
        type: mongoose.Types.ObjectId,
        ref: "Review"
    }],
    avgRating: {
        type: Number,
        default: 0,
    },
    totalRating: {
        type: Number,
        default: 0,
    },
    isApproved: {
        type: String,
        enum: ["pending", "approved", "cancelled"],
        default: "pending",
    },
    appointments: [{
        type: mongoose.Types.ObjectId,
        ref: "Appointment"
    }],
});

export default mongoose.model("Doctor", DoctorSchema);