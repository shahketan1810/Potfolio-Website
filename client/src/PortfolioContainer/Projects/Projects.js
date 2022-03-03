import React from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import ProjectView from './ProjectView/ProjectView';

import "./Projects.css";

export default function Projects(props) {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id)
            return;
        Animations.animations.fadeInScreen(props.id);
    }

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return (
        <div className="projects-container">
            <div class="custom-shape-divider-top-1646244470">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="projects-parent" id={props.id || ""}>
                <ScreenHeading title={'Projects'} subHeading={"Here's my Recent Work"} />
                <ProjectView />
            </div>
        </div>
    );
}
