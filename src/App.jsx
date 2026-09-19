import { Link, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Projects from "./pages/Projects.jsx";
import Tasks from "./pages/Tasks.jsx";
import Analytics from "./pages/Analytics.jsx";
import Settings from "./pages/Settings.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>DevDashboard</h2>

        <div className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/analytics">Analytics</Link>
          <Link to="/settings">Settings</Link>
        </div>

        <div className="user-profile">
          <span>👤</span>
          <span>Developer</span>
        </div>
      </nav>

      <main className="dashboard">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;