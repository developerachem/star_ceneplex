import React from 'react'
import ProfileSidbar from '../../Components/ProfileSidebar/ProfileSidbar'

const ChangePass = () => {
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
                                <h4>Change Password</h4>
                                <form action="#">
                                    <div className="mb-3">
                                        <label htmlFor="">Old Password</label>
                                        <input type="password" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="">New Password</label>
                                        <input type="password" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="">Confirm Password</label>
                                        <input type="password" />
                                    </div>
                                    <div className="text-end mt-4">
                                        <button >Update Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChangePass