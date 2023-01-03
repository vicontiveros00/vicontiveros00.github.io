import React from "react";
import './ProjectList.css';
import Project from '../../components/Project/Project'
import PulseLoader from "react-spinners/PulseLoader";

const ProjectList = (props) => {
    const { projects } = props;
    return (
        <>
            <h1 className="projects-title" id="projects">Recent Projects</h1>
            <div className="projects-container">
                {projects ? 
                    projects.map((project) => {
                        return <Project key={project.id} project={project} />
                    })
                    :
                    <PulseLoader color="#f3f3f3" cssOverride={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '1.35rem'
                    }}/>
                }
            </div>
        </>
    )
}


export default ProjectList;