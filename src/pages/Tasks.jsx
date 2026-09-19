function Tasks() {
  const tasks = [
    {
      name: "Complete React Project",
      category: "Development",
      status: "In Progress"
    },
    {
      name: "Update Portfolio",
      category: "Personal",
      status: "Completed"
    },
    {
      name: "Learn Node.js",
      category: "Learning",
      status: "Pending"
    },
    {
      name: "Prepare Project Documentation",
      category: "Documentation",
      status: "In Progress"
    }
  ];

  return (
    <div>
      <h1>My Tasks</h1>
      <p>Manage and track your daily development tasks.</p>

      <div className="tasks-container">
        {tasks.map((task) => (
          <div className="task-card" key={task.name}>
            <div>
              <h3>{task.name}</h3>
              <p>{task.category}</p>
            </div>

            <span
              className={`task-status ${task.status
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;