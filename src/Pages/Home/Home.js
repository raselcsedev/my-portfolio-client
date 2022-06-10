import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import ContactMe from './ContactMe';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <AboutMe></AboutMe>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;