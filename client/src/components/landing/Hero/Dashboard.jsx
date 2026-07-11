import {
  FaCloudSun,
  FaLeaf,
  FaBug,
  FaMicrophone,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* Header */}

      <div className="dashboard-header">
        <div className="dashboard-title">
          AI Farming Dashboard
        </div>

        <div className="online-status">
          <span className="status-dot"></span>
          Online
        </div>
      </div>

      {/* Cards */}

      <div className="dashboard-grid">

        {/* Weather */}

        <div className="dashboard-card">

          <div className="card-icon">
            <FaCloudSun />
          </div>

          <div className="card-title">
            Weather
          </div>

          <div className="card-value">
            29°C
          </div>

          <div className="card-sub">
            Sunny
          </div>

        </div>

        {/* Crop */}

        <div className="dashboard-card">

          <div className="card-icon">
            <FaLeaf />
          </div>

          <div className="card-title">
            Recommended Crop
          </div>

          <div className="card-value">
            Wheat
          </div>

          <div className="card-sub">
            94% Confidence
          </div>

        </div>

        {/* Disease */}

        <div className="dashboard-card">

          <div className="card-icon">
            <FaBug />
          </div>

          <div className="card-title">
            Disease Risk
          </div>

          <div className="card-value">
            Low
          </div>

          <div className="card-sub">
            Healthy Crop
          </div>

        </div>

        {/* Voice */}

        <div className="dashboard-card">

          <div className="card-icon">
            <FaMicrophone />
          </div>

          <div className="card-title">
            Voice Assistant
          </div>

          <div className="card-value">
            Ready
          </div>

          <div className="card-sub">
            Listening...
          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;