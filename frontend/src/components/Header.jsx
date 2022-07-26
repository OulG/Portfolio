import { NavLink } from "react-router-dom";
import "../styles/_Header.scss";
import "../styles/_Variables.scss";

export default function Header({ isMain }) {
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
    <header className={isMain}>
      <div className="container-header">
        <nav>
          <ul>
            <li className="link-to-home">
              <NavLink style={getActiveLinkStyle} to="/">
                Home
              </NavLink>
            </li>
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
      </div>
    </header>
  );
}
