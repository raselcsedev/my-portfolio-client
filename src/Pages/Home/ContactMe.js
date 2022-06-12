import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';

const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_c47x69l',
            'template_e9s4vwq',
            form.current, 'li7KGR2ZHBQDTD2xf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id="contact" className='sm:pt-10'>


            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}


<div  className=" font-ralway text-white">
      <div className=" container font-ralway py-10">
        <div className="mb-10 ">
          <h1 className="text-5xl  font-bold  text-white">
            Contact <span className="text-orange-600">Me</span>{" "}
          </h1>
          <p className="ml-1 mt-2 text-gray-400">Get in touch with me</p>
          {/* <p className="w-full ml-1  bg-orange-500 rounded-full mt-2 h-[1px]"></p> */}
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-5/12 space-y-5">
            <div className="text-white flex gap-4">
              <span>
                <MailIcon className="w-8 text-orange-500" />
              </span>
              <div>
                <h2 className="text-xl font-semibold">Have a question?</h2>
                <p className="text-gray-400">I am here to help</p>
                <p className="text-orange-500">
                  Email me at hello@email.com
                </p>
              </div>
            </div>
            <div className="text-white flex gap-4">
              <span>
                <LocationMarkerIcon className="w-8 text-orange-500" />
              </span>
              <div>
                <h2 className="text-xl font-semibold">Current Location</h2>
                <p className="text-gray-400">Dhaka, Bangladesh.</p>
                <p className="text-orange-500">Serving clients worldwide</p>
              </div>
            </div>
            <div className="text-white flex gap-4">
              <span>
                <PhoneIcon className="w-8 text-orange-500" />
              </span>
              <div>
                <h2 className="text-xl font-semibold">Contact with me</h2>
                <p className="text-gray-400">Email: raselcse.dev@gmail.com</p>
                <p className="text-orange-500">Phone: +880-1768297822</p>
              </div>
            </div>
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-7/12 text-black">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex gap-4 w-full">
                <input
                  name="user_name"
                  type="text"
                  placeholder="Your Name "
                  className="block bg-[#EFEFEF] p-3 h-14 rounded  w-full focus:outline-none"
                />
                <input
                  name="user_email"
                  type="email"
                  placeholder="Your Email"
                  className="block bg-[#EFEFEF] h-14 p-3 rounded  w-full focus:outline-none"
                />
              </div>
              
              <textarea
                name="message"
                className="h-36 bg-[#EFEFEF] resize-none p-3 rounded block w-full mt-5 focus:outline-none"
                placeholder="Type Your Message"
              ></textarea>
              <button
                type="submit"
                className="btn-outline border uppercase py-3 px-8 mt-5 text-white  rounded-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ContactMe;