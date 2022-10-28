import React from "react";
import './Project.css';

class Project extends React.Component {
    render() {
        const { project } = this.props;
        return (
            <div className="Project">
                <div className="image-container">
                    <img src={project.src} alt={project.name} />
                </div>
                <div className="project-info">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <div className='project-links'>
                        {project.liveUrl ? <a href={project.liveUrl}>Live</a> : undefined}
                        {project.repo ? <a href={project.repo}>Github Repo</a> : undefined}
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;