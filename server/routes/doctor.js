import express from 'express'
import { updateDoctor, deleteDoctor, getDoctor, getAllDoctor } from "../controllers/doctor.js";
import { verifyToken, restrict } from "../middleware/verifyToken.js";
import reviewRouter from './review.js'


const router = express.Router();

router.use("/:doctorId/reviews", reviewRouter)

router.get("/:id", getDoctor);
router.get("/", getAllDoctor);

router.put("/:id", verifyToken, restrict(["doctor"]), updateDoctor);
router.delete("/:id", verifyToken, restrict(["doctor"]), deleteDoctor);

export default router;