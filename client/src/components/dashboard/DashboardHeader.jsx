import "./DashboardHeader.css";
import { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaBell,
  FaSearch,
  FaCalendarAlt,
  FaSignOutAlt,
  FaUserCog,
  FaComments,
  FaCloudSun,
  FaSeedling,
  FaChartLine,
  FaFlask,
  FaBug,
  FaUniversity
} from "react-icons/fa";

export default function DashboardHeader({ isSidebarOpen, setIsSidebarOpen }) {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const searchRef = useRef(null);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

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

  const features = [
    { id: "chat", label: "AI Chat", icon: <FaComments style={{ color: "#22c55e" }} /> },
    { id: "weather", label: "Weather Forecast", icon: <FaCloudSun style={{ color: "#3b82f6" }} /> },
    { id: "crop", label: "Crop Recommendation", icon: <FaSeedling style={{ color: "#eab308" }} /> },
    { id: "market", label: "Market Prices", icon: <FaChartLine style={{ color: "#a855f7" }} /> },
    { id: "fertilizer", label: "Fertilizer Advice", icon: <FaFlask style={{ color: "#ec4899" }} /> },
    { id: "disease", label: "Disease Detection", icon: <FaBug style={{ color: "#ef4444" }} /> },
    { id: "schemes", label: "Government Schemes", icon: <FaUniversity style={{ color: "#f97316" }} /> },
  ];

  const filteredFeatures = features.filter((f) =>
    f.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filteredFeatures.length > 0) {
      handleFeatureClick(filteredFeatures[0].id);
    }
  };

  const handleFeatureClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setSearchQuery("");
    setShowSearchDropdown(false);
  };

  return (
    <header className="km-header">
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
        <button 
          className="mobile-menu-icon" 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{ background: 'transparent', border: 'none', color: '#0f172a', padding: 0, marginTop: '8px' }}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div>

        <h1>
          {greeting},
          {user?.name ? ` ${user.name.split(" ")[0]}` : " Farmer"} 👋
        </h1>

        <p>
          Welcome back to KrishiMitra AI Dashboard
        </p>

      </div>
      </div>

      <div className="km-header-right">

        <div className="km-search-wrapper" ref={searchRef} style={{ position: "relative" }}>
          <form className="km-search" onSubmit={handleSearchSubmit}>
            <FaSearch style={{ color: "#64748b" }} />
            <input
              placeholder="Search features..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchDropdown(true);
              }}
              onFocus={() => setShowSearchDropdown(true)}
            />
          </form>

          {showSearchDropdown && (
            <div style={{
              position: "absolute", top: "110%", left: 0, width: "100%", background: "#fff",
              borderRadius: "12px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              border: "1px solid #e2e8f0", zIndex: 100, overflow: "hidden", animation: "fadeIn 0.2s ease-out"
            }}>
              {filteredFeatures.length > 0 ? (
                filteredFeatures.map((f) => (
                  <div
                    key={f.id}
                    onClick={() => handleFeatureClick(f.id)}
                    style={{
                      display: "flex", alignItems: "center", gap: "12px", padding: "12px 15px",
                      cursor: "pointer", transition: "background 0.2s", color: "#334155", fontWeight: "500", fontSize: "14px"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = "#f8fafc"}
                    onMouseOut={(e) => e.currentTarget.style.background = "#fff"}
                  >
                    <span style={{ fontSize: "16px" }}>{f.icon}</span>
                    {f.label}
                  </div>
                ))
              ) : (
                <div style={{ padding: "12px 15px", color: "#64748b", fontSize: "14px" }}>
                  No features found
                </div>
              )}
            </div>
          )}
        </div>

        <div className="km-date">

          <FaCalendarAlt />

          <span>{today}</span>

        </div>

        <div className="km-notification-wrapper" ref={notifRef} style={{ position: "relative" }}>
          <button 
            className="km-notification" 
            onClick={() => setShowNotifications(!showNotifications)}
            style={{ 
              background: showNotifications ? "#e2e8f0" : "#f1f5f9",
              cursor: "pointer",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              color: "#64748b",
              transition: "all 0.3s ease"
            }}
          >
            <FaBell />
            <span style={{
              position: "absolute",
              top: "10px",
              right: "12px",
              width: "8px",
              height: "8px",
              background: "#ef4444",
              borderRadius: "50%"
            }}></span>
          </button>

          {showNotifications && (
            <div style={{
              position: "absolute",
              top: "60px",
              right: "0",
              width: "300px",
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              border: "1px solid #e2e8f0",
              zIndex: 100,
              padding: "15px",
              animation: "fadeIn 0.2s ease-out"
            }}>
              <h4 style={{ margin: "0 0 15px 0", color: "#0f172a", fontSize: "16px", borderBottom: "1px solid #f1f5f9", paddingBottom: "10px" }}>Notifications</h4>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <div style={{ width: "8px", height: "8px", background: "#22c55e", borderRadius: "50%", marginTop: "6px" }}></div>
                  <div>
                    <p style={{ margin: "0", color: "#334155", fontSize: "14px", fontWeight: "500" }}>Rain expected tomorrow</p>
                    <span style={{ fontSize: "12px", color: "#94a3b8" }}>2 hours ago</span>
                  </div>
                </div>
                
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <div style={{ width: "8px", height: "8px", background: "#3b82f6", borderRadius: "50%", marginTop: "6px" }}></div>
                  <div>
                    <p style={{ margin: "0", color: "#334155", fontSize: "14px", fontWeight: "500" }}>Market price for Wheat updated</p>
                    <span style={{ fontSize: "12px", color: "#94a3b8" }}>5 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="km-user-wrapper" ref={profileRef} style={{ position: "relative" }}>
          <div 
            className="km-user" 
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={`https://ui-avatars.com/api/?name=${user?.name || "Farmer"}&background=2E7D32&color=fff`}
              alt=""
            />
            <div>
              <h4>{user?.name || "Farmer"}</h4>
              <p>Premium User</p>
            </div>
          </div>

          {showProfileMenu && (
            <div style={{
              position: "absolute",
              top: "60px",
              right: "0",
              width: "200px",
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              border: "1px solid #e2e8f0",
              zIndex: 100,
              padding: "8px",
              animation: "fadeIn 0.2s ease-out"
            }}>
              <div style={{ padding: "10px 12px", borderBottom: "1px solid #f1f5f9", marginBottom: "5px" }}>
                <p style={{ margin: "0", fontSize: "14px", fontWeight: "600", color: "#0f172a" }}>{user?.name || "Farmer"}</p>
                <p style={{ margin: "0", fontSize: "12px", color: "#64748b", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{user?.email || "farmer@krishimitra.ai"}</p>
              </div>
              
              <button 
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("open-settings"));
                  setShowProfileMenu(false);
                }}
                style={{
                width: "100%", padding: "10px 12px", background: "transparent", border: "none",
                display: "flex", alignItems: "center", gap: "10px", color: "#334155",
                fontSize: "14px", fontWeight: "500", cursor: "pointer", borderRadius: "8px",
                textAlign: "left", transition: "background 0.2s"
              }} onMouseOver={e => e.currentTarget.style.background = "#f1f5f9"} onMouseOut={e => e.currentTarget.style.background = "transparent"}>
                <FaUserCog /> Profile Settings
              </button>

              <button 
                onClick={handleLogout}
                style={{
                  width: "100%", padding: "10px 12px", background: "transparent", border: "none",
                  display: "flex", alignItems: "center", gap: "10px", color: "#ef4444",
                  fontSize: "14px", fontWeight: "500", cursor: "pointer", borderRadius: "8px",
                  textAlign: "left", transition: "background 0.2s", marginTop: "2px"
                }} onMouseOver={e => e.currentTarget.style.background = "#fef2f2"} onMouseOut={e => e.currentTarget.style.background = "transparent"}>
                <FaSignOutAlt /> Logout
              </button>
            </div>
          )}
        </div>

      </div>

    </header>
  );
}