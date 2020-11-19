import React from "react"
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/navbar"
import Footer from "../components/footer";

function Projects() {
  return (

    <div>
      <Navbar />

      <div className="container">
        <div className="portfolio-header">
          <h2>My Portfolio</h2>
        </div>
        <div className="projects-container">
          <div className="card mb-3">
            <img src="https://via.placeholder.com/500x250" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card mb-3">
            <img src="https://via.placeholder.com/500x250" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>

  );
}

export default Projects;