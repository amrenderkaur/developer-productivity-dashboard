function Dashboard() {
  return (
    <div>
      <div className="dashboard-header">
        <div>
          <h1>Developer Productivity Dashboard</h1>
          <p>Welcome back! Here's your productivity overview.</p>
        </div>
      </div>

      <div className="stats">
        <div className="stat-card">
          <h3>Total Projects</h3>
          <p>6</p>
          <span className="stat-info">2 active projects</span>
        </div>

        <div className="stat-card">
          <h3>Active Tasks</h3>
          <p>12</p>
          <span className="stat-info">4 due this week</span>
        </div>

        <div className="stat-card">
          <h3>Completed</h3>
          <p>24</p>
          <span className="stat-info">↑ 18% this month</span>
        </div>
      </div>

      <div className="dashboard-section">
        <div className="section-heading">
          <h2>Productivity Summary</h2>
          <span>82%</span>
        </div>

        <div className="productivity-bar">
          <div className="productivity-fill"></div>
        </div>

        <p className="summary-text">
          You're making great progress across your projects and tasks.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;