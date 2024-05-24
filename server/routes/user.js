import express from 'express'
import { getAllUser, getUser, updateUser, deleteUser } from "../controllers/user.js";

import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get("/:id", getUser);
router.get("/", verifyToken, getAllUser);

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;

