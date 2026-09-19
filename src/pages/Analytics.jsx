function Analytics() {
  return (
    <div>
      <h1>Analytics</h1>
      <p>Overview of your development productivity.</p>

      <div className="stats">
        <div className="stat-card">
          <h3>Projects Completed</h3>
          <p>24</p>
          <span className="stat-info">↑ 12% this month</span>
        </div>

        <div className="stat-card">
          <h3>Tasks Completed</h3>
          <p>48</p>
          <span className="stat-info">↑ 18% this month</span>
        </div>

        <div className="stat-card">
          <h3>Completion Rate</h3>
          <p>82%</p>
          <span className="stat-info">↑ 5% this month</span>
        </div>
      </div>

      <div className="analytics-section">
        <h2>Productivity Overview</h2>

        <div className="productivity-bar">
          <div className="productivity-fill"></div>
        </div>

        <div className="productivity-labels">
          <span>Current Productivity</span>
          <strong>82%</strong>
        </div>
      </div>
    </div>
  );
}

export default Analytics;