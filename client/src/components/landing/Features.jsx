import {
  FaSeedling,
  FaCloudSun,
  FaMicrophone,
  FaBug,
  FaChartLine,
  FaRupeeSign,
  FaArrowRight,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <FaSeedling />,
    title: "AI Crop Recommendation",
    description:
      "Get intelligent crop suggestions based on soil type, season and climate.",
      target: "crop",
     
  },
  {
    icon: <FaCloudSun />,
    title: "Live Weather",
    description:
      "Real-time weather forecasting with rainfall and temperature prediction.",
      target: "weather",
  },
  {
    icon: <FaMicrophone />,
    title: "Voice Assistant",
    description:
      "Talk naturally with AI in your preferred language using voice commands.",
      target: "chat",
  },
  {
    icon: <FaBug />,
    title: "Disease Detection",
    description:
      "Identify crop diseases instantly with AI-powered image analysis.",
      target: "disease",
  },
  {
    icon: <FaRupeeSign />,
    title: "Live Mandi Prices",
    description:
      "Know the latest market prices from nearby mandis before selling.",
      target: "market",
  },
  {
    icon: <FaChartLine />,
    title: "Farm Analytics",
    description:
      "Track farming performance with intelligent insights and reports.",
      target: "analytics",
  },
];

const Features = () => {
  const navigate = useNavigate();
  return (
    <section
      id="features"
      style={{
        padding: "120px 0",
        background: "#fff",
      }}
    >
      <div className="container">

        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <span
            style={{
              background: "#DCFCE7",
              color: "#15803D",
              padding: "8px 18px",
              borderRadius: "999px",
              fontWeight: "600",
            }}
          >
            FEATURES
          </span>

          <h2
            style={{
              fontSize: "50px",
              marginTop: "25px",
              marginBottom: "20px",
              color: "#0F172A",
            }}
          >
            Everything A Farmer Needs
          </h2>

          <p
            style={{
              color: "#64748B",
              maxWidth: "720px",
              margin: "auto",
              fontSize: "18px",
              lineHeight: "32px",
            }}
          >
            Krishi Mitra AI combines Artificial Intelligence, Weather,
            Voice Technology and Agriculture into one powerful platform.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))",
            gap: "35px",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                padding: "40px",
                borderRadius: "24px",
                background: "#fff",
                border: "1px solid #E2E8F0",
                transition: ".35s",
                cursor: "pointer",
                boxShadow: "0 15px 40px rgba(0,0,0,.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-12px)";
                e.currentTarget.style.boxShadow =
                  "0 30px 60px rgba(22,163,74,.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0,0,0,.05)";
              }}
            >
              <div
                style={{
                  width: "75px",
                  height: "75px",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(135deg,#22C55E,#16A34A)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  fontSize: "30px",
                  marginBottom: "30px",
                }}
              >
                {feature.icon}
              </div>

              <h3
                style={{
                  fontSize: "24px",
                  marginBottom: "18px",
                  color: "#0F172A",
                }}
              >
                {feature.title}
              </h3>

              <p
                style={{
                  color: "#64748B",
                  lineHeight: "30px",
                  marginBottom: "30px",
                }}
              >
                {feature.description}
              </p>

<div
  onClick={(e) => {
    e.stopPropagation();
    navigate(`/app#${feature.target}`);
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.gap = "16px";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.gap = "10px";
  }}
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    color: "#16A34A",
    fontWeight: "700",
    cursor: "pointer",
    transition: "0.3s",
  }}
>
  Learn More
  <FaArrowRight />
</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;