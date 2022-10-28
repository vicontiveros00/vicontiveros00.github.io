import React from "react";
import './ProjectList.css';
import Project from '../../components/Project/Project'

class ProjectList extends React.Component {
    render() {
        return (
            <>
                <h1 className="projects-title" id="projects">Projects</h1>
                <div className="projects-container">
                        {
                        this.props.projects.map((project) => {
                            return <Project key={project.id} project={project} />
                        })
                    }
                </div>
            </>
        )
    }
}

export default ProjectList;