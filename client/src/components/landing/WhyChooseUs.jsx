import {
  FaRobot,
  FaCloudSun,
  FaMicrophone,
  FaLeaf,
  FaRupeeSign,
  FaShieldAlt,
  FaChartLine,
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
    icon: <FaChartLine />,
    title: "Smart Farming Analytics",
  },
];

const comparison = [
  ["AI Crop Recommendation", "❌", "✅"],
  ["Weather Forecast", "❌", "✅"],
  ["Disease Detection", "❌", "✅"],
  ["Voice Assistant", "❌", "✅"],
  ["Live Mandi Prices", "❌", "✅"],
  ["All-in-One Platform", "❌", "✅"],
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

        {/* Illustration + Benefits */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "70px",
            alignItems: "center",
            marginBottom: "100px",
          }}
        >
          {/* Left */}

          <div
            style={{
              height: "500px",
              borderRadius: "30px",
              background:
                "linear-gradient(135deg,#DCFCE7,#BBF7D0,#86EFAC)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "150px",
              boxShadow: "0 30px 70px rgba(22,163,74,.18)",
            }}
          >
            🌾
          </div>

          {/* Right */}

          <div>

            {benefits.map((item, index) => (

              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  marginBottom: "25px",
                  padding: "22px",
                  borderRadius: "18px",
                  background: "#fff",
                  boxShadow: "0 15px 35px rgba(0,0,0,.06)",
                }}
              >
                <div
                  style={{
                    color: "#16A34A",
                    fontSize: "26px",
                  }}
                >
                  {item.icon}
                </div>

                <div>

                  <h3
                    style={{
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "#64748B",
                      marginTop: "5px",
                    }}
                  >
                    Powered by Artificial Intelligence
                  </p>

                </div>

              </div>

            ))}

          </div>
        </div>

        {/* Comparison */}

        <div
          style={{
            background: "#fff",
            borderRadius: "25px",
            padding: "50px",
            boxShadow: "0 25px 60px rgba(0,0,0,.08)",
            marginBottom: "80px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Why Farmers Prefer KrishiMitra AI
          </h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#F1F5F9",
                }}
              >
                <th style={{ padding: "18px" }}>Feature</th>
                <th>Others</th>
                <th>KrishiMitra AI</th>
              </tr>
            </thead>

            <tbody>

              {comparison.map((row, index) => (

                <tr key={index}>

                  <td
                    style={{
                      padding: "18px",
                      borderBottom: "1px solid #E2E8F0",
                    }}
                  >
                    {row[0]}
                  </td>

                  <td
                    style={{
                      textAlign: "center",
                    }}
                  >
                    {row[1]}
                  </td>

                  <td
                    style={{
                      textAlign: "center",
                      color: "#16A34A",
                      fontWeight: "700",
                    }}
                  >
                    {row[2]}
                  </td>

                </tr>

              ))}

            </tbody>
          </table>
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