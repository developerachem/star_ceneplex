import React, { useState } from 'react'
import  { Link } from 'react-router-dom'
import { BsGeoAltFill } from "react-icons/bs";
import ModalComponents from '../../Components/Modal/ModalComponents';

const MovieDetail = () => {
    
    // Triler Modal State Managment 
    const [ triler , setTriler ] = useState(false)
    // Triler Modal Show Handler
    const handleTrilerModal = () => {setTriler(true)}
    // Triler Modal Hide Handler
    const handleTrilerModalHide = () => {setTriler(false)}

    // Location Modal State Managment
    const [ location , setLocation ] = useState(false)
    // Location Modal Show handler
    const handleLocationModalShow = () => setLocation(true)
    // Location Modal Hide handler
    const handlelocationModalHide = () => setLocation(false)


    return (
        <>
            <ModalComponents type="video" show={ triler } hide={ handleTrilerModalHide } />
            <ModalComponents type="location" show={ location } hide={ handlelocationModalHide } />

            <section className='details_banner'>
                <div className="">
                    {/* 🤣🤣 */}
                </div>
            </section>
            <section className='movie_details'>
                <div className="container">
                    <div className="test">
                        <div className="movie_details_content">
                            <div className="movie_details_content_left">
                                <img src="https://image.cineplexbd.com/movies/165502476191156.webp" alt="" />
                            </div>
                            <div className="movie_details_content_right">
                                <h5>Jurassic World Dominion (3D)</h5>
                                <span>Star <small>N\A</small></span>
                                <table className=''>
                                    <tbody>
                                        <tr>
                                            <th>Category</th>
                                            <th><p>: achem</p></th>
                                        </tr>
                                        <tr>
                                            <th>Actor</th>
                                            <th><p>: achem</p></th>
                                        </tr>
                                        <tr>
                                            <th>Genre </th>
                                            <th><p>: achem</p></th>
                                        </tr>
                                        <tr>
                                            <th>Release </th>
                                            <th><p>: achem</p></th>
                                        </tr>
                                        <tr>
                                            <th>Language </th>
                                            <th><p>: achem</p></th>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href='#showTime' className='btn1'>Show Time</a>
                                <button className='btn2' onClick={handleTrilerModal} >Watch Trailer</button>
                            </div>
                        </div>
                        <div className="singel_show_time">
                            <div className="show_content">
                                <h2>Showtime</h2>
                                <p>[ Star Cineplex, SKS Tower, Mohakhali ]</p>
                                <button onClick={handleLocationModalShow}>Change Location <BsGeoAltFill/></button>
                            </div>
                        </div>
                        <div className="show_time_area" id='showTime'>
                            <div className="show_time_box">
                                <div className="show_time_box_title">
                                    <p>Monday </p>
                                    <span>13th , June 2022</span>
                                </div>
                                <div className="show_time_box_body">
                                    <ul>
                                        <li>10:45 AM</li>
                                        <li>10:45 AM</li>
                                        <li>10:45 AM</li>
                                        <li>10:45 AM</li>
                                        <li>10:45 AM</li>
                                    </ul>
                                    <div className="show_time_box_getTicket">
                                        <Link to='/ticket'>Get Ticket</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="show_time_box">
                                <div className="show_time_box_title">
                                    <p>Monday </p>
                                    <span>13th , June 2022</span>
                                </div>
                                <div className="show_time_box_body">
                                    <ul>
                                        <li>10:45 AM</li>
                                        <li>10:45 AM</li>
                                        <li>10:45 AM</li>
                                        <li>10:45 AM</li>
                                        <li>10:45 AM</li>
                                    </ul>
                                    <div className="show_time_box_getTicket">
                                        <Link to='/ticket'>Get Ticket</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="show_time_box">
                                <div className="show_time_box_title">
                                    <p>Monday </p>
                                    <span>13th , June 2022</span>
                                </div>
                                <div className="show_time_box_body">
                                    <ul>
                                        <li>10:45 AM</li>
                                        <li>10:45 AM</li>
                                        <li>10:45 AM</li>
                                        <li>10:45 AM</li>
                                        <li>10:45 AM</li>
                                    </ul>
                                    <div className="show_time_box_getTicket">
                                        <Link to='/ticket'>Get Ticket</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="show_time_box">
                                <div className="show_time_box_title">
                                    <p>Monday </p>
                                    <span>13th , June 2022</span>
                                </div>
                                <div className="show_time_box_body">
                                    <ul>
                                        <li>10:45 AM</li>
                                        <li>10:45 AM</li>
                                        <li>10:45 AM</li>
                                        <li>10:45 AM</li>
                                        <li>10:45 AM</li>
                                    </ul>
                                    <div className="show_time_box_getTicket">
                                        <Link to='/ticket'>Get Ticket</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MovieDetail