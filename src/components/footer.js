import React from "react";
import "../App.css";
import LinkedIn from "../images/LinkedinI.png";
import Github from "../images/GithubI.png";

function Footer() {
    return (

        <div>
            <footer>
                <div className="footer-container">
                    <a href="https://github.com/KJohnson3288" className="link-1"><img className="icon-img" alt="icon" src={Github} /> Github: KJohnson3288</a>
                    <a href="https://www.linkedin.com/in/kjohnson3288/" className="link-2"><img className="icon-img" alt="icon" src={LinkedIn} /> Linkedin: KJohnson3288</a>
                </div>
            </footer>
        </div>

    );
}

export default Footer;