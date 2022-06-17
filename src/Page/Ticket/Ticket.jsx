import React, { useState } from 'react'
import { FaMapMarkerAlt , FaAngleDown , FaPlus , FaMinus } from "react-icons/fa";

const Ticket = () => {
    const [ ticketForm , setTicketForm ] = useState({
        class : 'd-none',
        person : 'You'
    })

    console.log(ticketForm);

    console.log(ticketForm);
    const handleTicketOrner = () => {
        if( ticketForm.person === 'You' ){
            setTicketForm({
                class : 'd-none',
                person : 'You'
            })
        }else if( ticketForm.person === 'Others' ){
            setTicketForm({
                class : 'd-block',
                person : 'Others'
            })
        }
    }
    return (
        <>
            <section className='ticket_page'>
                <div className="container">
                    <div className="ticket_page_body">
                        <div className="ticket_page_left">
                            <div className="ticket_header">
                                <h4>Location <button> <FaAngleDown /> </button></h4>
                                <button>Star Cineplex, SKS Tower, Mohakhali</button>
                            </div>
                            <div className="date_select">
                                <h4>Select Date</h4>
                                <div className="date_select_card">
                                    <div className="current_date_box active">
                                        <p>Thu</p>
                                        <span>16 <small>jan</small></span>
                                    </div>
                                    <div className="current_date_box">
                                        <p>Thu</p>
                                        <span>16 <small>jan</small></span>
                                    </div>
                                    <div className="current_date_box">
                                        <label htmlFor="date">
                                            <div className="datebox_label_lefft">
                                                <p>Select Date</p>
                                                <span>16 jan</span>
                                            </div>
                                            <div className="datebox_label_right">
                                                <img src="https://ticket.cineplexbd.com/23528a07e5b60426e3ea09936d7a0146.svg" alt="" />
                                            </div>
                                        </label>
                                        <input type="date" id='date' style={{ opacity : '0' , visibility : 'hidden' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="movie_select_option">
                                <h4>Select Movie (4)</h4>
                                <div className="movie_select_box">
                                    <button>
                                        <img src="https://image.cineplexbd.com/movies/165503803739393.webp" alt="" />
                                        <p>Doctor Strange in the Multiverse of Madness (3D)</p>
                                    </button>
                                    <button className='active'>
                                        <img src="https://image.cineplexbd.com/movies/165503803739393.webp" alt="" />
                                        <p>Doctor Strange in the Multiverse of Madness (3D)</p>
                                    </button>
                                    <button>
                                        <img src="https://image.cineplexbd.com/movies/165503803739393.webp" alt="" />
                                        <p>Doctor Strange in the Multiverse of Madness (3D)</p>
                                    </button>
                                    <button>
                                        <img src="https://image.cineplexbd.com/movies/165503803739393.webp" alt="" />
                                        <p>Doctor Strange in the Multiverse of Madness (3D)</p>
                                    </button>
                                </div>
                            </div>
                            <div className="select_show_time">
                                <h4>Select Show Time</h4>
                                <div className="select_show_box">
                                    <h4>Hall 1</h4>
                                    <div className="select_show_time_box">
                                        <button className='active'>4.40PM</button>
                                        <button>4.40PM</button>
                                        <button>4.40PM</button>
                                    </div>
                                </div>
                            </div>
                            <div className="select_seat_type_and_ticket_quanty">
                                <div className="select_seat_type">
                                    <h4>Select Seat Type</h4>
                                    <div className="select_seat_type_box">
                                        <div className="select_seat_type_option">
                                            <input type="radio" name='ticketTipe' id='ticketRegular' />
                                            <label htmlFor="ticketRegular">Regular <p>BDT 450 Tk</p></label>
                                        </div>
                                        <div className="select_seat_type_option">
                                            <input type="radio" name='ticketTipe' id='ticketLounger' />
                                            <label htmlFor="ticketLounger">Lounger <p>BDT 450 Tk</p></label>
                                        </div>
                                        <div className="select_seat_type_option">
                                            <input type="radio" name='ticketTipe' id='ticketSemiRecliner' />
                                            <label htmlFor="ticketSemiRecliner">Semi Recliner<p>BDT 450 Tk</p></label>
                                        </div>
                                        <div className="select_seat_type_option">
                                            <input type="radio" name='ticketTipe' id='ticketSemiRecliner' />
                                            <label htmlFor="ticketSemiRecliner">Semi Recliner<p>BDT 450 Tk</p></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="ticket_quanty">
                                    <h4>Ticket Quantity</h4>
                                    <div className="ticket_quanty_box">
                                        <button><FaMinus /></button>
                                        <div className="ticket_quanty_content">
                                            <h4>0 Tickets</h4>
                                            <p>Max 4 Tickets</p>
                                        </div>
                                        <button><FaPlus /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="select_seat">
                                <h4>Select Seats</h4>
                                <div className="seat_body">
                                    <div className="seat_body_header">
                                        <span>2.00</span>
                                        <ul>
                                            <li>
                                                <img src="https://ticket.cineplexbd.com/68b34e3645c056fe6c73faff0c6d5890.svg" alt="" />
                                                <p>Available</p>
                                            </li>
                                            <li>
                                                <img src="https://ticket.cineplexbd.com/bc3d79147303d610100d26012f07228b.svg" alt="" />
                                                <p>Selected</p>
                                            </li>
                                            <li>
                                                <img src="https://ticket.cineplexbd.com/d57548eb16d7dbecc80c7cb0f3bcfd50.svg" alt="" />
                                                <p>Not Available</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="main_seat">
                                        <ul>
                                            <li></li>
                                            <li><button>A1</button></li>
                                            <li><button>A2</button></li>
                                            <li><button>A3</button></li>
                                            <li><button>A4</button></li>
                                            <li><button>A5</button></li>
                                            <li><button>A6</button></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>A7</button></li>
                                            <li><button>A8</button></li>
                                            <li><button>A9</button></li>
                                            <li><button>A10</button></li>
                                            <li><button>A11</button></li>
                                            <li><button>A12</button></li>
                                            <li><button>A13</button></li>
                                            <li><button>A14</button></li>
                                        </ul>
                                        <ul>
                                            <li><button>B1</button></li>
                                            <li><button>B2</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>B3</button></li>
                                            <li><button>B4</button></li>
                                            <li><button>B5</button></li>
                                            <li><button>B6</button></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>B7</button></li>
                                            <li><button>B8</button></li>
                                            <li><button>B9</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>B10</button></li>
                                            <li><button>B11</button></li>
                                            <li><button>B12</button></li>
                                            <li><button>B13</button></li>
                                        </ul>
                                        <ul>
                                            <li><button>C1</button></li>
                                            <li><button>C2</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>C3</button></li>
                                            <li><button>C4</button></li>
                                            <li><button>C5</button></li>
                                            <li><button>C6</button></li>
                                            <li><button>C7</button></li>
                                            <li><button>C8</button></li>
                                            <li><button>C9</button></li>
                                            <li><button>C10</button></li>
                                            <li><button>C11</button></li>
                                            <li><button>C12</button></li>
                                            <li><button>C13</button></li>
                                            <li><button>C14</button></li>
                                            <li><button>C15</button></li>
                                            <li><button>C16</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>C17</button></li>
                                            <li><button>C18</button></li>
                                            <li><button>C19</button></li>
                                            <li><button>C20</button></li>
                                        </ul>
                                        <ul>
                                            <li><button>D1</button></li>
                                            <li><button>D2</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>D3</button></li>
                                            <li><button>D4</button></li>
                                            <li><button>D5</button></li>
                                            <li><button>D6</button></li>
                                            <li><button>D7</button></li>
                                            <li><button>D8</button></li>
                                            <li><button>D9</button></li>
                                            <li><button>D10</button></li>
                                            <li><button>D11</button></li>
                                            <li><button>D12</button></li>
                                            <li><button>D13</button></li>
                                            <li><button>D14</button></li>
                                            <li><button>D15</button></li>
                                            <li><button>D16</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>D17</button></li>
                                            <li><button>D18</button></li>
                                            <li><button>D19</button></li>
                                            <li><button>D20</button></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>E1</button></li>
                                            <li><button>E2</button></li>
                                            <li><button>E3</button></li>
                                            <li><button>E4</button></li>
                                            <li><button>E5</button></li>
                                            <li><button>E6</button></li>
                                            <li><button>E7</button></li>
                                            <li><button>E8</button></li>
                                            <li><button>E9</button></li>
                                            <li><button>E10</button></li>
                                            <li><button>E11</button></li>
                                            <li><button>E12</button></li>
                                            <li><button>E13</button></li>
                                            <li><button>E14</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>E15</button></li>
                                            <li><button>E16</button></li>
                                            <li><button>E17</button></li>
                                            <li><button>E18</button></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>F1</button></li>
                                            <li><button>F2</button></li>
                                            <li><button>F3</button></li>
                                            <li><button>F4</button></li>
                                            <li><button>F5</button></li>
                                            <li><button>F6</button></li>
                                            <li><button>F7</button></li>
                                            <li><button>F8</button></li>
                                            <li><button>F9</button></li>
                                            <li><button>F10</button></li>
                                            <li><button>F11</button></li>
                                            <li><button>F12</button></li>
                                            <li><button>F13</button></li>
                                            <li><button>F14</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>F15</button></li>
                                            <li><button>F16</button></li>
                                            <li><button>F17</button></li>
                                            <li><button>F18</button></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>G1</button></li>
                                            <li><button>G2</button></li>
                                            <li><button>G3</button></li>
                                            <li><button>G4</button></li>
                                            <li><button>G5</button></li>
                                            <li><button>G6</button></li>
                                            <li><button>G7</button></li>
                                            <li><button>G8</button></li>
                                            <li><button>G9</button></li>
                                            <li><button>G10</button></li>
                                            <li><button>G11</button></li>
                                            <li><button>G12</button></li>
                                            <li><button>G13</button></li>
                                            <li><button>G14</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>G15</button></li>
                                            <li><button>G16</button></li>
                                            <li><button>G17</button></li>
                                            <li><button>G18</button></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>H1</button></li>
                                            <li><button>H2</button></li>
                                            <li><button>H3</button></li>
                                            <li><button>H4</button></li>
                                            <li><button>H5</button></li>
                                            <li><button>H6</button></li>
                                            <li><button>H7</button></li>
                                            <li><button>H8</button></li>
                                            <li><button>H9</button></li>
                                            <li><button>H10</button></li>
                                            <li><button>H11</button></li>
                                            <li><button>H12</button></li>
                                            <li><button>H13</button></li>
                                            <li><button>H14</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>H15</button></li>
                                            <li><button>H16</button></li>
                                            <li><button>H17</button></li>
                                            <li><button>H18</button></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>I1</button></li>
                                            <li><button>I2</button></li>
                                            <li><button>I3</button></li>
                                            <li><button>I4</button></li>
                                            <li><button>I5</button></li>
                                            <li><button>I6</button></li>
                                            <li><button>I7</button></li>
                                            <li><button>I8</button></li>
                                            <li><button>I9</button></li>
                                            <li><button>I10</button></li>
                                            <li><button>I11</button></li>
                                            <li><button>I12</button></li>
                                            <li><button>I13</button></li>
                                            <li><button>I14</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>I15</button></li>
                                            <li><button>I16</button></li>
                                            <li><button>I17</button></li>
                                            <li><button>I18</button></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>J1</button></li>
                                            <li><button>J2</button></li>
                                            <li><button>J3</button></li>
                                            <li><button>J4</button></li>
                                            <li><button>J5</button></li>
                                            <li><button>J6</button></li>
                                            <li><button>J7</button></li>
                                            <li><button>J8</button></li>
                                            <li><button>J9</button></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>J10</button></li>
                                            <li><button>J11</button></li>
                                            <li><button>J12</button></li>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li><button>L1</button></li>
                                            <li><button>L2</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>L3</button></li>
                                            <li><button>L4</button></li>
                                            <li><button>L5</button></li>
                                            <li><button>L6</button></li>
                                            <li><button>L7</button></li>
                                            <li><button>L8</button></li>
                                            <li><button>L9</button></li>
                                            <li><button>L10</button></li>
                                            <li><button>L11</button></li>
                                            <li><button>L12</button></li>
                                            <li><button>L13</button></li>
                                            <li><button>L14</button></li>
                                            <li><button>L15</button></li>
                                            <li><button>L16</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>L17</button></li>
                                            <li><button>L18</button></li>
                                            <li><button>L19</button></li>
                                            <li><button>L20</button></li>
                                        </ul>
                                        <ul>
                                            <li><button>M1</button></li>
                                            <li><button>M2</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>M3</button></li>
                                            <li><button>M4</button></li>
                                            <li><button>M5</button></li>
                                            <li><button>M6</button></li>
                                            <li><button>M7</button></li>
                                            <li><button>M8</button></li>
                                            <li><button>M9</button></li>
                                            <li><button>M10</button></li>
                                            <li><button>M11</button></li>
                                            <li><button>M12</button></li>
                                            <li><button>M13</button></li>
                                            <li><button>M14</button></li>
                                            <li><button>M15</button></li>
                                            <li><button>M16</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>M17</button></li>
                                            <li><button>M18</button></li>
                                            <li><button>M19</button></li>
                                            <li><button>M20</button></li>
                                        </ul>
                                        <ul>
                                            <li><button>N1</button></li>
                                            <li><button>N2</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>N3</button></li>
                                            <li><button>N4</button></li>
                                            <li><button>N5</button></li>
                                            <li><button>N6</button></li>
                                            <li><button>N7</button></li>
                                            <li><button>N8</button></li>
                                            <li><button>N9</button></li>
                                            <li><button>N10</button></li>
                                            <li><button>N11</button></li>
                                            <li><button>N12</button></li>
                                            <li><button>N13</button></li>
                                            <li><button>N14</button></li>
                                            <li><button>N15</button></li>
                                            <li><button>N16</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>N17</button></li>
                                            <li><button>N18</button></li>
                                            <li><button>N19</button></li>
                                            <li><button>N20</button></li>
                                        </ul>
                                        <ul>
                                            <li><button>X1</button></li>
                                            <li><button>X2</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>X3</button></li>
                                            <li><button>X4</button></li>
                                            <li><button>X5</button></li>
                                            <li><button>X6</button></li>
                                            <li><button>X7</button></li>
                                            <li><button>X8</button></li>
                                            <li><button>X9</button></li>
                                            <li><button>X10</button></li>
                                            <li><button>X11</button></li>
                                            <li><button>X12</button></li>
                                            <li><button>X13</button></li>
                                            <li><button>X14</button></li>
                                            <li><button>X15</button></li>
                                            <li><button>X16</button></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>X17</button></li>
                                            <li><button>X18</button></li>
                                            <li><button>X19</button></li>
                                            <li><button>X20</button></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>P1</button></li>
                                            <li><button>P2</button></li>
                                            <li><button>P3</button></li>
                                            <li><button>P4</button></li>
                                            <li><button>P5</button></li>
                                            <li><button>P6</button></li>
                                            <li><button>P7</button></li>
                                            <li><button>P8</button></li>
                                            <li><button>P9</button></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li><button>P10</button></li>
                                            <li><button>P11</button></li>
                                            <li><button>P12</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="ticket_page_right">
                            <div className="ticket_overview">
                                <h4>Tickets Summary</h4>
                                <div className="ticket_overview_box">
                                    <div className="movie_overview">
                                        <div className="movie_overview_image">
                                            <img src="https://image.cineplexbd.com/movies/165503803739393.webp" alt="" />
                                        </div>
                                        <div className="movie_overview_name">
                                            <span>3D</span>
                                            <h4>Doctor Strange in the Multiverse of Madness (3D)</h4>
                                            <p>Duration - 2h 26m</p>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="movie_overview_list">
                                                <FaMapMarkerAlt />
                                                <h5>Location </h5>
                                            </div>
                                            <span>BDA</span>
                                        </li>
                                        <li>
                                            <div className="movie_overview_list">
                                                <img src="https://ticket.cineplexbd.com/bd092ccf6706fbb728b3c096bc825814.svg" alt="" />
                                                <h5>Show Date</h5>
                                            </div>
                                            <span>Jun 16, 22</span>
                                        </li>
                                        <li>
                                            <div className="movie_overview_list">
                                                <img src="https://ticket.cineplexbd.com/072b1af817a015ff97c15782fc9198ba.svg" alt="" />
                                                <h5>Hall Name</h5>
                                            </div>
                                            <span>- -</span>
                                        </li>
                                        <li>
                                            <div className="movie_overview_list">
                                                <img src="https://ticket.cineplexbd.com/fb58e9af0bc2fc2a9519e7dad9cd3b69.svg" alt="" />
                                                <h5>Show Time </h5>
                                            </div>
                                            <span>- -</span>
                                        </li>
                                        <li>
                                            <div className="movie_overview_list">
                                                <img src="https://ticket.cineplexbd.com/4cf38cfea58602af2aa4c36eaa959668.svg" alt="" />
                                                <h5>Seat Type </h5>
                                            </div>
                                            <span>- -</span>
                                        </li>
                                        <li>
                                            <div className="movie_overview_list">
                                                <img src="https://ticket.cineplexbd.com/e07739a905d85600392349094f6e0878.svg" alt="" />
                                                <h5>Ticket Quantity </h5>
                                            </div>
                                            <span>- -</span>
                                        </li>
                                        <li>
                                            <div className="movie_overview_list">
                                                <img src="https://ticket.cineplexbd.com/4cf38cfea58602af2aa4c36eaa959668.svg" alt="" />
                                                <h5>Selected Seat </h5>
                                            </div>
                                            <span>- -</span>
                                        </li>
                                        <li>
                                            <div className="movie_overview_list">
                                                <img src="https://ticket.cineplexbd.com/74eac4ef2333360e2f4c0d8a4816cb6c.svg" alt="" />
                                                <h5>Total Amount </h5>
                                            </div>
                                            <span>- -</span>
                                        </li>
                                        <li style={{ marginTop : '35px' , marginBottom : '0px' }}>
                                            <div className="movie_overview_list">
                                                <h5>Ticket For</h5>
                                            </div>
                                            <span>
                                                <input type="radio" name="ticket" value='You' onChange={ (e) => handleTicketOrner( setTicketForm({ ...ticketForm , person : e.target.value }))} id="tiketForYot" /><label htmlFor="tiketForYot">You</label>
                                                <input type="radio" name="ticket" value='Others' onChange={ (e) => handleTicketOrner(setTicketForm({ ...ticketForm , person : e.target.value }))} id="tiketForOthers" /><label htmlFor="tiketForOthers">Others</label>
                                            </span>
                                        </li>
                                    </ul>

                                    <div className={'ticket_others_name_field ' + ticketForm.class }>
                                        <input type="text" name="" id="" placeholder='Name' />
                                        <input type="text" name="" id="" placeholder='Phone Number' />
                                    </div>

                                    <button className='btn1 w-100'>Purchase Ticket</button>
                                    <p>By clicking the Purchase Tickets you are accepting <a href="/">Terms & Conditions</a> of Star Cineplex.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ticket