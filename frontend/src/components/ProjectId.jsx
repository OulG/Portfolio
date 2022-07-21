import "../styles/_ProjectId.scss";

export default function ProjectId({ project }) {
  return (
    <section className="project-id">
      <div className="container-box">
        <div className="box-left" />
        <div className="box-right" />
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}${project.picture}`}
          alt={project.id}
        />
      </div>
    </section>
  );
}
