import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from './AboutBox';

const About1 = () => {
  return (
    <section className="about container section">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Rahul Kumar, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at WordPress.</p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills_data">
              <div className="skills__title">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__title">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__title">
                <h3 className="skills__name">Problem Solving</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage problem"></span>
              </div>
            </div>

          </div>
        </div>
      </div>

       
      <AboutBox/>
    </section>
  )
}

export default About1