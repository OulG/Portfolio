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
        <div className="waves">
          <header className="container-header">
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
          <div className="social-links">
            <img src={Linkedin} alt="Logo Linkedin" className="social" />
            <img src={Github} alt="Logo Github" className="social" />
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        <div className="yellow-bottom">
          <footer className="footer">
            <div className="copyright">
              <p>Copyright 2022</p>
              <AiOutlineCopyrightCircle />
              <p>Lou Gain</p>
            </div>
            <div className="social-links">
              <img src={Linkedin} alt="Logo Linkedin" className="social" />
              <img src={Github} alt="Logo Github" className="social" />
              <img src={avatar} alt="avatar" />
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
