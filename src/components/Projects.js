import React, { useState } from 'react'
import data_projects from './data/project_data';
import ProjectCard from './ProjectCard';

const Projects = ()=>{

    const [projects,setProjects]=useState(data_projects);

    const handleFilterCategory = (name) =>{
        const new_array = data_projects.filter(project => project.category.includes(name,0))
        setProjects(new_array)
    }
    return (
        <div className="container projects">
        <div className="projects_navbar">
            <div onClick={() => setProjects(data_projects)}>All</div>
            <div onClick={() => handleFilterCategory('react.js')}>React</div>
            <div onClick={() => handleFilterCategory('JS')}>Javascript</div>
            <div onClick={() => handleFilterCategory('node.js')}>NodeJS</div>
            <div onClick={() => handleFilterCategory('Python')}>Python</div>
        </div>
                <div className="row">
                    {
                        projects.map(project=>
                            <ProjectCard key={project.name} project={project}/>
                        )
                    }
                </div>
        </div>
    )
}

export default Projects;