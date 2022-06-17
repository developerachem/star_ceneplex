import React from 'react'
import { Modal } from 'react-bootstrap'
import './Style/Modal.css';
import { FaMapMarkerAlt } from "react-icons/fa";

const ModalComponents = ({ type , show , hide }) => {
    
    if( type === "video" ){
        return(
            <>
                <Modal show={ show } onHide={ hide } centered size="xl">
                    <Modal.Body>
                        <div className="youtube_videw">
                            <iframe src="https://www.youtube.com/embed/aWzlQ2N6qqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        )
    }else if( type === "location" ){
        return(
            <>
                <Modal show={ show } onHide={ hide }>
                    <Modal.Header closeButton>
                        <Modal.Title>Select Your Theatre</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_location">
                            <ul>
                                <li>
                                    <button>
                                        <FaMapMarkerAlt />
                                        <div className="location_content">
                                            Bashundhara Shopping Mall, Panthapath
                                            <p> Show Motion Limited  Level 8, Bashundhara City   Bangladesh. </p>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <FaMapMarkerAlt />
                                        <div className="location_content">
                                            Bashundhara Shopping Mall, Panthapath
                                            <p> Show Motion Limited  Level 8 Tejgaon  Dhaka 1205, Bangladesh. </p>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <FaMapMarkerAlt />
                                        <div className="location_content">
                                            Bashundhara Shopping Mall, Panthapath
                                            <p>Panthapath, Tejgaon  Dhaka 1205, Bangladesh. </p>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default ModalComponents