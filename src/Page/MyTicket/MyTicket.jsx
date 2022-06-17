import React from 'react'
import ProfileSidbar from '../../Components/ProfileSidebar/ProfileSidbar'
import { FaTrash , FaEdit } from "react-icons/fa";


const MyTicket = () => {
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
                                <h4>Ticket List</h4>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>No</th>
                                            <th>Mobile No</th>
                                            <th>Date</th>
                                            <th>Show Time</th>
                                            <th>Booking Time</th>
                                            <th>Seat No</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>01764849199</td>
                                            <td>Jun 19, 22</td>
                                            <td>4:05 PM</td>
                                            <td>4:05 PM</td>
                                            <td>E8</td>
                                            <td>800 BDT</td>
                                            <td>Done</td>
                                            <td>
                                                <button><FaEdit /></button>
                                                <button><FaTrash /></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyTicket