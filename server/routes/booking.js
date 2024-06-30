import express from 'express'
import { verifyToken, restrict } from '../middleware/verifyToken.js'
import { getCheckoutSession, getAppointments } from '../controllers/booking.js'

const router = express.Router()
console.log("nujdnf");

router.post('/checkout-session/:doctorId', verifyToken, getCheckoutSession)

router.get('/get-appointments/:id', getAppointments);

export default router;