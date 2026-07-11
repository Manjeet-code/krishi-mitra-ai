import "./DashboardHeader.css";

import {
  FaBell,
  FaSearch,
  FaCalendarAlt,
} from "react-icons/fa";

export default function DashboardHeader() {

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="km-header">

      <div>

        <h1>
          {greeting},
          Farmer 👋
        </h1>

        <p>
          Welcome back to Krishi Mitra AI Dashboard
        </p>

      </div>

      <div className="km-header-right">

        <div className="km-search">

          <FaSearch />

          <input
            placeholder="Search anything..."
          />

        </div>

        <div className="km-date">

          <FaCalendarAlt />

          <span>{today}</span>

        </div>

        <button className="km-notification">

          <FaBell />

          <span></span>

        </button>

        <div className="km-user">

          <img
            src="https://ui-avatars.com/api/?name=Farmer&background=2E7D32&color=fff"
            alt=""
          />

          <div>

            <h4>Farmer</h4>

            <p>Premium User</p>

          </div>

        </div>

      </div>

    </header>
  );
}