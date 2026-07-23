import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FaLeaf } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { forgotPassword } = useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    try {
      await forgotPassword(email);
      setMessage("Password reset link has been sent to your email!");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to send reset link.");
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
      background: "#f0fdf4", // Soft green background matching the left side of login
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

        <div style={{ marginBottom: "35px", textAlign: "center" }}>
          <h2 style={{ color: "#0f172a", fontSize: "28px", fontWeight: "800", marginBottom: "12px", letterSpacing: "-0.5px" }}>
            Forgot Password?
          </h2>
          <p style={{ color: "#64748b", fontSize: "16px", lineHeight: "1.6" }}>
            Enter your email address and we'll send you a link to reset your password.
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
          <div style={{ marginBottom: "30px" }}>
            <label style={{ display: "block", marginBottom: "10px", color: "#0f172a", fontWeight: "600", fontSize: "15px" }}>
              Email Address
            </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
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
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "35px", color: "#64748b", fontSize: "16px" }}>
          Remembered your password?{" "}
          <Link to="/login" style={{ color: "#16a34a", textDecoration: "none", fontWeight: "700" }}
            onMouseOver={(e) => e.target.style.textDecoration = "underline"}
            onMouseOut={(e) => e.target.style.textDecoration = "none"}
          >Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
