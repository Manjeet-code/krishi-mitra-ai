import { FaUsers, FaLeaf, FaCloudSun, FaRobot } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    number: "25K+",
    title: "Active Farmers",
    desc: "Farmers using Krishi Mitra AI daily",
  },
  {
    icon: <FaLeaf />,
    number: "150+",
    title: "Crop Recommendations",
    desc: "AI powered crop suggestions",
  },
  {
    icon: <FaCloudSun />,
    number: "500+",
    title: "Weather Updates",
    desc: "Real-time weather predictions",
  },
  {
    icon: <FaRobot />,
    number: "24×7",
    title: "AI Assistant",
    desc: "Always available for farmers",
  },
];

const Stats = () => {
  return (
    <section
      id="stats"
      style={{
        padding: "110px 0",
        background:
          "linear-gradient(180deg,#F8FAFC 0%,#ECFDF5 100%)",
      }}
    >
      <div className="container">

        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
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
            OUR IMPACT
          </span>

          <h2
            style={{
              fontSize: "48px",
              marginTop: "25px",
              marginBottom: "15px",
              color: "#0F172A",
            }}
          >
            Empowering Farmers Through AI
          </h2>

          <p
            style={{
              color: "#64748B",
              maxWidth: "700px",
              margin: "auto",
              fontSize: "18px",
              lineHeight: "32px",
            }}
          >
            Krishi Mitra AI is transforming agriculture by providing
            intelligent recommendations, live weather updates and
            AI-powered assistance to thousands of farmers.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "35px",
          }}
        >
          {stats.map((item, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,.85)",
                backdropFilter: "blur(18px)",
                borderRadius: "24px",
                padding: "45px 30px",
                textAlign: "center",
                border: "1px solid rgba(255,255,255,.5)",
                boxShadow: "0 20px 60px rgba(15,23,42,.08)",
                transition: ".35s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-12px)";
                e.currentTarget.style.boxShadow =
                  "0 30px 70px rgba(22,163,74,.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(15,23,42,.08)";
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "auto",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    "linear-gradient(135deg,#22C55E,#16A34A)",
                  color: "#fff",
                  fontSize: "34px",
                  marginBottom: "28px",
                }}
              >
                {item.icon}
              </div>

              <h2
                style={{
                  fontSize: "46px",
                  color: "#15803D",
                  marginBottom: "12px",
                  fontWeight: "800",
                }}
              >
                {item.number}
              </h2>

              <h3
                style={{
                  color: "#0F172A",
                  marginBottom: "15px",
                  fontSize: "22px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#64748B",
                  lineHeight: "28px",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;