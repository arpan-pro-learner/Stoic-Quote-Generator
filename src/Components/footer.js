import React from "react";
import "../assets/Footer.css";
import instagram from "../assets/IconUsed/insta.png";
import twitter from "../assets/IconUsed/twitter.png";
import linkedin from "../assets/IconUsed/linkedin.png";


// Youtube video link 
const WikiLink = "https://en.wikipedia.org/wiki/Stoicism";
// Youtube video link 

export default function Footer() {
  return (
    <div>
     <footer>
  <div>
    <p className="copyright">
      Project made by Arpan for the 🖤 {' '}
      <a href={WikiLink} target="_blank" rel="noopener noreferrer">
        Stoicism
      </a>
      {' '}🖤
    </p>
    <br />
    <div className="center-social-icons">
      <a
        className="social-icons"
        href="https://www.instagram.com/theselftaught.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="logo" src={instagram} alt="instagram link" />
      </a>
      <a
        className="social-icons"
        href="https://twitter.com/webdev_arpan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="logo" src={twitter} alt="twitter link" />
      </a>
      <a
        className="social-icons"
        href="https://www.linkedin.com/in/webdevarpan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="logo" src={linkedin} alt="" />
      </a>
    </div>
  </div>
</footer>

    </div>
  );
}
