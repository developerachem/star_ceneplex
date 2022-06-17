import React from 'react'
import { Link } from 'react-router-dom'
import { FaEyeSlash , FaEye } from "react-icons/fa";

const Login = () => {
    return (
        <>
            <section className='login_section'>
                <div className="container">
                    <div className="login_page">
                        <div className="login_box">
                            <div className="login_box_title">
                                <h4>Login to Cinetickets </h4>
                            </div>
                            <div className="login_form">
                                <form action="#">
                                    <div className="mb-3">
                                        <label htmlFor="email">Phone / Email</label>
                                        <input type="text" id="email" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password">Password</label>
                                        <div className="login_password_field">
                                            <input type="password" id="password" className="form-control" />
                                            <button><FaEye /></button>
                                        </div>
                                        <div className="forget_pass text-end">
                                            <Link to="/reset-password">Forgot your <span>Password ?</span></Link>
                                        </div>
                                    </div>
                                    <button type='submit' className='btn1 w-100'>LOGIN</button>
                                </form>
                                <div className="for_line">
                                    <span>OR</span>
                                </div>
                                <div className="gest_login">
                                    <button className='btn w-100'>Guest Login</button>
                                </div>
                                <div className="regstration_button">
                                    <Link to="/register">Did you have an account yet? <span>Register Now</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login