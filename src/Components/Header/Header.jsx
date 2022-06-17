import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalComponents from '../Modal/ModalComponents'
import { FaSearch , FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
     // Location Modal State Managment
    const [ location , setLocation ] = useState(false)
    // Location Modal Show handler
    const handleLocationModalShow = () => setLocation(true)
    // Location Modal Hide handler
    const handlelocationModalHide = () => setLocation(false)

    // Search Bar State Managment
    const [ search , setSearch ] = useState({
        status : false,
        class : ''
    })
    // Search Bar Click Handler
    const handleSearchBar = () => {
        if( !search.status ){
            setSearch({
                status : true,
                class : 'active'
            })
        }else{
            setSearch({
                status : false,
                class : ''
            })
        }
    }

    return (
        <>
            <ModalComponents type="location" show={ location } hide={ handlelocationModalHide } />
            
            <div className="main_header">
                <div className="container">
                    <div className="main_header_content">
                        <div className="logo">
                            <Link to='/'>
                                <img src="https://i.ibb.co/Chjx5Mp/index.png" alt="" />
                            </Link>
                        </div>
                        <div className="search">
                            <input className={search.class} type="search" placeholder='Search Here' />
                            <button className='btn1' onClick={ handleSearchBar }> <FaSearch /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_menu">
                <div className="container">
                    <div className="menu">
                        <ul>
                            <li><Link  className='active' to="/">Home</Link></li>
                            <li><Link to="/">Showtimes</Link></li>
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/">Member</Link></li>
                            <li><Link to="/">Concession</Link></li>
                            <li><Link to="/">Career</Link></li>
                            <li><Link to="/">Ticket Price</Link></li>
                            <li><Link to="/">Contacts</Link></li>
                        </ul>
                        <div className="location">
                            <button onClick={ handleLocationModalShow }>
                                <small>Badda</small>
                                <span><FaMapMarkerAlt /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header