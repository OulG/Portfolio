// import Header from "../components/Header";
// import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import avatar from "../assets/avatar.png";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";

import "../styles/_Home.scss";
import "../styles/_Header2.scss";
import "../styles/_Footer2.scss";

export default function Home() {
  const getActiveLinkStyle = ({ isActive }) => {
    if (isActive) {
      return {
        color: "$grey",
        textDecoration: "underline",
      };
    }
    return null;
  };

  return (
    <section className="home">
      <div className="container-double">
        <div className="waves-box">
          <header className="container-header">
            <h1>Lou Gain</h1>
            <nav>
              <ul>
                <li>
                  <NavLink style={getActiveLinkStyle} to="/projects">
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink style={getActiveLinkStyle} to="/aboutme">
                    About me
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <div className="social-links-waves">
            <img src={Linkedin} alt="Logo Linkedin" className="social-waves" />
            <img src={Github} alt="Logo Github" className="social-waves" />
            <img src={avatar} alt="avatar" className="avatar-waves" />
          </div>
        </div>
        <div className="yellow-box">
          <h1>Lou Gain</h1>
          <footer className="footer">
            <div className="copyright">
              <p>Copyright 2022</p>
              <AiOutlineCopyrightCircle />
              <p>Lou Gain</p>
            </div>
            <div className="social-links-yellow">
              <img
                src={Linkedin}
                alt="Logo Linkedin"
                className="social-yellow"
              />
              <img src={Github} alt="Logo Github" className="social-yellow" />
              <img src={avatar} alt="avatar-yellow" />
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
