import express from 'express'
import { getAllUser, getUser, updateUser, deleteUser, getUserProfile, getAppointments } from "../controllers/user.js";

import { verifyToken, restrict } from '../middleware/verifyToken.js';

const router = express.Router();

router.get("/:id", verifyToken, restrict(["patient"]), getUser);
router.get("/", verifyToken, restrict(["admin"]), getAllUser);
router.get("/profile/me", verifyToken, restrict(["patient"]), getUserProfile);
router.get("/appointments/my-appointments", verifyToken, restrict(["patient"]), getAppointments);

router.put("/:id", verifyToken, restrict(["patient"]), updateUser);
router.delete("/:id", verifyToken, restrict(["patient"]), deleteUser);

export default router;

