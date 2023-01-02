import React from "react";
import './Project.css';

const Project = (props) => {
    const { name, description, liveUrl, repo, src } = props.project;
    return (
        <div className="Project">
            <div className="image-container">
                <img src={src} alt={name} />
            </div>
            <div className="project-info">
                <h2>{name}</h2>
                <p>{description}</p>
                <div className='project-links'>
                    {liveUrl ? <a href={liveUrl}>Live</a> : undefined}
                    {repo ? <a href={repo}>Github Repo</a> : undefined}
                </div>
            </div>
        </div>
    )
}

export default Project;