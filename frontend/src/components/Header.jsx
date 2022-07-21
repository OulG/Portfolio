import { NavLink } from "react-router-dom";
import "../styles/_Header.scss";
import "../styles/_Variables.scss";

export default function AboutMe() {
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
    <header className="container-header">
      <nav>
        <ul>
          <li className="link-home">
            <NavLink style={getActiveLinkStyle} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={getActiveLinkStyle} to="/projets">
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
  );
}
