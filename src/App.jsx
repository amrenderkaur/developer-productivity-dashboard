import { useState } from "react";
import ProjectCard from "./components/ProjectCard";
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
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

const filteredProjects = projects.filter((project) =>
  project.name.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <div>
    <div>
      <nav>
        <h2>DevDashboard</h2>

        <div className="nav-links">
          <span>Dashboard</span>
          <span>Projects</span>
          <span>Tasks</span>
        </div>

        <div className="user-profile">
  <span>👤</span>
  <span>Developer</span>
</div>
      </nav>

      <main>

        {loading && <p>Loading projects...</p>}

        {error && <p>Something went wrong. Please try again.</p>}

        <h1>Developer Productivity Dashboard</h1>
        <p>Welcome back! Here is your productivity overview.</p>

        <div>
          <div className="stat-card">
            <h3>Total Projects</h3>
            <p>6</p>
          </div>

          <div className="stat-card">
            <h3>Active Tasks</h3>
            <p>12</p>
          </div>

          <div className="stat-card">
            <h3>Completed</h3>
            <p>24</p>
          </div>
        </div>

        <div className="search-box">
  <input
  type="text"
  placeholder="🔎 Search projects..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
</div>

       <h2>My Projects</h2>

       <div className="projects">

        {filteredProjects.length === 0 && (
  <p>No projects found </p>
)}

        {filteredProjects.map((project) => (
  <ProjectCard key={project.name} project={project} />
  ))}

</div>
</main>
    </div>
  </div>
  );
}

export default App;