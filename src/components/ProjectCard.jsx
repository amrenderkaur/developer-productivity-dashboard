function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>

      <p>{project.category}</p>

      <p>Progress: {project.progress}%</p>

      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProjectCard;