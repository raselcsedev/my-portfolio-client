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
            className="card bg-[#112B3C] my-5 shadow-xl">
            <img src={screenshots[0].image} alt="Shoes" />
            <div className="card-body text-white">
                <div className=''>
                    <h2 className="card-title text-success text-3xl mb-2">{name}</h2>
                    {/* <p className='badge h-auto p-2'>{type}</p> */}
                </div>
                <p className='leading-relaxed'>{description}</p>
                <button className="btn btn-sm text-white btn-outline" onClick={() => navigateToDetails(id)}>Project Details</button>
                
            </div>
        </div>
    );
};

export default Project;