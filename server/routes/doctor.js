import express from 'express'
import { updateDoctor, deleteDoctor, getDoctor, getAllDoctor, getDoctorProfile } from "../controllers/doctor.js";
import { verifyToken, restrict } from "../middleware/verifyToken.js";
import reviewRouter from './review.js'


const router = express.Router();

router.use("/:doctorId/reviews", reviewRouter)

router.get("/:id", getDoctor);
router.get("/", getAllDoctor);
router.get("/profile/me", verifyToken, restrict(["doctor"]), getDoctorProfile);

router.put("/:id", verifyToken, restrict(["doctor"]), updateDoctor);
router.delete("/:id", verifyToken, restrict(["doctor"]), deleteDoctor);

export default router;