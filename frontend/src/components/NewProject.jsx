import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/services";
import "../styles/_FormProject.scss";

export default function ProjectForm({ allTools }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState([]);
  const [link, setLink] = useState("");
  const [tools, setTools] = useState([]);

  const navigate = useNavigate();

  const addProject = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", picture[0]);
    formData.append("link", link);
    formData.append("tools", tools);

    try {
      api
        .post(`/api/projects`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          navigate("/projects");
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={addProject} validateOnMount className="project-form">
      <div className="verif-form">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          name="title"
          placeholder="Title"
          type="text"
          className="input"
          required
        />
      </div>
      <div className="verif-form">
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          name="description"
          placeholder="Description"
          type="textarea"
          rows="6"
          className="description"
          required
        />
      </div>
      <div className="verif-form">
        <input
          onChange={(e) => setPicture(e.target.files)}
          name="picture"
          placeholder="Picture"
          type="file"
          className="file"
          required
        />
      </div>
      <div className="verif-form">
        <input
          onChange={(e) => setLink(e.target.value)}
          value={link}
          name="link"
          placeholder="Link"
          type="url"
          className="input"
          required
        />
      </div>
      <div className="verif-form">
        <ul className="tools-list">
          {allTools.map(({ Id, name }) => {
            return (
              <li key={Id} className="tools-list-item">
                <input
                  type="checkbox"
                  id={Id}
                  name={name}
                  value={name}
                  onChange={(e) => setTools(e.target.id)}
                  // value={name}
                />
                <label htmlFor={Id}>{name}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="buttons">
        <button type="submit">add</button>
      </div>
    </form>
  );
}
