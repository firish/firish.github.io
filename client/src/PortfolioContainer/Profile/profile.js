import React from 'react'
import Typical from 'react-typical'
import Typed from 'react-typed'
import Button from 'react-bootstrap/Button';
import ScrollService from '../../utilities/ScrollService';
import './profile.css'

export default function profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'> 
            <div className='profile-details'>
                <div className='colz2'>
                    <div className='colz-icon2'>
                        <a href='https://www.linkedin.com/in/rishigulati29/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://github.com/firish?tab=repositories'>
                            <i className='fa fa-github'></i>
                        </a>
                        <a href='https://scholar.google.com/scholar?scilib=1&hl=en&as_sdt=0,5'>
                            <i className='fa fa-google-plus'></i>
                        </a>
                        <a href='https://www.instagram.com/rishi_gulati/'>
                            <i className='fa fa-instagram'></i>
                        </a> 
                        <a href='https://www.facebook.com/rishi.gulati1/'>
                            <i className='fa fa-facebook'></i> 
                        </a>
                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Greetings, I'm <span className='highlighted-text'>Rishi</span> !
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {""}
                            <Typed 
                                strings={[
                                    "Software Dev 🧑‍💻",
                                    "Full-Stack Dev ⚙️🧰",
                                    "Python Dev  🐍",
                                    "Application Dev ⚛️🖥️"
                                ]}
                                typeSpeed={75}
                                backSpeed={75}
                                loop
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Not wildly creative, unless developing applications!
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className="btn2 primary-btn2"
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    >{" "}Hire Me{" "}</button>{' '}
                    <a href='Resume.pdf' download='Rishi-Gulati-Resume.pdf'>
                        <button className="btn2 highlighted-btn2">{" "}Get Resume{" "}</button>{' '}
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>
        </div>
    </div>
  )
}
