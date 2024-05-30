import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Doctor from "../models/Doctor.js";

export const verifyToken = async (req, res, next) => {
    try {
        let token = req.header("Authorization");

        if (!token) {
            return res.status(403).send("Access denied");
        }
        token = token.split(" ")[1];

        const verify = jwt.verify(token, process.env.JWT_SEC_KEY);

        req.userId = verify.id;
        req.role = verify.role;
        next();
    }
    catch (err) {
        res.status(500).json({ error: err.message })
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
        return res.status(401).json({ success: false, message: "You are not authorized" })
    }
    next();
}