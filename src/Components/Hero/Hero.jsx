import React from 'react'
import './Hero.css';
import profile_img from '../../assets/profile.png'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="profile-img" className='profile-img' />
            <h1><span>I'm Anjali Daharwal,</span>  Frontend Developer based in India.</h1>
            <p>I am a FullStack Developer from Gwalior, India with over 6 months of internship experience.</p>
            <div className='hero-action'>
                <div className="hero-connect">Connect with me</div>
                <div className='hero-resume'>My resume</div>
            </div>
        </div>
    )
}

export default Hero
