import React from 'react';

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

import imgBack from '../../assets/ContactMe/mailz.jpeg';

export default function (props) {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id)
            return;
        Animations.animations.fadeInScreen(props.id);
    }

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return (
        <div className="contact-me-container" id={props.id || ""}>
            <ScreenHeading 
                title={"Contact Me"}
                subHeading={"Let's Keep In Touch"}
            />
            <div className="central-form">
                <div className="col">
                    
                </div>
            </div>
        </div>
    )
}
