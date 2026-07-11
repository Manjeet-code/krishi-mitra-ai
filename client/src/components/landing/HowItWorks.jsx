import {
  FaComments,
  FaBrain,
  FaCloudSun,
  FaSeedling,
  FaChartLine,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaComments />,
    title: "Ask Your Question",
    desc: "Type or speak your farming query in your preferred language.",
  },
  {
    icon: <FaBrain />,
    title: "AI Understands",
    desc: "Krishi Mitra AI analyzes your crop, soil and farming requirements.",
  },
  {
    icon: <FaCloudSun />,
    title: "Collects Live Data",
    desc: "Weather forecasts, mandi prices and farming insights are fetched instantly.",
  },
  {
    icon: <FaSeedling />,
    title: "Smart Recommendation",
    desc: "Receive accurate crop suggestions, disease diagnosis and farming guidance.",
  },
  {
    icon: <FaChartLine />,
    title: "Improve Productivity",
    desc: "Make better farming decisions to increase yield and reduce losses.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "120px 0",
        background: "#F8FAFC",
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
            HOW IT WORKS
          </span>

          <h2
            style={{
              fontSize: "48px",
              marginTop: "25px",
              color: "#0F172A",
            }}
          >
            Farming Made Simple in 5 Steps
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "20px auto",
              color: "#64748B",
              lineHeight: "30px",
              fontSize: "18px",
            }}
          >
            Krishi Mitra AI combines Artificial Intelligence, weather forecasting,
            and agricultural knowledge to provide instant guidance.
          </p>
        </div>

        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            position: "relative",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "30px",
                marginBottom: "50px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  minWidth: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#22C55E,#15803D)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  fontSize: "28px",
                  boxShadow: "0 15px 40px rgba(22,163,74,.25)",
                }}
              >
                {step.icon}
              </div>

              <div
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "20px",
                  flex: 1,
                  boxShadow: "0 15px 35px rgba(0,0,0,.06)",
                }}
              >
                <span
                  style={{
                    color: "#16A34A",
                    fontWeight: "700",
                  }}
                >
                  STEP {index + 1}
                </span>

                <h3
                  style={{
                    marginTop: "10px",
                    marginBottom: "15px",
                    color: "#0F172A",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    color: "#64748B",
                    lineHeight: "28px",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;