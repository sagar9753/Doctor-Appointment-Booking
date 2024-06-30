import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors' 

import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'
import doctorRoute from './routes/doctor.js'
import reviewRoute from './routes/review.js'
import bookingRoute from './routes/booking.js'

dotenv.config();
const app = express();

app.use(express.json()); 
app.use(cors());  
app.use(cookieParser());

app.use("/auth", authRoute); 
app.use("/users", userRoute);
app.use("/doctors", doctorRoute)
app.use("/reviews",reviewRoute)
app.use("/bookings", bookingRoute)

// Connection with mongodb atlas

const port = process.env.PORT || 8000; 

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(port, () => console.log(`con successfull on Port : ${port}`));
}).catch((err) => {
    console.log(`Connection unsuccessfull, Error : ${err}`);
}) 