import { useState, useEffect } from "react";
import api from "../services/services";
import MainLayout from "../components/layouts/MainLayout";
import NewProject from "../components/NewProject";
import EditProject from "../components/EditProject";
import "../styles/_Main.scss";
import "../styles/_Admin.scss";

export default function Admin() {
  const [allTools, setAllTools] = useState([]);
  const [showProject, setShowProject] = useState([]);
  const [filterProject, setFilterProject] = useState("");

  useEffect(() => {
    api.get(`/api/tools`).then((res) => {
      setAllTools(res.data);
    });
  }, []);

  useEffect(() => {
    api.get(`/api/projects`).then((res) => {
      setShowProject(res.data);
    });
  }, []);

  const handleFilter = (e) => {
    setFilterProject(e.target.value);
  };

  return (
    <MainLayout>
      <div className="admin">
        <section className="admin-project">
          <h2>Update or delete project</h2>
          <select
            name="show-project"
            id="showProject"
            onChange={handleFilter}
            className="select-project"
          >
            <option value="">Selectionne le project</option>
            {showProject.map((project) => (
              <option value={project.title} key={project.Id}>
                {project.title}
              </option>
            ))}
          </select>
          {showProject
            .filter((filtered) => filtered.title === filterProject)
            .map((elem) => (
              <EditProject
                key={elem.Id}
                titles={elem.title}
                descriptions={elem.description}
                links={elem.link}
                pictures={elem.picture}
                tools={elem.tools}
                IdProject={elem.Id}
                allTools={allTools}
              />
            ))}
        </section>
        <section className="admin-project">
          <h2>New project</h2>
          <NewProject allTools={allTools} />
        </section>
      </div>
    </MainLayout>
  );
}
