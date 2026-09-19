function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      <p>Manage your profile and dashboard preferences.</p>

      <div className="settings-container">
        <div className="settings-card">
          <h2>Profile</h2>

          <div className="profile-row">
            <div className="profile-avatar">👤</div>

            <div>
              <h3>Developer</h3>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>

        <div className="settings-card">
          <h2>Preferences</h2>

          <div className="setting-item">
            <div>
              <h3>Email Notifications</h3>
              <p>Receive updates about your projects and tasks.</p>
            </div>

            <input type="checkbox" defaultChecked />
          </div>

          <div className="setting-item">
            <div>
              <h3>Auto Save</h3>
              <p>Automatically save your dashboard changes.</p>
            </div>

            <input type="checkbox" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;