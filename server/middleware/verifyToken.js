import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Doctor from "../models/Doctor.js";

export const verifyToken = async (req, res, next) => {
    try {
        let token = req.header("Authorization");
        
        token = token.split(" ")[1];
        if (token === "null") {
            return res.status(403).json({msg:"Access denied"});
        }

        const verify = jwt.verify(token, process.env.JWT_SEC_KEY);

        req.userId = verify.id;
        req.role = verify.role;
        next();
    }
    catch (err) {
        res.status(500).json({ msg: err.message })
    }
}
export const restrict = roles => async (req, res, next) => {
    const userId = req.userId;

    let user;

    const patient = await User.findById(userId)
    const doctor = await Doctor.findById(userId);

    if (patient)
        user = patient;
    if (doctor)
        user = doctor;


    if (!roles.includes(user.role)) {
        return res.status(401).json({ success: false, msg: "You are not allowed to do this" })
    }
    next();
}