import Review from "../models/Review.js";
import Doctor from "../models/Doctor.js";

export const createReview = async (req, res) => {
    try {
        if (!req.body.doctor)
            req.body.doctor = req.params.doctorId;
        if (!req.body.user)
            req.body.user = req.userId;


        const newReview = new Review(req.body);
        const savedReview = await newReview.save();

        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push: { reviews: savedReview._id }
        })

        res.status(200).json({ success: true, msg: "Review Submitted", data: { savedReview } });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});

        res.status(200).json({ success: true, msg: "Reviews found", data: reviews });
    } catch (err) {
        res.status(403).json({ success: false, error: err.message });
    }
}