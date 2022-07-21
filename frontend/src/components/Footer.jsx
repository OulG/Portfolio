import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import avatar from "../assets/avatar.png";
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
        <AiFillGithub color="rgb(75, 78, 78)" size="2em" />
        <AiFillLinkedin color="rgb(75, 78, 78)" size="2em" />
        <img src={avatar} alt="avatar" />
      </div>
    </footer>
  );
}
