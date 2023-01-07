import { AiOutlineCopyrightCircle } from "react-icons/ai";
import avatar from "../assets/avatar.png";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import "../styles/_Variables.scss";
import "../styles/_Footer.scss";

export default function Footer({ isMain }) {
  return (
    <footer className={isMain}>
      <div className="footer">
        <div className="copyright">
          <p>Copyright 2023</p>
          <AiOutlineCopyrightCircle padding="0.2rem" />
          <p>Lou Gain</p>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/lougain/" className="social">
            <img src={Linkedin} alt="Logo Linkedin" />
          </a>
          <a href="https://github.com/OulG" className="social">
            <img src={Github} alt="Logo Github" />
          </a>
          <a href="mailto:lou.gain@outlook.fr" className="avatar">
            <img src={avatar} alt="avatar" />
          </a>
        </div>
      </div>
    </footer>
  );
}
