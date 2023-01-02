import React from "react";
import './ProjectList.css';
import Project from '../../components/Project/Project'

const ProjectList = (props) => {
    return (
        <>
            <h1 className="projects-title" id="projects">Recent Projects</h1>
            <div className="projects-container">
                {
                    props.projects.map((project) => {
                        return <Project key={project.id} project={project} />
                    })
                }
            </div>
        </>
    )
}


export default ProjectList;