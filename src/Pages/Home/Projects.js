import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("jsons/projects.json")
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div id='projects'>
            <div className='mb-5 pt-16' >
            <h1 className="text-5xl  font-bold  text-white">
              My <span className="text-orange-600">Projects</span>{" "}
            </h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    projects.map((project, index) => <Project key={project.id} index={index} project={project}></Project>)
                }
            </div>

        </div>
    );
};

export default Projects;