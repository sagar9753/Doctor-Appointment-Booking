import User from '../models/User.js'
import Doctor from '../models/Doctor.js'
import Booking from '../models/Booking.js'
import Stripe from 'stripe'

export const getCheckoutSession = async(req,res)=>{
    try {
        const doctor = await Doctor.findById(req.params.doctorId)
        const user = await User.findById(req.userId)

        const stripe = new Stripe(process.env.STRIPE_SEC_KEY)
        console.log(doctor,user);

        // Create stripe checkout session 
        const session = await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            mode:'payment',
            success_url:`${process.env.CLIENT_SITE_URL}/checkout-success`,
            cancel_url:`${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
            customer_email: user.email,
            client_reference_id: req.params.doctorId,
            line_items:[
                {
                    price_data:{
                        currency:'bdt',
                        unit_amount:doctor.fees,
                        product_data:{
                            name: doctor.fullname,
                            description:doctor.bio,
                            images:[doctor.photo]
                        }
                    },
                    quantity:1
                }
            ]
        })

        const booking = new Booking({
            doctor:doctor._id,
            user:user._id,
            fees:doctor.fees,
            session:session.id
        })

        await booking.save()

        res.status(200).json({success:true, msg:"Payment Done Successfully", session})
    } catch (err) {
        console.log(err);
        res.status(500).json({success: false, msg:err.message})
    }
}

export const getAppointments = async(req, res)=>{
    try {
        const {id} = req.params;
        console.log("Hello",id);
        const appointments = await Booking.find({doctor : id})

        res.status(201).json({success: true, msg: "All Doctors found",data : appointments })
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}