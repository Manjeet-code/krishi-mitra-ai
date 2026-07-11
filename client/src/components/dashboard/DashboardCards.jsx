import "./DashboardCards.css";

import {
  FaCloudSun,
  FaSeedling,
  FaRobot,
  FaIndianRupeeSign,
} from "react-icons/fa6";

const cards = [
  {
    title: "Today's Weather",
    value: "28°C",
    subtitle: "Sunny • Humidity 62%",
    icon: <FaCloudSun />,
    color: "weather",
  },
  {
    title: "Crop Health",
    value: "96%",
    subtitle: "Excellent Condition",
    icon: <FaSeedling />,
    color: "crop",
  },
  {
    title: "AI Queries",
    value: "1,248",
    subtitle: "Solved this month",
    icon: <FaRobot />,
    color: "ai",
  },
  {
    title: "Market Value",
    value: "₹3,250",
    subtitle: "Wheat / Quintal",
    icon: <FaIndianRupeeSign />,
    color: "market",
  },
];

export default function DashboardCards() {
  return (
    <section className="km-cards">

      {cards.map((card, index) => (
        <div
          key={index}
          className={`km-card ${card.color}`}
        >

          <div className="km-card-top">

            <div className="km-card-icon">
              {card.icon}
            </div>

            <span className="km-card-badge">
              Live
            </span>

          </div>

          <h5>{card.title}</h5>

          <h2>{card.value}</h2>

          <p>{card.subtitle}</p>

        </div>
      ))}

    </section>
  );
}