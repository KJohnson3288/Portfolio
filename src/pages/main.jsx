import React from "react"
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyPicOne from "../images/Me-1.png";
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
          <img src={MyPicOne} class="img-fluid" alt="Pic of me"/>
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

          {/* <!-- start Project section--> */}
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month"> Project</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title text-success"> NSI Project </h5>
              <p className="description text-white">
                Practice site for investing using <u className="text-success">React.js</u>. Currently Planning out the site design
                and layout will update once I move on to the next phase.
              </p>
            </div>
          </div>
          {/* <!-- end Project section--> */}

          {/* <!-- start Language section--> */}
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month"> Language </span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title text-primary">Current Language I'm Learning</h5>
              <p className="description text-white">
                Right now I'm focusing on <u className="text-primary"> Python</u>. In the stages of learning the basics
                will be posting mini projects once i'm comfortable with the language.
              </p>
            </div>
          </div>
          {/* <!-- end Language section--> */}

          {/* <!-- start section--> */}
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month"> Job Prep</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title text-danger">JIRA - SCRUM / Kanban</h5>
              <p className="description text-white">
                Recently researching <u className="text-danger">AGILE</u> development practices with <u className="text-danger">JIRA</u>.  
                Getting an understanding of both <u className="text-danger"> SCRUM </u> and <u className="text-danger"> Kanban </u> practices. 
              </p>
            </div>
          </div>
          {/* <!-- end section--> */}

          {/* <!-- start section--> */}
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
                Here is a list of things I plan
                on looking into:
                <ul>
                  <li className="future-listItems text-sm-left text-warning">Java</li>
                  <li className="future-listItems text-sm-left text-warning">Angular</li>
                  <li className="future-listItems text-sm-left text-warning">Oracle</li>
                </ul>
                Still in the process of fine tuning my focus.  Really trying to get an understanding of where I want
                to be and what exactly I want to do. This is the path I'm gonna stick with for now. 
              </p>
            </div>
          </div>
          {/* <!-- end section--> */}

        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Main;