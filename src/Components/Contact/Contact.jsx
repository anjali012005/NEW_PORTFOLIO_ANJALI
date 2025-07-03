import React from 'react'
import './Contact.css';
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <CiMail /><p>anjalidaharwal5@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <CiLocationOn /><p>+91 7879308211</p>
                </div>
                <div className="contact-detail">
                    <IoCallOutline /><p>MP, India</p>
                </div>
            </div>
        </div>
        <form className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="">Your Email</label>
            <input type="Email" placeholder='Enter your email' name="email" />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message here'></textarea>
            <button type="submit" className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
