import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const { id, index } = useParams();
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("../jsons/projects.json")
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);


    const project = projects[id] || {};
    const { name, type, screenshots, description, detailedDescription, links } = project;
    if (!project || !screenshots || !links) {
        return <p>Loading....</p>
    }



    return (
        <div className='mt-0 pt-0'>
            <div class=" text-white lg:flex-row p-0">
                
                <div className='ml-0 lg:ml-20 '>
                    <h1 class="text-4xl font-semibold mb-8">{name}</h1>
                    <p className='badge p-5 badge-outline mb-5'>A {type}</p>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                        screenshots.map(screenshot => <>
                            <img src={`../${screenshot.image}`} class="max-w-sm mb-2 rounded-lg shadow-2xl" alt='screenshot' />
                            
                        </>)
                    }
                </div>
                    <p class="leading-relaxed text-xl mb-5">{detailedDescription}<br></br>{description}</p>
                    {
                        links.map(link => <a className='btn text-white btn-outline mr-5 mb-5' href={link.url} target="_blank" rel="noreferrer">{link.title}</a>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;