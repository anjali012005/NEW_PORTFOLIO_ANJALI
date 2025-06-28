import React from 'react'
import './About.css';
import profile_img from '../../assets/about-profile.jpg';

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src="" alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a passionate and self-motivated developer with a strong foundation in full-stack web development and a growing interest in AI and machine learning.</p>

                        <p>As a quick learner and an enthusiastic contributor, I enjoy taking ownership of projects from ideation to deployment. My goal is to create impactful digital experiences while collaborating with diverse teams to solve meaningful problems.</p>

                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p><hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p><hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>MongoDB</p><hr style={{ width: "80%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>6+</h1>
                    <p>MONTHS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div >
    )
}

export default About
