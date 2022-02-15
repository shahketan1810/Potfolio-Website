import React from 'react';

import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                        <a href='#'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-github-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-envelope-square'></i>
                        </a>
                    </div>
                </div>

                <div className="profile-details-name">
                    <span className="primary-text">
                        Hey, I'm <span className="highlighted-text">Ketan</span>
                    </span>
                </div>

                <div className="profile-details-role">
                    <div className="i-roles">
                        <div className="i-role-wrapper">
                            <div className="i-role-item">Web Dev Enthusiast</div>
                            <div className="i-role-item">Frontend Developer</div>
                            <div className="i-role-item">MERN Developer</div>
                            <div className="i-role-item">Musician</div>
                        </div>
                    </div>
                    <span className="profile-role-tagline">
                        I design and develop simple yet beautiful websites :)
                    </span>
                </div>

                <div className="profile-options">
                    <button className="btn primary-btn">
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