import { useState } from "react";
import { FaTimes, FaUser, FaBell, FaPalette, FaGlobe, FaShieldAlt } from "react-icons/fa";

export default function SettingsModal({ onClose }) {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(15, 23, 42, 0.6)",
      backdropFilter: "blur(4px)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      animation: "fadeIn 0.2s ease-out"
    }}>
      <div style={{
        background: "#fff",
        width: "100%",
        maxWidth: "800px",
        borderRadius: "24px",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        maxHeight: "85vh",
        animation: "slideUp 0.3s ease-out"
      }}>
        {/* Header */}
        <div style={{
          padding: "20px 30px",
          borderBottom: "1px solid #e2e8f0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#f8fafc"
        }}>
          <div>
            <h2 style={{ margin: 0, color: "#0f172a", fontSize: "22px", fontWeight: "700" }}>Settings</h2>
            <p style={{ margin: "4px 0 0", color: "#64748b", fontSize: "14px" }}>Manage your account preferences</p>
          </div>
          <button 
            onClick={onClose}
            style={{
              width: "36px", height: "36px", borderRadius: "50%",
              background: "#fff", border: "1px solid #e2e8f0",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#64748b", transition: "all 0.2s"
            }}
            onMouseOver={e => { e.currentTarget.style.background = "#fee2e2"; e.currentTarget.style.color = "#ef4444"; e.currentTarget.style.borderColor = "#fca5a5"; }}
            onMouseOut={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#64748b"; e.currentTarget.style.borderColor = "#e2e8f0"; }}
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
          {/* Sidebar */}
          <div style={{
            width: "240px",
            background: "#f8fafc",
            borderRight: "1px solid #e2e8f0",
            padding: "20px 15px",
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}>
            {[
              { id: "profile", label: "Profile", icon: <FaUser /> },
              { id: "notifications", label: "Notifications", icon: <FaBell /> },
              { id: "appearance", label: "Appearance", icon: <FaPalette /> },
              { id: "language", label: "Language", icon: <FaGlobe /> },
              { id: "privacy", label: "Privacy & Security", icon: <FaShieldAlt /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  padding: "12px 16px", borderRadius: "12px", border: "none",
                  background: activeTab === tab.id ? "#22c55e" : "transparent",
                  color: activeTab === tab.id ? "#fff" : "#475569",
                  fontSize: "15px", fontWeight: "600", cursor: "pointer",
                  transition: "all 0.2s", textAlign: "left"
                }}
                onMouseOver={e => { if (activeTab !== tab.id) e.currentTarget.style.background = "#e2e8f0"; }}
                onMouseOut={e => { if (activeTab !== tab.id) e.currentTarget.style.background = "transparent"; }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ flex: 1, padding: "30px", overflowY: "auto", background: "#fff" }}>
            {activeTab === "profile" && (
              <div style={{ animation: "fadeIn 0.3s" }}>
                <h3 style={{ margin: "0 0 20px", color: "#0f172a", fontSize: "18px" }}>Profile Information</h3>
                <div style={{ display: "grid", gap: "20px" }}>
                  <div>
                    <label style={{ display: "block", marginBottom: "8px", color: "#475569", fontSize: "14px", fontWeight: "500" }}>Full Name</label>
                    <input type="text" placeholder="Update your name" style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid #cbd5e1", outline: "none", fontSize: "15px" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", marginBottom: "8px", color: "#475569", fontSize: "14px", fontWeight: "500" }}>Email Address</label>
                    <input type="email" placeholder="Update your email" style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid #cbd5e1", outline: "none", fontSize: "15px" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", marginBottom: "8px", color: "#475569", fontSize: "14px", fontWeight: "500" }}>Phone Number</label>
                    <input type="tel" placeholder="+91" style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid #cbd5e1", outline: "none", fontSize: "15px" }} />
                  </div>
                  <button style={{
                    marginTop: "10px", padding: "14px", background: "#16a34a", color: "#fff",
                    border: "none", borderRadius: "10px", fontSize: "15px", fontWeight: "600", cursor: "pointer",
                    transition: "background 0.2s"
                  }} onMouseOver={e => e.currentTarget.style.background = "#15803d"} onMouseOut={e => e.currentTarget.style.background = "#16a34a"}>
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab !== "profile" && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", color: "#64748b", animation: "fadeIn 0.3s" }}>
                <span style={{ fontSize: "40px", marginBottom: "15px" }}>🚧</span>
                <h3 style={{ margin: "0 0 10px", color: "#334155" }}>Coming Soon</h3>
                <p style={{ margin: 0, textAlign: "center", maxWidth: "300px" }}>
                  The {activeTab} settings panel is currently under development. Check back later!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
