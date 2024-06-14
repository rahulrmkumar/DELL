import React from 'react';
import "./home.css";
import ME from "../../assets/avatar-1.svg";
import HeaderSocial from './HeaderSocial';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
   <section className="home container" id="home">
    <div className="intro">
      <img src={ME} alt="" className="home__img" />
      <h1 className="home__name">Rahul Kumar</h1>
      <span className="home__education"> I'm a Front-End developer</span>
      <HeaderSocial/>
      <a href="" className="btn">Hire Me</a>
      <ScrollDown/>
    </div>
    <Shapes/>
    </section>
  )
}

export default Home