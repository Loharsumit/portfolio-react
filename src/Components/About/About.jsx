import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm Sumit Lohar, a Frontend Developer based in Bengaluru, India, with 3+ years of experience building responsive, performant, and user-friendly web applications.
I specialize in React.js and Vue.js, and I love turning complex problems into clean, intuitive interfaces. From architecting scalable UI modules to integrating RESTful APIs and optimizing performance — I take pride in writing code that's not just functional, but maintainable and impactful.</p>
                    <p>I've worked across projects in pharmacy management, classifieds, matrimonial platforms, and content management systems — each one teaching me something new about building for real users at scale.
When I'm not coding, I'm exploring new JavaScript frameworks, experimenting with UI patterns, or working on side projects that push my skills further.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"90%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Vue JS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Git & Github</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Boostrap</p><hr style={{width:"70%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About
