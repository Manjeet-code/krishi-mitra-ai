import {
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Bihar",
    image: "👨‍🌾",
    review:
      "KrishiMitra AI helped me choose the right crop according to the season. My farming decisions are now much more confident.",
  },
  {
    name: "Suresh Patel",
    location: "Madhya Pradesh",
    image: "🧑‍🌾",
    review:
      "The live mandi prices and weather forecast save me a lot of time. The voice assistant is very easy to use.",
  },
  {
    name: "Anita Devi",
    location: "Uttar Pradesh",
    image: "👩‍🌾",
    review:
      "Disease detection feature helped me identify crop problems early. It feels like having an agriculture expert in my phone.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      style={{
        padding: "120px 0",
        background:
          "linear-gradient(180deg,#ffffff,#F8FAFC)",
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
            TESTIMONIALS
          </span>

          <h2
            style={{
              fontSize: "48px",
              marginTop: "20px",
              color: "#0F172A",
            }}
          >
            Loved by Farmers
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "20px auto",
              color: "#64748B",
              lineHeight: "30px",
            }}
          >
            Thousands of farmers trust KrishiMitra AI to make
            smarter farming decisions every day.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(330px,1fr))",
            gap: "35px",
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,.85)",
                backdropFilter: "blur(16px)",
                borderRadius: "25px",
                padding: "35px",
                boxShadow:
                  "0 20px 50px rgba(0,0,0,.08)",
                transition: ".3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >
              <FaQuoteLeft
                style={{
                  fontSize: "32px",
                  color: "#16A34A",
                  marginBottom: "25px",
                }}
              />

              <p
                style={{
                  color: "#475569",
                  lineHeight: "30px",
                  marginBottom: "35px",
                }}
              >
                {item.review}
              </p>

              <div
                style={{
                  display: "flex",
                  marginBottom: "20px",
                  color: "#FACC15",
                  gap: "4px",
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "#DCFCE7",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "34px",
                  }}
                >
                  {item.image}
                </div>

                <div>
                  <h3
                    style={{
                      margin: 0,
                      color: "#0F172A",
                    }}
                  >
                    {item.name}
                  </h3>

                  <p
                    style={{
                      marginTop: "5px",
                      color: "#64748B",
                    }}
                  >
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;