import React from "react"
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "../images/CA-1-Close.jpg";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Main() {
  return (

    <div>
      <Navbar/>
      <div className="container main">
        <div className="about-header text-center">
          <h1>About <strong className="text-white"><u>Me</u></strong></h1>
        </div>

        <div className="hero">
          <img className="responsive-img" src={Hero} />
        </div>
        <div className="about">
            <p className="text-white"> Hey Rookie Programmer here, Just finished going through a coding bootcamp and am now looking 
            for an opportunity to get exp in the field. My main focus is getting into any job or opportunity to get real world experience.
            I am still searching when it comes to prefered languages to work with, my skills even out to front-end and back-end. Currently 
            studying and working on my own and doing my own projects. I am open to working on and learning anything. Just hit me up,
            I will be updating my site regualarly if you want to check out what I've been doing.</p>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}

export default Main;