import "./DashboardSidebar.css";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Logo from "../common/Logo";

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
  FaHome,
  FaTimes,
} from "react-icons/fa";

import { useLocation } from "react-router-dom";

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <FaHome />,
    },
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

export default function DashboardSidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();

  const [activeSection, setActiveSection] = useState("dashboard");



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
    if (setIsSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  /* ==========================
      Active Section
  ========================== */

  useEffect(() => {

    const rootElement = document.querySelector('.km-layout__main');
    if (!rootElement) return;

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActiveSection(entry.target.id);

          }

        });

      },

      {
        root: rootElement,
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0,
      }

    );

    menuItems.forEach((item) => {

      const section = document.getElementById(item.id);

      if (section) observer.observe(section);

    });

    return () => observer.disconnect();

  }, []);

  useEffect(() => {
    const activeBtn = document.querySelector('.km-sidebar__menu button.active');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeSection]);

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
    <>
      <div 
        className={`km-sidebar-overlay ${isSidebarOpen ? "show" : ""}`} 
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      <aside className={`km-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button 
          className="mobile-close-sidebar" 
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaTimes />
        </button>

      {/* =====================
            BRAND
      ====================== */}

      <div className="km-sidebar__brand">
        <div className="km-sidebar__logo">
          <Logo />
        </div>
        <div>
          <h2>
            KrishiMitra AI
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
          src={`https://ui-avatars.com/api/?name=${user?.name || "Farmer"}&background=16a34a&color=fff&size=128`}
          alt="User Profile"
        />

        <div>

          <h4>
            Welcome {user?.name ? user.name.split(" ")[0] : "Farmer"} 👋
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
          onClick={() => window.dispatchEvent(new CustomEvent("open-settings"))}
        >

          <FaCog />

          <span>

            Settings

          </span>

        </button>

        <button
          className="footer-btn logout"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >

          <FaSignOutAlt />

          <span>

            Logout

          </span>

        </button>

      </div>

      </aside>
    </>

  );

}