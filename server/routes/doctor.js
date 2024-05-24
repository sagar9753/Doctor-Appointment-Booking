import { updateDoctor, deleteDoctor, getDoctor, getAllDoctor } from "../controllers/doctor.js";

import express from 'express'

const router = express.Router();

router.get("/:id", getDoctor);
router.get("/", getAllDoctor);

router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;