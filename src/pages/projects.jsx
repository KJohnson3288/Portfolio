import React from "react"
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AirHoliday from "../images/airHoliday.png";
import HelloWorld from "../images/helloWorld.png";
import Pokemart from "../images/PokeMart.png";

function Projects() {
  return (

    <div>
      <Navbar />

      <div className="container">
        <div className="portfolio-header">
          <h1 className="project-title display-4 font-weight-bold "><u>My Portfolio</u></h1>
        </div>
        <div className="projects-container">
          <div className="card mb-3">
            <img src={AirHoliday} className="card-img-top hello-img" alt="..." />
            <div className="card-body">
              <Link to="https://github.com/KJohnson3288/ProjectOne" ><h5 className="card-title">AirHoliday</h5></Link>
              <p className="card-text">Javascript built application that shows all future holiday 
                            dates that allows the user to select locations and see all of the available flights 
                            for those dates.</p>
              <p className="card-text"><small className="text-muted">Last updated 12/3/20</small></p>
            </div>
          </div>

          <div className="card mb-3">
            <img src={HelloWorld} className="card-img-top" alt="..." />
            <div className="card-body">
              <Link to="https://github.com/katlinking29/project2"><h5 className="card-title">Hello World</h5></Link>
              <p className="card-text">Hello World is a social meetup application 
                            targeted at web developers. Our app allows the user to create a profile 
                            and gives them a dashboard where they can find local networking events 
                            close by as well as see new job postings from indeed.com. </p>
              <p className="card-text"><small className="text-muted">Last updated 12/3/20</small></p>
            </div>
          </div>

          <div className="card mb-3">
            <img src={Pokemart} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">PokeMart App</h5>
              <p className="card-text">A Pokemon themed website using items from the Pokemon universe.  A quick project 
              using React to get some practice in.
              </p>
              <p className="card-text"><small className="text-muted">Last updated 12/3/20 currently in progress</small></p>
            </div>
          </div>

        </div>

        

      </div>

      <Footer />
    </div>

  );
}

export default Projects;