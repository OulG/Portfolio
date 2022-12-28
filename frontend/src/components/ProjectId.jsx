import "../styles/_ProjectId.scss";

export default function ProjectId({ project }) {
  return (
    <div className="container-box">
      <div className="box-left" />
      <div className="box-right" />
      <div className="box-image">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}${project.picture}`}
          alt={project.id}
        />
        <p className="title-project">{project.title}</p>
      </div>
    </div>
  );
}
