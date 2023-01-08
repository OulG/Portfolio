import { Formik, Form, Field, ErrorMessage } from "formik";
import "../styles/_FormProject.scss";

export default function ProjectForm({
  initialValues,
  handleProject,
  setTitle,
  setDescription,
  setPicture,
  setLink,
  setTools,
  allTools,
}) {
  return (
    <div className="project-form">
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleProject}
          validateOnMount
        >
          <Form>
            <div
              onChange={(e) => setTitle(e.target.value)}
              className="verif-form"
            >
              <Field
                name="title"
                placeholder="Title"
                type="text"
                className="input"
                required
              />
              <ErrorMessage
                name="title"
                className="text-danger"
                component="span"
              />
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
                className="input"
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
                className="input"
                required
              />
            </div>
            <div
              onChange={(e) => setLink(e.target.value)}
              className="verif-form"
            >
              <Field
                name="link"
                placeholder="Link"
                type="url"
                className="input"
                required
              />
            </div>
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
                    />
                    <label htmlFor={Id}>{name}</label>
                  </li>
                );
              })}
            </ul>
            <div className="add-project-button">
              <button type="submit">add</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
