import React from "react"
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Kage from "../images/Kage.jpg";
import Akuma from "../images/Akuma.jpg";
import Akuma2 from "../images/Akuma-2.jpg";
import Kage2 from "../images/Kage-2.jpg";
import Ryu from "../images/Ryu.jpg";
import Ryu2 from "../images/Ryu-2.jpg";
import Sakura from "../images/Sakura.jpg";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Main() {
  return (

    <div>
      <Navbar />
      <div className="container main">
        <div className="about-header text-center">
          <h1 className="text-light display-4 font-weight-bold">About <strong className="text-white"><u>Me</u></strong></h1>
        </div>

        <div className="hero">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Kage} className="d-block w-100" alt="StreetFighter 5 Character" />
              </div>
              <div className="carousel-item">
                <img src={Kage2} className="d-block w-100" alt="StreetFighter 5 Character" />
              </div>
              <div className="carousel-item">
                <img src={Ryu} className="d-block w-100" alt="StreetFighter 5 Character" />
              </div>
              <div className="carousel-item">
                <img src={Ryu2} className="d-block w-100" alt="StreetFighter 5 Character" />
              </div>
              <div className="carousel-item">
                <img src={Akuma} className="d-block w-100" alt="StreetFighter 5 Character" />
              </div>
              <div className="carousel-item">
                <img src={Akuma2} className="d-block w-100" alt="StreetFighter 5 Character" />
              </div>
              <div className="carousel-item">
                <img src={Sakura} className="d-block w-100" alt="StreetFighter 5 Character" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
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

      {/* Timeline */}

      <div className="container timeline-container">

        <h2  className="timeline-title text-center text-white text-underline font-weight-bold"><u>My Current Plan</u></h2>

        <div className="main-timeline">

          {/* <!-- start experience section--> */}
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month"> Comeplete :)</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title text-success">React project #1</h5>
              <p className="description text-white">
                This project is a simple web app. Just to get some Practice with <u className="text-success">React.js</u>.
              </p>
            </div>
          </div>
          {/* <!-- end experience section--> */}

          {/* <!-- start experience section--> */}
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month"> Up Next ...</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title text-primary">React project #2</h5>
              <p className="description text-white">
                This will be another project using react. The focus for this one will be using <u className="text-primary">Third Party API's</u>.
              </p>
            </div>
          </div>
          {/* <!-- end experience section--> */}

          {/* <!-- start experience section--> */}
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month"> Coming <br/> Soon ...</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title text-danger">React project #3</h5>
              <p className="description text-white">
                This will be my third personal project with react before moving on to something else. In this one 
                I want to work with <u className="text-danger">Servers</u> and <u className="text-danger">Passport</u>.  Most likely will use <u className="text-danger">MongoDB</u> for the database in this one. 
              </p>
            </div>
          </div>
          {/* <!-- end experience section--> */}

          {/* <!-- start experience section--> */}
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month"> In The <br/> Future ...</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title text-warning">Plans For The Future</h5>
              <p className="description text-white">
                This could definitly change, but as of right now here is a list of things I plan
                on looking into:
                <ul>
                  <li className="future-listItems text-sm-left text-warning">Algorithm practice (curently Trying to work this into my daily schedule)</li>
                  <li className="future-listItems text-sm-left text-warning">PHP</li>
                  <li className="future-listItems text-sm-left text-warning">Python</li>
                  <li className="future-listItems text-sm-left text-warning">Typescript</li>
                  <li className="future-listItems text-sm-left text-warning">Java</li>
                  <li className="future-listItems text-sm-left text-warning">Angular</li>
                  <li className="future-listItems text-sm-left text-warning">Practice with some js packages (For example: Three.js, Anime.js, Pixi.js)</li>
                </ul>
                Not 100% exactly how i will approach these yet but will keep this updated as i move along
              </p>
            </div>
          </div>
          {/* <!-- end experience section--> */}

        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Main;