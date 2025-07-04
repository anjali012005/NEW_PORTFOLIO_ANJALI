import React from 'react'
import './Hero.css';
import profile_img from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id="home" className='hero'>
            <img src={profile_img} alt="profile-img" className='profile-img' />
            <h1><span>I'm Anjali Daharwal,</span>  Frontend Developer based in India.</h1>
            <p>I am a FullStack Developer from Gwalior, India with over 6 months of internship experience.</p>
            <div className='hero-action'>
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me</AnchorLink></div>
                <div className='hero-resume'>My resume</div>
            </div>
        </div>
    )
}

export default Hero
