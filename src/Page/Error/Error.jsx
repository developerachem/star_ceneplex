import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <section className='error_page'>
            <div className="container">
                <div className="error_body">
                    <div className="error_box">
                        <h1>4<span>0</span>4</h1>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        <Link to='/'>Back To Home</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}   

export default Error