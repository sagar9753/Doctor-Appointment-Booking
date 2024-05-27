import express from 'express'
import { getAllReviews, createReview } from '../controllers/review.js'
import { verifyToken, restrict } from '../middleware/verifyToken.js'

const router = express.Router({mergeParams:true});

router.get("/", getAllReviews);
router.post("/", verifyToken, restrict(["patient"]),createReview);

export default router; 

