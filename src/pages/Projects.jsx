import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const projects = [
    {
      name: "Portfolio Website",
      category: "Frontend Development",
      progress: 80
    },
    {
      name: "Task Manager",
      category: "React Project",
      progress: 60
    },
    {
      name: "AI Dashboard",
      category: "Machine Learning",
      progress: 40
    }
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || project.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h1>My Projects</h1>
      <p>Track your projects and their progress.</p>

      <div className="project-controls">
        <input
          type="text"
          placeholder="🔎 Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Frontend Development">
            Frontend Development
          </option>
          <option value="React Project">React Project</option>
          <option value="Machine Learning">Machine Learning</option>
        </select>
      </div>
<div className="projects">
  {filteredProjects.length === 0 ? (
    <div className="empty-state">
      <h3>No projects found</h3>
      <p>Try changing your search or category filter.</p>
    </div>
  ) : (
    filteredProjects.map((project) => (
      <ProjectCard
        key={project.name}
        project={project}
      />
    ))
  )}
</div>
   
    </div>
  );
}

export default Projects;