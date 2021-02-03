import React from "react"
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { a } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AirHoliday from "../images/airHoliday.png";
import HelloWorld from "../images/helloWorld.png";
import Pokemart from "../images/PokeMart.png";
import TaskTracker from "../images/TaskTracker.png";


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
              <a href="https://github.com/KJohnson3288/ProjectOne" ><h5 className="card-title">AirHoliday</h5></a>
              <p className="card-text">Javascript built application that shows all future holiday 
                            dates that allows the user to select locations and see all of the available flights 
                            for those dates.</p>
              <p className="card-text"><small className="text-muted">Last updated 12/3/20</small></p>
            </div>
          </div>

          <div className="card mb-3">
            <img src={HelloWorld} className="card-img-top" alt="..." />
            <div className="card-body">
              <a href="https://github.com/katalinking29/project2"><h5 className="card-title">Hello World</h5></a>
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
              <a href="https://github.com/KJohnson3288/PokeMart/tree/master"><h5 className="card-title">PokeMart App</h5></a>
              <p className="card-text">A Pokemon themed website using items from the Pokemon universe.  A quick project 
              using React to get some practice in. it is complete as of right now. I know theres more I can do, but they would kind blend
              into what my other projects will use so  i decided to end it here. If you want to test it out use this a here:
              <br/>
              <br/>
              <a href="https://kjohnson3288.github.io/PokeMart/">https://kjohnson3288.github.io/PokeMart/</a>
              </p>
              <p className="card-text"><small className="text-muted">Last updated 12/8/20 </small></p>
            </div>
          </div>

          <div className="card mb-3">
            <img src={TaskTracker} className="card-img-top" alt="..." />
            <div className="card-body">
              <a href="https://github.com/KJohnson3288/React-Task-Tracker"><h5 className="card-title">Task Tracker</h5></a>
              <p className="card-text">A Task Track created using React/Express. Allowing users to create and remove task that was posted 
              to the server.
              <br/>
              <br/>
              </p>
              <p className="card-text"><small className="text-muted">Last updated 2/5/2021 </small></p>
            </div>
          </div>

        </div>

        

      </div>

      <Footer />
    </div>

  );
}

export default Projects;