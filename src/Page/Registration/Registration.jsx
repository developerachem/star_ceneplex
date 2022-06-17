import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
    return (
        <>
            <section className="register_section">
                <div className="container">
                    <div className="register_page">
                        <div className="register_box">
                            <div className="register_title">
                                <h4>Register to Cinetickets</h4>
                            </div>
                            <div className="register_body">
                                <form action="#">
                                    <div className="mb-3">
                                        <label htmlFor="regName">Full Name</label>
                                        <input type="text" className="" id="regName" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="regNumber">Mobile Number</label>
                                        <div className="reg_number">
                                            <span>+880</span>
                                            <input type="cell" className="" id="regNumber" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="regEmail">Email</label>
                                        <input type="text" className="" id="regEmail" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="">Gender</label>
                                        <select name="" id="" className=''>
                                            <option value="">--Select--</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="regFile">Select Image</label>
                                        <input type="file" className="" id="regFile" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="regPass">Password</label>
                                        <input type="password" className="" id="regPass" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="regConfPass">Confirm Password</label>
                                        <input type="password" className="" id="regConfPass" />
                                    </div>
                                    <button type='submit' className='btn1 w-100'>Register</button>
                                </form>
                                <div className="login_button">
                                    <Link to="/login">Already have an account? <span>Login Now</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Registration