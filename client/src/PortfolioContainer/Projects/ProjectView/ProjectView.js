import React from 'react';
import ProjectsInfo from '../../../assets/Projects/ProjectsInfo';
import ProjectCard from '../ProjectCard/ProjectCard';

import "./ProjectView.css";

export default function ProjectView() {

  const ProjectDetails = ProjectsInfo.map( (obj, index) => {
    return (
      <ProjectCard 
        id={index}
        name={obj.name}
        tech={obj.tech}
        desc={obj.desc}
        github={obj.github}
        live={obj.live}
        image={obj.image}
      />
    );
  });

  return (
    <div className="project-view">
      {ProjectDetails}
    </div>
  )
}
