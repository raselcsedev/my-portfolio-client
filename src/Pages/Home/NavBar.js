import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    const navbarItems = <>
        <li className='mx-auto lg:text-white font-bold lg:mr-4'><Link to='/'>HOME</Link></li>
        <li className='mx-auto lg:text-white font-bold lg:mr-4'><a href='#about'>ABOUT</a></li>
        <li className='mx-auto lg:text-white font-bold lg:mr-4'><a href='#services'>SERVICES</a></li>
        <li className='mx-auto lg:text-white font-bold lg:mr-4'><a href='#projects'>PROJECTS</a></li>
        <li className='mx-auto lg:text-white font-bold lg:mr-4'><a href='#contact'>CONTACT</a></li>
        <li><a href='https://drive.google.com/file/d/1OW7rVaxymxH0_suemiYW9xvLxFl-vdOk/view?usp=sharing' target='_blank' className="btn btn-outline lg:text-white">Resume</a></li>
    </>
    return (
        <div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="navbar bg-[#112B3C] px-10 mb-32"
        >
            <div className="navbar-start">
            <div className="flex text-white text-2xl font-bold items-center gap-2">
            <img className="h-10" src='' alt="" />
            Developer
          </div>
            </div>
            <div className="dropdown flex navbar-end">
                <label tabIndex="0" className="btn btn-ghost lg:hidden self-end">
                    <svg className="w-6 text-white h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </label>
                <ul tabIndex="0" className="dropdown-content menu p-2 top-12 shadow bg-base-100">
                    {navbarItems}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navbarItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;