import { FaArrowRight, FaPlay, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        padding: "120px 20px",
        background: "linear-gradient(135deg,#15803D,#22C55E)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Circles */}

      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "rgba(255,255,255,.08)",
          borderRadius: "50%",
          top: "-100px",
          left: "-120px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          background: "rgba(255,255,255,.06)",
          borderRadius: "50%",
          bottom: "-80px",
          right: "-60px",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          textAlign: "center",
          color: "#fff",
          maxWidth: "900px",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "8px 18px",
            borderRadius: "999px",
            background: "rgba(255,255,255,.15)",
            fontWeight: "600",
            marginBottom: "25px",
          }}
        >
          🚀 Start Your Smart Farming Journey
        </span>

        <h2
          style={{
            fontSize: "54px",
            fontWeight: "800",
            marginBottom: "25px",
            lineHeight: "70px",
          }}
        >
          Empower Your Farming
          <br />
          with Artificial Intelligence
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "32px",
            opacity: ".95",
            fontSize: "18px",
          }}
        >
          Join thousands of farmers using KrishiMitra AI to improve crop
          productivity, detect diseases, monitor weather, and get real-time
          mandi prices.
        </p>

        {/* Buttons */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "45px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => navigate("/app")}
            style={{
              padding: "18px 42px",
              borderRadius: "50px",
              border: "none",
              background: "#fff",
              color: "#15803D",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "17px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Get Started
            <FaArrowRight />
          </button>

<button
  onClick={() =>
    window.open(
      "https://youtube.com/@theUnfilteredManjeet",
      "_blank",
      "noopener,noreferrer"
    )
  }
  style={{
    padding: "18px 42px",
    borderRadius: "50px",
    border: "2px solid white",
    background: "transparent",
    color: "#fff",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "17px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    transition: "0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = "#fff";
    e.currentTarget.style.color = "#16A34A";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.color = "#fff";
  }}
>
  <FaPlay />
  Watch Demo
</button>
        </div>

        {/* Trust */}

        <div
          style={{
            marginTop: "55px",
            display: "flex",
            justifyContent: "center",
            gap: "35px",
            flexWrap: "wrap",
            fontSize: "17px",
          }}
        >
          <span><FaCheckCircle /> Free to Use</span>
          <span><FaCheckCircle /> AI Powered</span>
          <span><FaCheckCircle /> Voice Enabled</span>
          <span><FaCheckCircle /> Secure Platform</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;