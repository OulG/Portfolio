import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/services";
import "../styles/_Project.scss";

export default function Project() {
  const { projectId } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    api.get(`/api/project/${projectId}`).then((res) => {
      setProject(res.data);
    });
  }, []);

  return (
    <section className="project">
      {project && (
        <div>
          <div className="container-box2">
            <div className="box-left2" />
            <div className="box-right2" />
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}${project.picture}`}
              alt={project.id}
            />
          </div>
          <div className="description">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <a
              href={project.link}
              className="btn-flip"
              data-back="Website"
              data-front="Website"
            >
              {" "}
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
