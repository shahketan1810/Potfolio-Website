import React from 'react';
import ScrollService from '../../../utilities/ScrollService';

import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                        <a href='https://www.linkedin.com/in/ketan-shah-577915187/' target="_blank" rel="noreferrer">
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://github.com/shahketan1810' target="_blank" rel="noreferrer">
                            <i className='fa fa-github-square'></i>
                        </a>
                    </div>
                </div>

                <div className="profile-details-name">
                    <span className="primary-text">Hey, I'm 
                        <br/>
                        <span className="highlighted-text">Ketan Shah</span>
                    </span>
                </div>

                <div className="profile-details-role">
                    <div className="i-roles">
                        <div className="i-role-wrapper">
                            <div className="i-role-item">Web Dev Enthusiast</div>
                            <div className="i-role-item">ReactJS Developer</div>
                            <div className="i-role-item">MERN Developer</div>
                            <div className="i-role-item">Blockchain Enthusiast</div>
                        </div>
                    </div>
                    <span className="profile-role-tagline">
                        I design and develop simple yet beautiful websites 😀
                    </span>
                </div>

                <div className="profile-options">
                    <button className="btn primary-btn"
                        onClick={ () => ScrollService.scrollHandler.scrollToHireMe()}
                    >
                        Hire Me
                    </button>
                    <a href='Ketan-Shah.pdf' download='Resume-KetanShah.pdf'>
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>
            </div>

            <div className="profile-picture">
                <div className="profile-picture-background">
                </div>
            </div>

        </div>
    </div>
  )
};

export default Profile;