import React from 'react';


const Banner = () => {
    return (
        <div className="hero mb-32">
            <div className="hero-content flex-col w-full justify-around lg:flex-row-reverse">
                <div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className='max-w-sm mb-12 lg:mb-0'
                >
                    <img src="images/face.png" alt='me' />
                </div>
                <div
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className='max-w-2xl'
                >
                    <h1 className="text-5xl font-semibold mb-5">Hi! I am Rasel!</h1>
                    <div className="text-3xl leading-relaxed mb-5">Front-end Web Developer
                        
                    </div>
                    <a href="https://drive.google.com/file/d/1OW7rVaxymxH0_suemiYW9xvLxFl-vdOk/view?usp=sharing" target="_blank" className="btn btn-primary">Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;