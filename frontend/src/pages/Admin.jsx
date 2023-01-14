import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/services";
import MainLayout from "../components/layouts/MainLayout";
import NewProject from "../components/NewProject";
import EditProject from "../components/EditProject";
import "../styles/_Main.scss";
import "../styles/_Admin.scss";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState([]);
  const [link, setLink] = useState("");
  const [tools, setTools] = useState([]);
  const [allTools, setAllTools] = useState([]);
  const [showProject, setShowProject] = useState([]);
  const [filterProject, setFilterProject] = useState("");

  const navigate = useNavigate();

  const handleProject = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("picture", picture[0]);
    formData.append("link", link);
    formData.append("tools", tools);

    try {
      api
        .post(`/api/project`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          navigate("/project");
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    api.get(`/api/tool`).then((res) => {
      setAllTools(res.data);
    });
  }, []);

  useEffect(() => {
    api.get(`/api/project`).then((res) => {
      setShowProject(res.data);
    });
  }, []);

  const handleFilter = (e) => {
    setFilterProject(e.target.value);
  };

  console.error("toolsProject", tools);
  console.error("allTools", allTools);
  console.error("showProject", showProject);

  return (
    <MainLayout>
      <div className="admin">
        <section className="project">
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
              <div key={elem.Id}>
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
              </div>
            ))}
        </section>
        <section className="project">
          <h2>New project</h2>
          <NewProject
            handleProject={handleProject}
            setTitle={setTitle}
            setDescription={setDescription}
            setPicture={setPicture}
            setLink={setLink}
            setTools={setTools}
            allTools={allTools}
          />
        </section>
      </div>
    </MainLayout>
  );
}
