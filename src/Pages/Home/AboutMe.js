import React from 'react';


const AboutMe = () => {
    return (
        <div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="hero text-white mb-32">
            <div className="hero-content w-full flex-col justify-between lg:flex-row">
                <div className='mb-12 lg:mb-0'>
                    <img src="images/arts/aboutme.svg" className="" alt='about me' />
                </div>
                <div className='max-w-2xl mr-0 lg:mr-16'>
                    <h1 className="text-5xl font-semibold mb-5">About Me</h1>
                    <p className="text-xl leading-relaxed mb-5">I am passionate about things related to HTML5, CSS3, JavaScript, ES6, React.js, Firebase, Node.js, MongoDB.</p>
                    <a href='/' className="btn btn-primary">Me</a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;