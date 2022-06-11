import React from 'react';
import { useNavigate } from 'react-router-dom';


const Project = ({ project, index }) => {
    const { name,id, type, screenshots,description, } = project;
    const navigate = useNavigate();

    const navigateToDetails = (id) => {
        navigate(`/projects/${id}`);
    }
    return (
        <div
            whileHover={{ translateY: -15 }}
            whileTap={{ scale: 1.05 }}
            className="card bg-[#EFEFEF] my-5 shadow-xl">
            <img src={screenshots[0].image} alt="Shoes" />
            <div className="card-body">
                <div className='mb-5'>
                    <h2 className="card-title text-3xl mb-5">{name}</h2>
                    {/* <p className='badge h-auto p-2'>{type}</p> */}
                </div>
                <p className='leading-relaxed mb-5'>{description}</p>
                <button className="btn btn-sm btn-outline" onClick={() => navigateToDetails(id)}>Project Details</button>
                
            </div>
        </div>
    );
};

export default Project;