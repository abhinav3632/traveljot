import React, {useState} from 'react'
import loginImg from '../assets/img3.jpg'
import { Link } from "react-router-dom";


export const SignUp = () => {
    let [open, setOpen] = useState(false);
    const [type, setType] = useState('password');
    const handleToggle = () => {
        if (type === 'password') {
            setType('text');
        }
        else {
            setType('password');
        }
    }
    
    return (
        <section className='bg-gradient-to-b from-[#1697B6] to-blue-50 min-h-screen flex items-center justify-center pt-8'>
            <div className='bg-gray-100 flex shadow-xl rounded-2xl max-w-3xl py-6 px-5 items-center'>
                <div className='sm:w-1/2 px-8 md:px-16'>
                    <h2 className='font-bold text-3xl  text-[#1697B6]'>Sign Up</h2>
                    <p className='text-sm mt-4  text-gray-600'>Create an account!</p>

                    <form action="" className="flex flex-col gap-4">
                        <input className="p-2 mt-8 rounded-xl border" type="text" name="name" placeholder="Name" required />
                        <input className="p-2 rounded-xl border" type="email" name="email" placeholder="Email" required />
                        <div className="relative">
                                <input className="p-2 rounded-xl border w-full" type={type} name="password" placeholder="Password" required />
                                <div onClick={() => setOpen(!open)} className="cursor-pointer absolute top-1/2 right-3 -translate-y-1/2">
                                    <i onClick={handleToggle} className={open ? "fa-light fa-eye text-gray-600" : "fa-light fa-eye-slash text-gray-600"}></i>
                                </div>
                            </div>
                        <button className="bg-[#3736BF] rounded-xl text-white py-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.02]  
                        ease-in-out transform">Sign Up</button>
                    </form>

                    <div className="mt-12 text-xs flex justify-between items-center text-gray-600">
                        <p>Already have an account? </p>
                        <Link exact to="/login">
                            <button className="py-2 px-4 font-semibold text-white shadow-md bg-white border rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05]  
                        ease-in-out transform">Log In</button>
                        </Link>
                    </div>

                </div>
                <div className='sm:block hidden w-1/2 p-2'>
                    <img src={loginImg}
                        className=" rounded-2xl shadow-lg mx-auto"
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}
