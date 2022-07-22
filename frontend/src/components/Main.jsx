import { Routes, Route } from "react-router-dom";
import Projects from "../pages/Projects";
import Project from "../pages/Project";
import AboutMe from "../pages/AboutMe";
import Admin from "../pages/Admin";
import Wrapper from "../services/wrapper";

export default function Main() {
  return (
    <div>
      <Wrapper>
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<Project />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Wrapper>
    </div>
  );
}
