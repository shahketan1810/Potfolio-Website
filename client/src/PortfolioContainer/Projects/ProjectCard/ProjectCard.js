import React from 'react';

import "./ProjectCard.css";

export default function ProjectCard(props) {

  const technology = props.tech.map((val)=>{
    return (
      <span>{val}</span>
    );
  });

  const livelink = () => {
    if(props.live)
      return <a href={props.live}><button>Live</button></a>;
    else
      return ;
  }

  return (
    <div className="project-card" key={props.id}>
      <div className="project-img"></div>
      <div className="project-detail">
        <h4>{props.name}</h4>
        <div className="project-tech">
          {technology}
        </div>
        <p>{props.desc}</p>
        <div className="project-links">
          <a href={props.github}><button>Github</button></a>
          {livelink()}
        </div>
      </div>
    </div>
  )
}
