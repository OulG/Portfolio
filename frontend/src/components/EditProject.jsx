import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useState } from "react";
import "../styles/_FormProject.scss";

export default function ProjectForm({
  titles,
  descriptions,
  pictures,
  links,
  // tools,
  // allTools,
  IdProject,
}) {
  //   const navigate = useNavigate();

  const [title, setTitle] = useState(titles);
  const [description, setDescription] = useState(descriptions);
  const [picture, setPicture] = useState(pictures);
  const [link, setLink] = useState(links);
  //   const [tool, setTool] = useState(tools.map((key) => key.tool.name));

  const editProject = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("picture", picture[0]);
    formData.append("link", link);
    // formData.append("projectTools", tool);

    try {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/project/${IdProject}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.error(res);
          //   navigate("/project");
        });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProject = (e) => {
    e.preventDefault();
    axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/api/project/${IdProject}`
    );
    // ToastDeleteMasterclass();
  };

  return (
    <Formik onSubmit={editProject} validateOnMount>
      <Form className="project-form">
        <div onChange={(e) => setTitle(e.target.value)} className="verif-form">
          <Field
            name="title"
            placeholder="Title"
            type="text"
            className="input"
            required
          />
          <ErrorMessage name="title" className="text-danger" component="span" />
        </div>
        <div
          onChange={(e) => setDescription(e.target.value)}
          className="verif-form"
        >
          <textarea
            name="description"
            placeholder="Description"
            type="textarea"
            rows="6"
            className="description"
            required
          />
          <ErrorMessage
            name="description"
            className="text-danger"
            component="span"
          />
        </div>
        <div
          onChange={(e) => setPicture(e.target.files)}
          className="verif-form"
        >
          <Field
            name="picture"
            placeholder="Picture"
            type="file"
            className="file"
            required
          />
        </div>
        <div onChange={(e) => setLink(e.target.value)} className="verif-form">
          <Field
            name="link"
            placeholder="Link"
            type="url"
            className="input"
            required
          />
        </div>
        {/* <ul className="tools-list">
              {allTools.map(({ Id, name }) => {
                return (
                  <li key={Id} className="tools-list-item">
                    <input
                      type="checkbox"
                      id={Id}
                      name={name}
                      value={name}
                      onChange={(e) => setTool(e.target.id)}
                    />
                    <label htmlFor={Id}>{name}</label>
                  </li>
                );
              })}
            </ul> */}
        <div className="buttons">
          <button type="submit">update</button>
          <button type="submit" value="delete" onClick={deleteProject}>
            Delete
          </button>
        </div>
      </Form>
    </Formik>
  );
}
