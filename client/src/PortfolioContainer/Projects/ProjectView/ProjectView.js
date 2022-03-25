import React from 'react';
import ProjectsInfo from '../../../assets/Projects/ProjectsInfo';
import ProjectCard from '../ProjectCard/ProjectCard';

import Tilt from 'react-tilt';

import "./ProjectView.css";

export default function ProjectView() {

  const ProjectDetails = ProjectsInfo.map( (obj, index) => {
    return (
      <Tilt className="Tilt" options={{max: 10, transition: true, speed: 7000}}>
        <ProjectCard 
          key={index}
          name={obj.name}
          tech={obj.tech}
          desc={obj.desc}
          github={obj.github}
          live={obj.live}
          image={obj.image}
        />
      </Tilt>
    );
  });

  return (
    <div className="project-view">
      {ProjectDetails}
    </div>
  )
}
