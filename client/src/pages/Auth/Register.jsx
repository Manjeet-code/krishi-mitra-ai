import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {
  FaSeedling,
  FaCloudSun,
  FaMicrophone,
  FaBug,
  FaRupeeSign,
  FaChartLine,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaLeaf,
} from "react-icons/fa";

const features = [
  {
    icon: <FaSeedling />,
    title: "AI Crop Recommendation",
    description: "Intelligent crop suggestions based on your soil.",
  },
  {
    icon: <FaCloudSun />,
    title: "Live Weather",
    description: "Real-time weather & rainfall forecasting.",
  },
  {
    icon: <FaMicrophone />,
    title: "Voice Assistant",
    description: "Talk naturally with AI in your language.",
  },
  {
    icon: <FaBug />,
    title: "Disease Detection",
    description: "Identify crop diseases instantly.",
  },
  {
    icon: <FaRupeeSign />,
    title: "Live Mandi Prices",
    description: "Know the latest market prices nearby.",
  },
  {
    icon: <FaChartLine />,
    title: "Farm Analytics",
    description: "Track performance with smart insights.",
  },
];

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(formData);
      navigate("/app");
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      background: "#f8fafc",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* ───── Left: Feature Showcase (Premium Boxes) ───── */}
      <div className="auth-left" style={{
        flex: 1.2,
        background: "#f0fdf4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "60px",
        position: "relative",
        borderRight: "1px solid #e2e8f0",
      }}>
        <div style={{ maxWidth: "650px", margin: "0 auto" }}>
          
          <div style={{ marginBottom: "40px" }}>
            <span style={{
              background: "#dcfce7", color: "#15803d", padding: "8px 18px",
              borderRadius: "999px", fontWeight: "600", fontSize: "14px",
            }}>
              START YOUR JOURNEY
            </span>
            <h2 style={{
              fontSize: "40px", marginTop: "20px", marginBottom: "15px", color: "#0f172a", fontWeight: "800",
            }}>
              Join KrishiMitra AI
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {features.map((f, i) => (
              <div key={i} style={{
                background: "#ffffff",
                padding: "25px",
                borderRadius: "20px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(22,163,74,0.12)";
                e.currentTarget.style.borderColor = "#bbf7d0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.03)";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
              >
                <div style={{
                  width: "45px", height: "45px", borderRadius: "14px",
                  background: "linear-gradient(135deg,#22c55e,#16a34a)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontSize: "20px", marginBottom: "16px",
                }}>
                  {f.icon}
                </div>
                <h4 style={{ color: "#0f172a", fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>
                  {f.title}
                </h4>
                <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.5", margin: 0 }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div style={{ marginTop: "40px", display: "flex", gap: "25px", color: "#15803D", fontWeight: "600", fontSize: "15px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><FaCheckCircle /> 100% Free</span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><FaCheckCircle /> AI Powered</span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><FaCheckCircle /> Secure</span>
          </div>
        </div>
      </div>

      {/* ───── Right: Premium SaaS Register Form Box ───── */}
      <div className="auth-right" style={{
        flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
        padding: "40px", background: "#f8fafc",
      }}>
        <div style={{
          width: "100%", maxWidth: "460px",
          background: "#ffffff",
          padding: "50px 45px",
          borderRadius: "28px",
          border: "1px solid #e2e8f0",
          boxShadow: "0 25px 60px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 35px 70px rgba(22,163,74,0.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 25px 60px rgba(0,0,0,0.08)";
        }}
        >

          {/* Proper Unified Logo */}
          <div onClick={() => navigate("/")} style={{ 
            display: "flex", alignItems: "center", gap: "12px", 
            marginBottom: "35px", cursor: "pointer" 
          }}>
            <div style={{
              width: "42px", height: "42px", borderRadius: "12px",
              background: "linear-gradient(135deg,#22c55e,#16a34a)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: "20px", boxShadow: "0 10px 20px rgba(22,163,74,0.3)"
            }}>
              <FaLeaf />
            </div>
            <span style={{ 
              fontSize: "26px", fontWeight: "800", color: "#15803d", letterSpacing: "-0.5px" 
            }}>
              KrishiMitra AI
            </span>
          </div>

          <div style={{ marginBottom: "35px" }}>
            <h2 style={{ color: "#0f172a", fontSize: "30px", fontWeight: "800", marginBottom: "12px", letterSpacing: "-0.5px" }}>
              Create an account
            </h2>
            <p style={{ color: "#64748b", fontSize: "16px", lineHeight: "1.6" }}>
              Start your smart farming journey today.
            </p>
          </div>

          {error && (
            <div style={{
              background: "#fef2f2", color: "#dc2626", padding: "16px", borderRadius: "14px",
              marginBottom: "25px", fontSize: "14px", display: "flex", alignItems: "center", gap: "10px",
              border: "1px solid #fecaca", fontWeight: "500"
            }}>
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={onSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "10px", color: "#0f172a", fontWeight: "600", fontSize: "15px" }}>
                Full Name
              </label>
              <input type="text" name="name" value={name} onChange={onChange} required
                placeholder="Enter your full name"
                style={{
                  width: "100%", padding: "16px 20px", borderRadius: "14px",
                  border: "1.5px solid #e2e8f0", outline: "none", fontSize: "16px",
                  color: "#0f172a", transition: "all .3s", boxSizing: "border-box",
                  background: "#f8fafc",
                }}
                onFocus={(e) => { e.target.style.borderColor = "#22c55e"; e.target.style.boxShadow = "0 0 0 4px rgba(34,197,94,.15)"; e.target.style.background = "#fff"; }}
                onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; e.target.style.background = "#f8fafc"; }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "10px", color: "#0f172a", fontWeight: "600", fontSize: "15px" }}>
                Email Address
              </label>
              <input type="email" name="email" value={email} onChange={onChange} required
                placeholder="you@example.com"
                style={{
                  width: "100%", padding: "16px 20px", borderRadius: "14px",
                  border: "1.5px solid #e2e8f0", outline: "none", fontSize: "16px",
                  color: "#0f172a", transition: "all .3s", boxSizing: "border-box",
                  background: "#f8fafc",
                }}
                onFocus={(e) => { e.target.style.borderColor = "#22c55e"; e.target.style.boxShadow = "0 0 0 4px rgba(34,197,94,.15)"; e.target.style.background = "#fff"; }}
                onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; e.target.style.background = "#f8fafc"; }}
              />
            </div>

            <div style={{ marginBottom: "35px" }}>
              <label style={{ display: "block", marginBottom: "10px", color: "#0f172a", fontWeight: "600", fontSize: "15px" }}>
                Password
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"} name="password"
                  value={password} onChange={onChange} required minLength="6"
                  placeholder="Minimum 6 characters"
                  style={{
                    width: "100%", padding: "16px 50px 16px 20px", borderRadius: "14px",
                    border: "1.5px solid #e2e8f0", outline: "none", fontSize: "16px",
                    color: "#0f172a", transition: "all .3s", boxSizing: "border-box",
                    background: "#f8fafc",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "#22c55e"; e.target.style.boxShadow = "0 0 0 4px rgba(34,197,94,.15)"; e.target.style.background = "#fff"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; e.target.style.background = "#f8fafc"; }}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute", right: "18px", top: "50%", transform: "translateY(-50%)",
                    background: "none", border: "none", color: "#64748b", cursor: "pointer", fontSize: "20px",
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button type="submit" disabled={loading}
              style={{
                width: "100%", padding: "18px",
                background: loading ? "#86efac" : "linear-gradient(135deg,#22c55e,#16a34a)",
                color: "#fff", border: "none", borderRadius: "14px", fontSize: "17px", fontWeight: "700",
                cursor: loading ? "not-allowed" : "pointer", transition: "all .3s",
                boxShadow: "0 10px 25px rgba(22,163,74,.3)",
              }}
              onMouseOver={(e) => { if (!loading) { e.target.style.background = "#15803d"; e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 15px 35px rgba(22,163,74,.4)"; } }}
              onMouseOut={(e) => { e.target.style.background = "#16a34a"; e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 10px 25px rgba(22,163,74,.3)"; }}
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: "35px", color: "#64748b", fontSize: "16px" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#16a34a", textDecoration: "none", fontWeight: "700" }}
              onMouseOver={(e) => e.target.style.textDecoration = "underline"}
              onMouseOut={(e) => e.target.style.textDecoration = "none"}
            >Sign in</Link>
          </p>

          <p style={{ textAlign: "center", marginTop: "15px" }}>
            <Link to="/" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "15px", fontWeight: "500" }}
              onMouseOver={(e) => e.target.style.color = "#64748b"}
              onMouseOut={(e) => e.target.style.color = "#94a3b8"}
            >← Back to homepage</Link>
          </p>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .auth-left { display: none !important; }
          .auth-right { flex: 1 !important; padding: 20px; }
        }
      `}</style>
    </div>
  );
};

export default Register;
