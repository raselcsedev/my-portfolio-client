import React from "react";

import bg from "../../assests/images/animate.png";
const AboutMe = () => {
    return (
        <div id="about" className=" lg:pt-10 pb-20 text-[#112B3C] font-ralway">
            <div className=" ">
                <div className="mb-16 ">
                    <h1 className="text-5xl  font-bold  text-white">
                        About <span className="text-orange-600">Me</span>{" "}
                    </h1>
                    <p className="ml-1 mt-2   text-white font-semibold">
                        See my technological information
                        {/* <p className="w-full   bg-orange-500 rounded-full mt-2 h-[2px]"></p> */}
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row md:items-center justify-center py-10 ">
                    <div className="flex-1">
                        <div className="relative">
                            <img
                                className=" w-60 md:w-80  bg-shadow rounded-full bg-white p-2 relative top-4 md:top-[-20px] md:left-10  left-12 z-20"
                                src="images/face.png"
                                alt=""
                            />
                            <img
                                className="absolute  bg-animation top-0   md:top-[-40px] left-2 md:left-[-20px]  h-[280px] md:h-[360px]  z-0"
                                src={bg}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex-1  pt-10 md:pt-0 font-semibold">
                        <h1 className="text-4xl font-bold mb- text-orange-600">
                            Md. Rasel <span className="text-white">Aktar</span>
                        </h1>
                        <p className="text-success font-semibold">
                            Front-end Web Developer || React Developer 
                        </p>
                        <p className="mt-3 text-white">
                            Hello Dear, I'm Rasel with solid knowledge of Frontend Web
                            Development. My knowledge enables me to create modern &
                            eye-catching responsive websites. I am looking to start my career
                            as an entry-level software engineer with a reputed firm driven by
                            technology.
                        </p>
                        <div className="mt-4">
                            <h2 className="text-2xl font-bold mb-2 text-white">
                                Development <span className="">Skills</span>
                            </h2>
                            <p className="text-white ">
                                {" "}
                                <span className="text-success font-semibold">Expertise:</span> HTML, CSS, Bootstrap, Tailwind, ES6, JavaScript, React, React Bootstrap,
                                Daisy UI, Firebase <br />
                                <span className="text-success font-semibold">Comfortable:</span> Node.js, Express.js, MongoDB <br />
                                <span className="text-success font-semibold">Familiar:</span> JQuery, JWT, TypeScript <br />
                                <span className="text-success font-semibold">Tools:</span> VS Code, Github, Figma, Netlify, Heroku

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;