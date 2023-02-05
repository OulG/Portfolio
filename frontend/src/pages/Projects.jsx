import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/services";
import ProjectId from "../components/ProjectId";
import "../styles/_Projects.scss";
import MainLayout from "../components/layouts/MainLayout";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/api/projects").then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <MainLayout>
      <section className="projects">
        <h1>Works</h1>
        <div className="projects-link">
          {projects &&
            projects.map((project) => (
              <Link
                to={`/projects/${project.Id}`}
                key={project.Id}
                className="link-project"
              >
                <ProjectId project={project} />
              </Link>
            ))}
        </div>
      </section>
    </MainLayout>
  );
}
