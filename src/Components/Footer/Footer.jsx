import React from 'react'
import './Footer.css';
import { CiUser } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <p>I am a FullStack Developer from, India with 1+ years of experience in tech world!</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <CiUser />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p>© 2025 Anjali Daharwal.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
