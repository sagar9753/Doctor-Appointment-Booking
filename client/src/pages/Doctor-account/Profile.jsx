import { useState } from 'react'
import { toast } from 'react-toastify'
import BounceLoader from 'react-spinners/BeatLoader'
import { useSelector, useDispatch } from 'react-redux'
import { MdDeleteOutline } from "react-icons/md";

import { setLogin } from '../../state'
import uploadImgToCloudinary from '../../utils/uploadCloudinary'

const Profile = () => {
    const { user, token, role } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [imageURL, setImageURL] = useState(null);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
        bio: user.bio,
        gender: user.gender,
        speciality: user.speciality,
        fees: user.fees,
        qualifications: user.qualifications,
        experiences: user.experiences,
        timeSlots: user.timeSlots,
        about: user.about,
        photo: user.photo
    })
    const formKeys = Object.keys(formData)
    const checkUpdatedOrNot = () => {
        for (let item of formKeys){
            if( user[item] !== formData[item])
                return true;
        };
        return false;
    }

    const handleForm = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleFile = async (e) => {
        const file = e.target.files[0]
        const data = await uploadImgToCloudinary(file);

        setImageURL(data.url);
        setFormData({ ...formData, photo: data.url });
        console.log(formData);
    }


    // Reusable func for add item
    const addItem = (key, item) => {
        setFormData(prevData => ({ ...prevData, [key]: [...prevData[key], item] }))
    }

    // Reusable func for delete item
    const deleteItem = (key, ind) => {
        setFormData(prevData => ({
            ...prevData,
            [key]: prevData[key].filter((_, i) => i !== ind),
        }))
    }

    // Reusable func for input change
    const handleReusableInputChange = (key, ind, event) => {
        const { name, value } = event.target
        console.log(name, value);

        setFormData(prevData => {
            const updateItems = [...prevData[key]]

            updateItems[ind][name] = value

            return { ...prevData, [key]: updateItems }
        })
    }


    // handling Qualification operation
    const addQualification = e => {
        e.preventDefault();

        addItem("qualifications", { startingDate: "", endingDate: "", degree: "", university: "" })
    }
    const deleteQualification = (e, ind) => {
        e.preventDefault();
        deleteItem("qualifications", ind);
    }
    const handleQualificationChange = (event, ind) => {
        handleReusableInputChange("qualifications", ind, event);
    }

    // handling Experience operation
    const addExperience = e => {
        e.preventDefault();

        addItem("experiences", { startingDate: "", endingDate: "", position: "", hospital: "" })
    }
    const deleteExperience = (e, ind) => {
        e.preventDefault();
        deleteItem("experiences", ind);
    }
    const handleExperianceChange = (event, ind) => {
        handleReusableInputChange("experiences", ind, event);
    }

    // handling TimeSlot operation
    const addTimeSlot = e => {
        e.preventDefault();

        addItem("timeSlots", { day: "", startingTime: "", endingTime: "" })
    }
    const deleteTimeSlot = (e, ind) => {
        e.preventDefault();
        deleteItem("timeSlots", ind);
    }
    const handleTimeSlotChange = (event, ind) => {
        handleReusableInputChange("timeSlots", ind, event);
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!checkUpdatedOrNot()) {
            console.log("Result",false);
            setLoading(false)
            toast.warning("You did not updated anything");
            return;
        }

        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND}/doctors/${user._id}`, {
                method: 'put',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })

            const { msg, data } = await res.json()

            if (!res.ok) {
                throw new Error(msg)
            }
            setLoading(false);
            dispatch(setLogin({
                user: data,
                token: token,
                role: role
            }))
            toast.success(msg);
            // navigate('/login');

        } catch (err) {
            toast.error(err.message)
            setLoading(false)
        }

    }
    return (
        <div className='mt-5'>
            <h2 className='text-[20px] font-semibold'>Profile Information</h2>
            <form onSubmit={handleSubmit} className='py-4'>
                <div className="mb-5">
                    <p className='text-[15px] font-semibold mb-1'>Full Name*</p>
                    <input type="text" name="fullname" placeholder='Full Name' value={formData.fullname} onChange={handleForm}
                        className='form_input'
                    />
                </div>
                <div className="mb-5">
                    <p className='text-[15px] font-semibold mb-1'>Email*</p>
                    <input type="email" name="email" placeholder='Enter Email' value={formData.email} onChange={handleForm}
                        className='form_input bg-[#dde6f0]' disabled="true"
                    />
                </div>
                <div className="mb-5">
                    <p className='text-[15px] font-semibold mb-1'>Phone No*</p>
                    <input type="number" name="phone" placeholder='Phone Number' value={formData.phone} onChange={handleForm}
                        className='form_input'
                    />
                </div>
                <div className="mb-5">
                    <p className='text-[15px] font-semibold mb-1'>Bio*</p>
                    <input type="text" name="bio" placeholder='Bio' value={formData.bio} maxLength={100} onChange={handleForm}
                        className='form_input'
                    />
                </div>

                <div className="mb-5 grid grid-cols-3 gap-5">
                    <label className='text-[#3f3f3f] font-semibold '>
                        <p className='text-[15px] font-semibold mb-1'>Gender*</p>
                        <select name="gender"
                            value={formData.gender}
                            onChange={handleForm}
                            className='form_input'
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="femail">Female</option>
                        </select>
                    </label>
                    <label className='text-[#3f3f3f] font-semibold '>
                        <p className='text-[15px] font-semibold mb-1'>Speciality*</p>
                        <select name="speciality"
                            value={formData.speciality}
                            onChange={handleForm}
                            className='form_input'
                        >
                            <option value="">Select</option>
                            <option value="surgeon">Surgeon</option>
                            <option value="neurologist">Neurologist</option>
                            <option value="Dermatologist">Dermatologist</option>
                        </select>
                    </label>
                    <div>
                        <p className='text-[15px] font-semibold mb-1'>Fees*</p>
                        <input type="number" name="fees" placeholder='Fees' value={formData.fees} onChange={handleForm}
                            className='form_input'
                        />
                    </div>

                </div>


                <div className='mb-10'>
                    <p className='font-semibold mb-2'>Qualifications*</p>
                    {formData.qualifications?.map((item, ind) => <div key={ind} className='mb-5' >
                        <div className='grid grid-cols-2 gap-5 mb-5'>
                            <div>
                                <p className='text-[15px] mb-1'>Staring Date*</p>
                                <input type="date" name="startingDate" value={item.startingDate} className='form_input'
                                    onChange={e => handleQualificationChange(e, ind)}
                                />
                            </div>
                            <div>
                                <p className='text-[15px] mb-1'>Ending Date*</p>
                                <input type="date" name="endingDate" value={item.endingDate} className='form_input'
                                    onChange={e => handleQualificationChange(e, ind)}
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-5 mb-5'>
                            <div>
                                <p className='text-[15px] mb-1'>Degree*</p>
                                <input type="text" name="degree" value={item.degree} placeholder='Degree' className='form_input'
                                    onChange={e => handleQualificationChange(e, ind)}
                                />
                            </div>
                            <div>
                                <p className='text-[15px] mb-1'>University*</p>
                                <input type="text" name="university" value={item.university} placeholder='University' className='form_input'
                                    onChange={e => handleQualificationChange(e, ind)}
                                />
                            </div>
                        </div>
                        <button onClick={e => deleteQualification(e, ind)} className='p-1 bg-red-500 rounded-full'>
                            <MdDeleteOutline color='#ffff' size={20} />
                        </button>
                    </div>)}
                    <buton onClick={addQualification} className="btn text-[15px] p-2 cursor-pointer">
                        Add Qualification
                    </buton>
                </div>

                <div className='mb-10'>
                    <p className='font-semibold mb-2'>Experiences*</p>
                    {formData.experiences?.map((item, ind) => <div key={ind} className='mb-5' >
                        <div className='grid grid-cols-2 gap-5 mb-5'>
                            <div>
                                <p className='text-[15px] mb-1'>Staring Date*</p>
                                <input type="date" name="startingDate" value={item.startingDate} className='form_input'
                                    onChange={e => handleExperianceChange(e, ind)}
                                />
                            </div>
                            <div>
                                <p className='text-[15px] mb-1'>Ending Date*</p>
                                <input type="date" name="endingDate" value={item.endingDate} className='form_input'
                                    onChange={e => handleExperianceChange(e, ind)}
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-5 mb-5'>
                            <div>
                                <p className='text-[15px] mb-1'>Position*</p>
                                <input type="text" name="position" value={item.position} placeholder='Position' className='form_input'
                                    onChange={e => handleExperianceChange(e, ind)}
                                />
                            </div>
                            <div>
                                <p className='text-[15px] mb-1'>Hospital*</p>
                                <input type="text" name="hospital" value={item.hospital} placeholder='Hospital' className='form_input'
                                    onChange={e => handleExperianceChange(e, ind)}
                                />
                            </div>
                        </div>
                        <button onClick={e => deleteExperience(e, ind)} className='p-1 bg-red-500 rounded-full'>
                            <MdDeleteOutline color='#ffff' size={20} />
                        </button>
                    </div>)}
                    <buton onClick={addExperience} className="btn text-[15px] p-2 cursor-pointer">
                        Add Experience
                    </buton>
                </div>

                <div className='mb-10'>
                    <p className='font-semibold mb-2'>Time Slots*</p>
                    {formData.timeSlots?.map((item, ind) => <div key={ind} className='mb-5' >
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mb-5'>
                            <div>
                                <p className='text-[15px] mb-1'>Day*</p>
                                <select name="day" value={item.day} className='form_input'
                                    onChange={e => handleTimeSlotChange(e, ind)}
                                >
                                    <option value="">Select</option>
                                    <option value="sunday">Sunday</option>
                                    <option value="monday">Monday</option>
                                    <option value="tuesday">Tuesday</option>
                                    <option value="wednesday">Wednesday</option>
                                    <option value="thrusday">Thrusday</option>
                                    <option value="friday">Friday</option>
                                    <option value="saturday">Saturday</option>
                                </select>
                            </div>
                            <div>
                                <p className='text-[15px] mb-1'>Starting Time*</p>
                                <input type="time" name="startingTime" value={item.startingTime} className='form_input'
                                    onChange={e => handleTimeSlotChange(e, ind)}
                                />
                            </div>
                            <div>
                                <p className='text-[15px] mb-1'>Ending Time*</p>
                                <input type="time" name="endingTime" value={item.endingTime} className='form_input'
                                    onChange={e => handleTimeSlotChange(e, ind)}
                                />
                            </div>
                            <div className='flex items-center'>
                                <button onClick={e => deleteTimeSlot(e, ind)} className='p-1 bg-red-500 rounded-full mt-7'>
                                    <MdDeleteOutline color='#ffff' size={20} />
                                </button>
                            </div>
                        </div>
                    </div>)}
                    <buton onClick={addTimeSlot} className="btn text-[15px] p-2 cursor-pointer">
                        Add TimeSlot
                    </buton>
                </div>


                <div className="mb-5">
                    <p className='text-[15px] mb-1 font-semibold'>About*</p>
                    <textarea name="about" value={formData.about} rows={5} placeholder='Write about you' onChange={handleForm} className='form_input' ></textarea>
                </div>

                <div className=' flex items-center gap-3'>
                    {formData.photo && <div className='rounded-full border-2 flex items-center justify-center '>
                        <img src={formData.photo} alt="" className='w-[50px] h-[50px] rounded-full' />
                    </div>}
                    <div>
                        <input type="file" name='photo' id='userPic'
                            accept='.jpg, .png'
                            onChange={handleFile}
                            className="block file:cursor-pointer w-full text-sm file:py-2 file:px-4 file:rounded-md file:border-none file:font-semibold
              file:bg-[#a4a6a961] hover:file:bg-[#82838461]"
                        />
                    </div>
                </div>

                <button onClick={() => setLoading(true)} type='submit' className='btn w-full'>
                    {loading ? <BounceLoader color='#fff' /> : 'Update Profile'}
                </button>
            </form>
        </div>
    )
}

export default Profile