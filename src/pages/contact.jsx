import React from "react"
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/navbar"
import Footer from "../components/footer";
import emailjs from "emailjs-com";

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_qaci04m", "template_v1axl1r", e.target, "user_PvqkghNqtGsNvM0GqfHEK")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  }

  return (

    <div>
      <Navbar />
      <section className="site-section" id="section-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="section-heading text-center">
                <h1 className="display-4"><u><strong>Contact Me</strong></u></h1>
              </div>
            </div>

            <div className="col-md-7 mb-5 mb-md-0 contact-div">
              <form className="contact-form site-form" onSubmit={sendEmail}>
              <h3 className="mb-5 text-white">Get In Touch</h3>
                <input type="hidden" name="contact_number" />
                <div className="form-group">
                  <input type="text" className="form-control px-3 py-4" placeholder="Your Name" name="user_name" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control px-3 py-4" placeholder="Your Email" name="user_email" />
                </div>
                <div className="form-group">
                  <textarea className="form-control px-3 py-4" cols="30" rows="10" placeholder="Write a Message" name="message" name="message" />
                </div>
                <input type="submit" value="Send" className="btn btn-light btn-lg btn-block  px-4 py-3" />
              </form>
            </div>
            
            <div className="col-md-5 pl-md-5">
              <h3 className="mb-5">My Contact Details</h3>
              <ul className="site-contact-details">
            <li>
                  <span className="text-uppercase">Email: </span>
							 KVJohnson3288@Outlook.com
						</li>
            <li>
                  <span className="text-uppercase">Github: </span>
							 KJohnson3288
						</li>
            <li>
                  <span className="text-uppercase">Linkedin: </span>
							 KJohnson3288
						</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>

  );
}

export default Contact;