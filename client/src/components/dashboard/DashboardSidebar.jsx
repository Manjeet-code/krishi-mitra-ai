import "./DashboardSidebar.css";
import { useEffect, useState } from "react";

import {
  FaComments,
  FaCloudSun,
  FaSeedling,
  FaChartLine,
  FaFlask,
  FaBug,
  FaUniversity,
  FaCog,
  FaSignOutAlt,
  FaCircle,
} from "react-icons/fa";

import { useLocation } from "react-router-dom";

  const menuItems = [

    {
      id: "chat",
      label: "AI Chat",
      icon: <FaComments />,
    },

    {
      id: "weather",
      label: "Weather",
      icon: <FaCloudSun />,
    },

    {
      id: "crop",
      label: "Crop Recommendation",
      icon: <FaSeedling />,
    },

    {
      id: "market",
      label: "Market Prices",
      icon: <FaChartLine />,
    },

    {
      id: "fertilizer",
      label: "Fertilizer",
      icon: <FaFlask />,
    },

    {
      id: "disease",
      label: "Disease Detection",
      icon: <FaBug />,
    },

    {
      id: "schemes",
      label: "Govt Schemes",
      icon: <FaUniversity />,
    },

  ];

export default function DashboardSidebar() {

  const location = useLocation();

  const [activeSection, setActiveSection] = useState("chat");



  /* ==========================
      Smooth Scroll
  ========================== */

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({

        behavior: "smooth",

        block: "start",

      });

    }

    setActiveSection(id);

  };

  /* ==========================
      Active Section
  ========================== */

  useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActiveSection(entry.target.id);

          }

        });

      },

      {

        threshold: 0.45,

      }

    );

    menuItems.forEach((item) => {

      const section = document.getElementById(item.id);

      if (section) observer.observe(section);

    });

    return () => observer.disconnect();

  }, []);

  useEffect(() => {
  if (!location.hash) return;

  const id = location.hash.replace("#", "");

  setActiveSection(id);

  setTimeout(() => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 300);
}, [location]);

  return (

    <aside className="km-sidebar">

      {/* =====================
            BRAND
      ====================== */}

      <div className="km-sidebar__brand">

        <div className="km-sidebar__logo">

          🌾

        </div>

        <div>

          <h2>

            Krishi Mitra AI

          </h2>

          <span>

            Smart Farming Platform

          </span>

        </div>

      </div>

      {/* =====================
            PROFILE
      ====================== */}

      <div className="km-sidebar__profile">

        <img
          src="https://ui-avatars.com/api/?name=Farmer&background=16a34a&color=fff&size=128"
          alt="Farmer"
        />

        <div>

          <h4>

            Welcome Farmer 👋

          </h4>

          <p>

            <FaCircle className="online-dot" />

            AI Online

          </p>

        </div>

      </div>

      {/* =====================
            MENU
      ====================== */}

      <nav className="km-sidebar__menu">

        {menuItems.map((item) => (

          <button

            key={item.id}

            onClick={() => scrollToSection(item.id)}

            className={
              activeSection === item.id
                ? "active"
                : ""
            }

          >

            {item.icon}

            <span>

              {item.label}

            </span>

          </button>

        ))}

      </nav>

           {/* =========================
              AI STATUS CARD
      ========================== */}

      <div className="km-sidebar__status">

        <div className="status-header">

          <div className="status-dot"></div>

          <span>

            AI Services Active

          </span>

        </div>

        <div className="status-items">

          <div className="status-item">

            <span>🤖 AI Chat</span>

            <FaCircle className="status-online" />

          </div>

          <div className="status-item">

            <span>🌦 Weather API</span>

            <FaCircle className="status-online" />

          </div>

          <div className="status-item">

            <span>🌾 Crop AI</span>

            <FaCircle className="status-online" />

          </div>

          <div className="status-item">

            <span>🧪 Disease Detection</span>

            <FaCircle className="status-online" />

          </div>

        </div>

      </div>

      {/* =========================
              FOOTER
      ========================== */}

      <div className="km-sidebar__footer">

        <button
          className="footer-btn"
        >

          <FaCog />

          <span>

            Settings

          </span>

        </button>

        <button
          className="footer-btn logout"
        >

          <FaSignOutAlt />

          <span>

            Logout

          </span>

        </button>

      </div>

    </aside>



  );

}