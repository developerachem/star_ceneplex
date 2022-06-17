import React from 'react'
import ProfileSidbar from '../../Components/ProfileSidebar/ProfileSidbar'

const Profile = () => {
    return (
        <>
            <section className='user_profile'>
                <div className="container">
                    <div className="user_profile_body">
                        <div className="side_menu">
                            <ProfileSidbar />
                        </div>
                        <div className="profile_page">
                            <div className="profile_body">
                                <h4>Basic Information</h4>
                                <ul>
                                    <li>
                                        <span>Name</span>
                                        <p>MD ACHEM</p>
                                    </li>
                                    <li>
                                        <span>Mobile Number</span>
                                        <p>01764849199</p>
                                    </li>
                                    <li>
                                        <span>Email Address</span>
                                        <p>mdachem6@gmail.com</p>
                                    </li>
                                    <li>
                                        <span>Gender</span>
                                        <p>Male</p>
                                    </li>
                                    <li>
                                        <span>Member Since</span>
                                        <p>May 10, 2022</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile