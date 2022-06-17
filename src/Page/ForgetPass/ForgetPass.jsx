import React from 'react'
import { Link } from 'react-router-dom'

const ForgetPass = () => {
    return (
        <>
            <section className='login_section'>
                <div className="container">
                    <div className="login_page">
                        <div className="login_box">
                            <div className="login_box_title">
                                <h4>Reset your password</h4>
                            </div>
                            <div className="login_form">
                                <form action="#">
                                    <div className="mb-3">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" id="email" className="form-control" />
                                    </div>
                                    <button type='submit' className='btn1 w-100'>Send reset link</button>
                                </form>
                                <div className="regstration_button">
                                    <Link to="/register">Did you have an account yet? <span>lOGIN</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForgetPass