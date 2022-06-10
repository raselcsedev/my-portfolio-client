import React from 'react';

const NavBar = () => {
    const navbarItems = <>
        <li className='mx-auto font-bold lg:mr-4'><a href='#skills'>Skills</a></li>
        <li className='mx-auto font-bold lg:mr-4'><a href='#projects'>Projects</a></li>
        <li><a href='https://drive.google.com/file/d/1OW7rVaxymxH0_suemiYW9xvLxFl-vdOk/view?usp=sharing' target='_blank' className="btn btn-primary">Resume</a></li>
    </>
    return (
        <div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="navbar bg-base-300 px-10 mb-32"
        >
            <div className="navbar-start">
                <p className="normal-case text-sky-900 font-extrabold text-4xl">Md. Rasel Aktar</p>
            </div>
            <div className="dropdown flex navbar-end">
                <label tabIndex="0" className="btn btn-ghost lg:hidden self-end">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
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