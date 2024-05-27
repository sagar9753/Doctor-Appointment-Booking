import mongoose from "mongoose";
import Doctor from "./Doctor.js";

const reviewSchema = new mongoose.Schema(
    {
        doctor: {
            type: mongoose.Types.ObjectId,
            ref: "Doctor",
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
        reviewText: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
            default: 0,
        },
    },
    {
        timestamps: true
    }
);
reviewSchema.pre(/^find/, function(next){
    this.populate({
        path:"user",
        select: "fullname photo",
    });
    next();
});

reviewSchema.statics.calcAvgRating = async function(doctorId){
    const stats = await this.aggregate([
        {
            $match : {doctor: doctorId},
        },
        {
            $group: {
                _id: "$doctor",
                noOfRating: {$sum:1},
                avgRating:{$avg:"$rating"},
            }
        }
    ])
    
    await Doctor.findByIdAndUpdate(doctorId,{
        totalRating: stats[0].noOfRating,
        avgRating: stats[0].avgRating
    });
}

reviewSchema.post("save", function(){
    this.constructor.calcAvgRating(this.doctor)
})

export default mongoose.model("Review", reviewSchema);