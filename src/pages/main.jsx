import React from "react"
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Main() {
  return (

    <div>
      <Navbar />
      <div className="about-header text-center">
        <h1 className="text-black display-4 font-weight-bold">About <strong className="text-black"><u>Me</u></strong></h1>
      </div>
      <div className="container main">


        <div className="about">
          <p className="text-white"> Front-End Web Developer leveraging my background in Culinary Arts and
          work experience in the Medical Industry. Exposure to build more intuitive user experiences on the web.
          Recently earned a certificate in Full Stack Development  and developed skills in JavaScript, CSS, React.js,
          and responsive web design. Known as an innovative problem-solver passionate about developing apps, with a focus
          on mobile-first design and development. Aim for each project is to best engage the audience for an impactful
          user-experience.  Excited to leverage my skills in the future as part of a fast-paced, quality-driven team in order
          to build better experiences on the web.</p>
        </div>
      </div>

      <Footer />
    </div>

  );
}

export default Main;