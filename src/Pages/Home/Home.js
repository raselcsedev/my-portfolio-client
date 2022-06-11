import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import ContactMe from './ContactMe';
import Projects from './Projects';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-10'>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Services></Services>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;