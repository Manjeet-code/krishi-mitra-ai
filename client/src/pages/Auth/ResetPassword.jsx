import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FaLeaf, FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { token } = useParams();
  const navigate = useNavigate();
  const { resetPassword } = useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }
    
    setLoading(true);
    setError("");
    setMessage("");
    try {
      await resetPassword(token, password);
      setMessage("Password reset successfully! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to reset password. The link might be expired.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f0fdf4", // Soft green background
      fontFamily: "'Inter', sans-serif",
      padding: "20px",
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
        <div style={{ 
          display: "flex", alignItems: "center", gap: "12px", 
          marginBottom: "35px", cursor: "pointer", justifyContent: "center" 
        }} onClick={() => navigate("/")}>
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

        <div style={{ marginBottom: "35px", textAlign: "center" }}>
          <h2 style={{ color: "#0f172a", fontSize: "28px", fontWeight: "800", marginBottom: "12px", letterSpacing: "-0.5px" }}>
            Reset Password
          </h2>
          <p style={{ color: "#64748b", fontSize: "16px", lineHeight: "1.6" }}>
            Please enter your new password below.
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

        {message && (
          <div style={{
            background: "#f0fdf4", color: "#15803d", padding: "16px", borderRadius: "14px",
            marginBottom: "25px", fontSize: "14px", display: "flex", alignItems: "center", gap: "10px",
            border: "1px solid #bbf7d0", fontWeight: "500"
          }}>
            ✅ {message}
          </div>
        )}

        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "10px", color: "#0f172a", fontWeight: "600", fontSize: "15px" }}>
              New Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"} 
                value={password} onChange={(e) => setPassword(e.target.value)} 
                required minLength="6"
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

          <div style={{ marginBottom: "35px" }}>
            <label style={{ display: "block", marginBottom: "10px", color: "#0f172a", fontWeight: "600", fontSize: "15px" }}>
              Confirm New Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"} 
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} 
                required minLength="6"
                placeholder="Re-enter your password"
                style={{
                  width: "100%", padding: "16px 50px 16px 20px", borderRadius: "14px",
                  border: "1.5px solid #e2e8f0", outline: "none", fontSize: "16px",
                  color: "#0f172a", transition: "all .3s", boxSizing: "border-box",
                  background: "#f8fafc",
                }}
                onFocus={(e) => { e.target.style.borderColor = "#22c55e"; e.target.style.boxShadow = "0 0 0 4px rgba(34,197,94,.15)"; e.target.style.background = "#fff"; }}
                onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; e.target.style.background = "#f8fafc"; }}
              />
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
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default ResetPassword;
