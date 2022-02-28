import React from 'react';

import "./About.css";

export default function About() {

    const SCREEN_CONSTANTS = {
        highlights: {
            heading: "Apart from coding, some other activities that I love to do!",
            bullets: [
                "Playing Guitar",
                "Watching Anime",
                "Playing Football (Hala Madrid!!)",
            ],
        }
    };

    const renderHighlight = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value, i)=>{
                return(
                    <div className="highlight" key={i}>
                        <div className="highlight-blob"></div>
                        <span>{value}</span>
                    </div>
                )
            })
        );
    }

    return (
        <div className="about-me-card">
            <div className="about-me-profile"></div>
            <div className="about-me-details">
                <p className="about-me-intro">
                    Hi Everyone, I am <span>Ketan Shah</span> from Godhra, India. I am a student pursuing Bachelor of Technology in <span>Computer Science Engineering</span> from <span>JUET Guna</span>.    
                </p>
                <p className="about-me-description">
                I am fluent in classics like <span>C++</span>, <span>Javascript</span> and <span>ReactJS</span>. My field of interests are building new Web Technologies and Products and also in Blockchain.
                </p>
                <div className="about-me-highlights">
                    <div className="highlights-heading">
                        <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                    </div>
                    {renderHighlight()}
                </div>
            </div>
        </div>
    )
}
