import React from 'react';

import "./ProjectCard.css";

export default function ProjectCard(props) {

  const technology = props.tech.map((val, index)=>{
    return (
      <span key={index}>{val}</span>
    );
  });

  const livelink = () => {
    if(props.live)
      return <a href={props.live} target="_blank" rel="noreferrer"><i className='fa fa-globe'></i></a>;
    else
      return ;
  }

  return (
    <div className="project-card" key={props.id}>
      <div className="project-img">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="project-detail">
        <h4>{props.name}</h4>
        <div className="project-tech">
          {technology}
        </div>
        <p>{props.desc}</p>
        <div className="project-links">
          <a href={props.github} target="_blank" rel="noreferrer">
            <i className='fa fa-github-square'></i>
          </a>
          {livelink()}
        </div>
      </div>
    </div>
  )
}
