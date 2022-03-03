import React from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

import About from './About/About';
import Skills from './Skills/Skills';

import "./AboutMe.css"

export default function AboutMe(props) {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id)
            return;
        Animations.animations.fadeInScreen(props.id);
    }

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return (
        <div>
            <div className="about-me-container screen-container" id={props.id || ""}>
                <div className="about-me-parent">
                    <ScreenHeading title={'About Me'} subHeading={'Let Me Introduce Myself'} />
                    <About />
                </div>
            </div>
            <Skills />            
        </div>
    );
}
