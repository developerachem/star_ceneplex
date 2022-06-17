import React from 'react'
import ProfileSidbar from '../../Components/ProfileSidebar/ProfileSidbar'

const EditProfile = () => {
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
                                <form action="#">
                                    <div className="mb-3">
                                        <label htmlFor="">Name</label>
                                        <input type="text" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="">Mobile Number</label>
                                        <input type="text" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="">Email Address</label>
                                        <input type="text" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="">Gender</label>
                                        <select name="" id="">
                                            <option value="">--Select--</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="">Member Since</label>
                                        <p>May 10, 2022</p>
                                    </div>
                                    <div className="text-end mt-4">
                                        <button >Save Now</button>
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

export default EditProfile