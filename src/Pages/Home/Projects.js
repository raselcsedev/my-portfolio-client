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
        <div>

            <div className='mb-5' id='projects'>
                <h3 className='text-5xl text-white font-semibold'>Projects</h3>
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