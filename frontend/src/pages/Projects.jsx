import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/services";
import ProjectId from "../components/ProjectId";
import "../styles/_Projects.scss";
import MainLayout from "../components/layouts/MainLayout";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/api/project").then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <MainLayout>
      <section className="projects">
        <h1>Works</h1>
        <ul>
          {projects &&
            projects.map((project) => (
              <li key={project.Id}>
                <Link to={`/projects/${project.Id}`}>
                  <ProjectId project={project} />
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </MainLayout>
  );
}
