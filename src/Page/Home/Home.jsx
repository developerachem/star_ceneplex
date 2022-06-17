import { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalComponents from '../../Components/Modal/ModalComponents'
import { FaList , FaFacebookF , FaYoutube , FaInstagram } from "react-icons/fa";

const Home = () => {

    // Triler Modal State Managment 
    const [ triler , setTriler ] = useState(false)
    // Triler Modal Show Handler
    const handleTrilerModal = () => {setTriler(true)}
    // Triler Modal Hide Handler
    const handleTrilerModalHide = () => {setTriler(false)}

    return (
        <>
            <ModalComponents type="video" show={ triler } hide={ handleTrilerModalHide } />
            

            <div className="banner">
                <div className="container">
                    <h1>Doctor Strange in the Multiverse of Madness</h1>
                    <Link to='/ticket' className="btn1">Get Ticket</Link>
                    <button className="btn2" onClick={ handleTrilerModal }>Watch Trailer</button>
                </div>
            </div>

            <div className="social_link">
                <div className="container">
                    <div className="s_link">
                        <button className='btn2'><FaFacebookF /> Visit Facebook</button>
                        <button className='btn2'><FaYoutube /> Visit Youtube </button>
                        <button className='btn2'><FaInstagram /> Visit Instagram</button>
                    </div>
                </div>
            </div>
            
            <div className="movie_section">
                <div className="container">
                    <div className="tab_menu">
                        <ul>
                            <li><a href="/">Now Showing <span className='active'></span></a></li>
                            <li><a href="/">Coming Soon <span></span></a></li>
                            <li><a href="/">Buy Tickets <span></span></a></li>
                            <li><a href="/">Show Times <span></span></a></li>
                        </ul>
                        <div className="all_movie_button">
                            <button className='btn2'>View All Movies</button>
                        </div>
                    </div>
                </div>
                <div className="movies">
                    
                    <div className="movie_box">
                        <img src="https://image.cineplexbd.com/movies/165503803739393.webp" alt="" />
                        <div className="movie_box_content">
                            <h5>Doctor Strange in the Multiverse of Madness (3D)</h5>
                            <ul>
                                <li><strong>Release : </strong> 22-06-2022</li>
                                <li><strong>Genre : </strong> Action</li>
                            </ul>
                        </div>
                        <div className="get_tiket">
                            <button>Get Tickets</button>
                        </div>
                        <div className="video_box_details">
                            <Link to='/detail/50' >Details</Link>
                        </div>
                        <div className="video_play_button">
                            <button onClick={ handleTrilerModal }><img src="https://i.ibb.co/yQXfgR5/play.png" alt="" /></button>
                        </div>
                    </div>

                    <div className="movie_box">
                        <img src="https://image.cineplexbd.com/movies/165502482718019.webp" alt="" />
                        <div className="movie_box_content">
                            <h5>Doctor Strange in the Multiverse of Madness (3D)</h5>
                            <ul>
                                <li><strong>Release : </strong> 22-06-2022</li>
                                <li><strong>Genre : </strong> Action</li>
                            </ul>
                        </div>
                        <div className="get_tiket">
                            <button>Get Tickets</button>
                        </div>
                        <div className="video_box_details">
                            <Link to='/detail/50'>Details</Link>
                        </div>
                        <div className="video_play_button">
                            <button onClick={ handleTrilerModal }><img src="https://i.ibb.co/yQXfgR5/play.png" alt="" /></button>
                        </div>
                    </div>

                    <div className="movie_box">
                        <img src="https://image.cineplexbd.com/movies/165503803739393.webp" alt="" />
                        <div className="movie_box_content">
                            <h5>Doctor Strange in the Multiverse of Madness (3D)</h5>
                            <ul>
                                <li><strong>Release : </strong> 22-06-2022</li>
                                <li><strong>Genre : </strong> Action</li>
                            </ul>
                        </div>
                        <div className="get_tiket">
                            <button>Get Tickets</button>
                        </div>
                        <div className="video_box_details">
                            <Link to='/detail/50'>Details</Link>
                        </div>
                        <div className="video_play_button">
                            <button onClick={ handleTrilerModal }><img src="https://i.ibb.co/yQXfgR5/play.png" alt="" /></button>
                        </div>
                    </div>

                    <div className="movie_box">
                        <img src="https://image.cineplexbd.com/movies/165502482718019.webp" alt="" />
                        <div className="movie_box_content">
                            <h5>Doctor Strange in the Multiverse of Madness (3D)</h5>
                            <ul>
                                <li><strong>Release : </strong> 22-06-2022</li>
                                <li><strong>Genre : </strong> Action</li>
                            </ul>
                        </div>
                        <div className="get_tiket">
                            <button>Get Tickets</button>
                        </div>
                        <div className="video_box_details">
                            <Link to='/detail/50'>Details</Link>
                        </div>
                        <div className="video_play_button">
                            <button onClick={ handleTrilerModal }><img src="https://i.ibb.co/yQXfgR5/play.png" alt="" /></button>
                        </div>
                    </div>

                    <div className="movie_box">
                        <img src="https://image.cineplexbd.com/movies/165503803739393.webp" alt="" />
                        <div className="movie_box_content">
                            <h5>Doctor Strange in the Multiverse of Madness (3D)</h5>
                            <ul>
                                <li><strong>Release : </strong> 22-06-2022</li>
                                <li><strong>Genre : </strong> Action</li>
                            </ul>
                        </div>
                        <div className="get_tiket">
                            <button>Get Tickets</button>
                        </div>
                        <div className="video_box_details">
                            <Link to='/detail/50'>Details</Link>
                        </div>
                        <div className="video_play_button">
                            <button onClick={ handleTrilerModal }><img src="https://i.ibb.co/yQXfgR5/play.png" alt="" /></button>
                        </div>
                    </div>

                    <div className="movie_box">
                        <img src="https://image.cineplexbd.com/movies/165502482718019.webp" alt="" />
                        <div className="movie_box_content">
                            <h5>Doctor Strange in the Multiverse of Madness (3D)</h5>
                            <ul>
                                <li><strong>Release : </strong> 22-06-2022</li>
                                <li><strong>Genre : </strong> Action</li>
                            </ul>
                        </div>
                        <div className="get_tiket">
                            <button>Get Tickets</button>
                        </div>
                        <div className="video_box_details">
                            <Link to='/detail/50'>Details</Link>
                        </div>
                        <div className="video_play_button">
                            <button onClick={ handleTrilerModal }><img src="https://i.ibb.co/yQXfgR5/play.png" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="promotion_section">
                <div className="container">
                    <div className="promotion_body">
                        <div className="promotion_left">
                            <div className="latest_news">
                                <div className="latest_news_header">
                                    <h1>Latest News</h1>
                                    <button className='btn2'>View All News</button>
                                </div>
                                <div className="news_body">
                                    <div className="news_body_left">
                                        <img src="http://cineplex-web-admin.cineplexbd.com/uploads/164525842037944.webp" alt="" />
                                        <div className="news_details">
                                            <button>Details</button>
                                        </div>
                                        <div className="news_name">
                                            <h3>Camila Cabello's Acting Debut</h3>
                                        </div>
                                    </div>
                                    <div className="news_body_right">
                                        <div className="news_right_side"  style={{ marginBottom : '10px' }}>
                                            <img src="http://cineplex-web-admin.cineplexbd.com/uploads/164525828399519.webp" alt="" />
                                            <div className="news_details">
                                                <button>Details</button>
                                            </div>
                                            <div className="news_name">
                                                <h3>Camila Cabello's Acting Debut</h3>
                                            </div>
                                        </div>
                                        
                                        <div className="news_right_side">
                                            <img src="http://cineplex-web-admin.cineplexbd.com/uploads/164525816716425.webp" alt="" />
                                            <div className="news_details">
                                                <button>Details</button>
                                            </div>
                                            <div className="news_name">
                                                <h3>Camila Cabello's Acting Debut</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="promotion_banner">
                                <div className="promotion_banner_title">
                                    <h1>Cinebuzz</h1>
                                </div>
                                <div className="promotion_banner_img">
                                    <img src="https://cineplexbd.com/static/media/e-cinebuzz1.96b404a7.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="promotion_right">
                            <div className="student_reward_box">
                                <h2><FaList /> Student Reward</h2>
                                <ul>
                                    <li><a href="/">Click to go student reward program</a></li>
                                    <li><a href="/">Click to go student reward program</a></li>
                                </ul>
                            </div> 
                            <div className="notice_box">
                                <h2><FaList /> Notice</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est possimus nemo repellat suscipit illum laboriosam numquam molestiae labore odit aliquam.</p>
                            </div> 
                            <div className="poll_box">
                                <h2><FaList /> Poll</h2>
                                <div className="poll_content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est possimus nemo repellat suscipit illum laboriosam numquam molestiae labore odit aliquam.</p>
                                    <form action="#">
                                        <input type="radio" name="poll" value='Good' id='good' /><label htmlFor="good">Good</label>
                                        <input type="radio" name="poll" value='Average' id='average' /><label htmlFor="average">Average</label>
                                        <input type="radio" name="poll" value='Excellent ' id='excellent ' /><label htmlFor="excellent ">Excellent </label><br />
                                        <button className='btn1'>Submit</button>
                                    </form>
                                </div>
                            </div> 
                            <div className="vote_box">
                                <h2><FaList /> Vote</h2>
                                <ul>
                                    <li>
                                        <input type="checkbox" id="" />
                                        <p>Doctor Strange in the Multive sdv sdsdf gfvrsezsdfv sdadasfcszdgv of Madness </p>
                                        <span>1570</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="" />
                                        <p>Doctor Strange in the Multiverse of Madness </p>
                                        <span>0</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="" />
                                        <p>Doctor Strange in the  of  </p>
                                        <span>15670</span>
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

export default Home