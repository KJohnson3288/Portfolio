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
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum orci sit amet orci laoreet feugiat. 
              Integer vehicula turpis metus, eget bibendum quam tristique et. Quisque bibendum nibh metus, elementum luctus magna fringilla posuere. 
              Maecenas sit amet dapibus est. Integer volutpat consectetur pellentesque. Vivamus scelerisque bibendum ipsum, quis volutpat risus volutpat a. 
              Nunc consequat hendrerit iaculis. Donec et maximus ipsum. Nunc tempus ullamcorper sapien, at malesuada dui sagittis non.</p>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}

export default Main;