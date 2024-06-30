import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from '../models/User.js'
import Doctor from '../models/Doctor.js'

export const register = async (req, res) => {
    try {
        const { fullname, email, password, role, gender, photo } = req.body;

        let user = null;
        if (role === 'patient') {
            user = await User.findOne({ email: email });
        }
        else if (role === 'doctor') {
            user = await Doctor.findOne({ email: email });
        }

        if (user)
            return res.status(400).json({ msg: "Email is Already used" });

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        let newUser = null;
        if (role === 'patient') {
            newUser = new User({
                fullname, email, password: hashPassword, photo, gender, role
            })
        }
        if (role === 'doctor') {
            newUser = new Doctor({
                fullname, email, password: hashPassword, photo, gender, role
            })
        }
        await newUser.save();

        res.status(200).json({ success: true, msg: "User registered" })


    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });
        let user = null;

        if (patient)
            user = patient;
        if (doctor)
            user = doctor;


        if (!user)
            return res.status(404).json({ msg: "User not found" })

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch)
            return res.status(400).json({ msg: "Invalid email or password" });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SEC_KEY);

        const { role, appointments, ...rest } = user._doc;

        res.status(200).json({ success: true, msg: "User Loged In", token, data: { ...rest }, role })

    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}