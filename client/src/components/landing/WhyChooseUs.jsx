import {
  FaRobot,
  FaCloudSun,
  FaMicrophone,
  FaLeaf,
  FaRupeeSign,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaRobot />,
    title: "AI Crop Recommendation",
  },
  {
    icon: <FaLeaf />,
    title: "Disease Detection",
  },
  {
    icon: <FaCloudSun />,
    title: "Live Weather Forecast",
  },
  {
    icon: <FaRupeeSign />,
    title: "Real-Time Mandi Prices",
  },
  {
    icon: <FaMicrophone />,
    title: "Voice Enabled AI Assistant",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Smart Location Based Advice",
  },
];

const comparison = [
  ["AI Crop Recommendation", false, true],
  ["Weather Forecast", false, true],
  ["Disease Detection", false, true],
  ["Voice Assistant", false, true],
  ["Live Mandi Prices", false, true],
  ["Location Based Smart Advice", false, true],
  ["All-in-One Platform", false, true],
];

const stats = [
  {
    number: "25K+",
    title: "Farmers",
  },
  {
    number: "98%",
    title: "Accuracy",
  },
  {
    number: "24×7",
    title: "AI Support",
  },
  {
    number: "500+",
    title: "Villages",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      style={{
        padding: "120px 0",
        background: "#F8FAFC",
      }}
    >
      <div className="container">

        {/* Heading */}

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
            WHY KRISHI MITRA AI
          </span>

          <h2
            style={{
              fontSize: "50px",
              marginTop: "20px",
              color: "#0F172A",
            }}
          >
            One Platform.
            <br />
            Everything A Farmer Needs.
          </h2>

          <p
            style={{
              maxWidth: "750px",
              margin: "25px auto",
              color: "#64748B",
              lineHeight: "30px",
            }}
          >
            Stop using multiple farming applications.
            KrishiMitra AI combines Artificial Intelligence,
            Weather, Voice Technology, Crop Guidance and Market
            Intelligence into one modern platform.
          </p>
        </div>

        {/* Premium Benefits Grid */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "35px",
            marginBottom: "100px",
          }}
        >
          {benefits.map((item, index) => (

            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: "30px",
                borderRadius: "20px",
                background: "#ffffff",
                border: "1px solid #f1f5f9",
                boxShadow: "0 10px 30px rgba(0,0,0,.03)",
                transition: "all 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(22,163,74,.08)";
                e.currentTarget.style.borderColor = "#BBF7D0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,.03)";
                e.currentTarget.style.borderColor = "#f1f5f9";
              }}
            >
              <div
                style={{
                  minWidth: "65px",
                  height: "65px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #dcfce7, #bbf7d0)",
                  color: "#16A34A",
                  fontSize: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>

              <div>

                <h3
                  style={{
                    margin: 0,
                    fontSize: "20px",
                    color: "#0F172A",
                    fontWeight: "700"
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#64748B",
                    marginTop: "8px",
                    fontSize: "15px"
                  }}
                >
                  Powered by Artificial Intelligence
                </p>

              </div>

            </div>

          ))}
        </div>

        {/* Comparison */}

        <div
          style={{
            background: "#fff",
            borderRadius: "25px",
            padding: "50px",
            boxShadow: "0 20px 50px rgba(0,0,0,.04)",
            marginBottom: "100px",
            border: "1px solid #f1f5f9",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "36px", color: "#0F172A", margin: "0 0 15px 0" }}>
              Why Farmers Prefer KrishiMitra AI
            </h2>
            <p style={{ color: "#64748B", fontSize: "18px", margin: 0 }}>
              See how we stack up against traditional agricultural apps
            </p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                minWidth: "600px",
                borderCollapse: "separate",
                borderSpacing: "0",
              }}
            >
              <thead>
                <tr>
                  <th style={{ padding: "20px 25px", textAlign: "left", fontSize: "18px", color: "#334155", borderBottom: "2px solid #e2e8f0" }}>Features</th>
                  <th style={{ padding: "20px 25px", textAlign: "center", fontSize: "18px", color: "#64748b", borderBottom: "2px solid #e2e8f0", width: "25%" }}>Other Apps</th>
                  <th style={{ padding: "20px 25px", textAlign: "center", fontSize: "18px", color: "#15803D", background: "#f0fdf4", borderTopLeftRadius: "16px", borderTopRightRadius: "16px", borderBottom: "2px solid #bbf7d0", width: "25%" }}>KrishiMitra AI</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => {
                  const isLast = index === comparison.length - 1;
                  return (
                    <tr key={index} style={{ transition: "background 0.2s" }} onMouseEnter={e => e.currentTarget.style.background = "#f8fafc"} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                      <td style={{ padding: "22px 25px", borderBottom: isLast ? "none" : "1px solid #f1f5f9", fontSize: "16px", color: "#1e293b", fontWeight: "500" }}>
                        {row[0]}
                      </td>
                      <td style={{ padding: "22px 25px", textAlign: "center", borderBottom: isLast ? "none" : "1px solid #f1f5f9" }}>
                        {row[1] ? <FaCheckCircle style={{ color: "#10b981", fontSize: "22px" }} /> : <FaTimesCircle style={{ color: "#cbd5e1", fontSize: "22px" }} />}
                      </td>
                      <td style={{ padding: "22px 25px", textAlign: "center", background: "#f0fdf4", borderBottom: isLast ? "none" : "1px solid #dcfce7", borderBottomLeftRadius: isLast ? "16px" : "0", borderBottomRightRadius: isLast ? "16px" : "0" }}>
                        {row[2] ? <FaCheckCircle style={{ color: "#16a34a", fontSize: "24px", filter: "drop-shadow(0 2px 4px rgba(22,163,74,0.2))" }} /> : <FaTimesCircle style={{ color: "#ef4444", fontSize: "24px" }} />}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trust */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "30px",
          }}
        >
          {stats.map((item, index) => (

            <div
              key={index}
              style={{
                background: "#fff",
                padding: "35px",
                borderRadius: "22px",
                textAlign: "center",
                boxShadow: "0 15px 35px rgba(0,0,0,.05)",
              }}
            >
              <FaShieldAlt
                style={{
                  fontSize: "45px",
                  color: "#16A34A",
                  marginBottom: "20px",
                }}
              />

              <h2
                style={{
                  fontSize: "48px",
                  color: "#15803D",
                }}
              >
                {item.number}
              </h2>

              <p>{item.title}</p>

            </div>

          ))}
        </div>

        {/* CTA */}

        <div
          style={{
            marginTop: "100px",
            borderRadius: "30px",
            padding: "70px",
            textAlign: "center",
            background:
              "linear-gradient(135deg,#16A34A,#22C55E)",
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "20px",
            }}
          >
            Ready to Transform Your Farming?
          </h2>

          <p
            style={{
              maxWidth: "650px",
              margin: "auto",
              opacity: ".9",
            }}
          >
            Join thousands of farmers already improving their
            productivity with KrishiMitra AI.
          </p>

          <button
            style={{
              marginTop: "35px",
              padding: "18px 45px",
              borderRadius: "50px",
              border: "none",
              background: "#fff",
              color: "#16A34A",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            Get Started →
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;