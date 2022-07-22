import { AiOutlineCopyrightCircle } from "react-icons/ai";
import avatar from "../assets/avatar.png";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import "../styles/_Variables.scss";
import "../styles/_Footer.scss";

export default function Footer() {
  return (
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
  );
}
