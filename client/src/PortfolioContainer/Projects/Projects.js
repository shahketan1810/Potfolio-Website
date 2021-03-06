import React from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import ProjectView from './ProjectView/ProjectView';

import "./Projects.css";

export default function Projects(props) {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id)
            return;
        Animations.animations.fadeInScreen(props.id);
    }

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return (
        <div className="projects-container">
            <div className="custom-shape-divider-top-1646244470">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="projects-parent fade-in" id={props.id || ""}>
                <ScreenHeading title={'Projects'} subHeading={"Here's my Recent Work"} />
                <ProjectView />
            </div>
            <div className="custom-shape-divider-bottom-1647360679">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
}
