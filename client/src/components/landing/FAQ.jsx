import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "What is KrishiMitra AI?",
    answer:
      "KrishiMitra AI is an AI-powered agriculture assistant that helps farmers with crop recommendations, weather forecasting, disease detection, mandi prices and voice-based support.",
  },
  {
    question: "Is KrishiMitra AI free to use?",
    answer:
      "Yes. The basic features are completely free for farmers. Premium AI features can be introduced in future versions.",
  },
  {
    question: "Which languages are supported?",
    answer:
      "Currently English and Hindi are supported. Regional languages can easily be integrated.",
  },
  {
    question: "Can I use voice commands?",
    answer:
      "Yes. Farmers can ask questions using voice, making the platform accessible for everyone.",
  },
  {
    question: "Does it provide live weather updates?",
    answer:
      "Yes. KrishiMitra AI fetches live weather information and forecasts using weather APIs.",
  },
  {
    question: "Can it detect crop diseases?",
    answer:
      "Yes. The AI analyzes crop symptoms and provides possible disease predictions along with preventive measures.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      style={{
        padding: "120px 0",
        background: "#F8FAFC",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "900px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
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
            FAQ
          </span>

          <h2
            style={{
              fontSize: "48px",
              marginTop: "20px",
              color: "#0F172A",
            }}
          >
            Frequently Asked Questions
          </h2>

          <p
            style={{
              color: "#64748B",
              marginTop: "20px",
            }}
          >
            Everything you need to know about KrishiMitra AI.
          </p>
        </div>

        {faqData.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "18px",
              marginBottom: "20px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0,0,0,.06)",
            }}
          >
            <button
              onClick={() =>
                setActive(active === index ? -1 : index)
              }
              style={{
                width: "100%",
                border: "none",
                background: "#fff",
                cursor: "pointer",
                padding: "25px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              {item.question}

              <FaChevronDown
                style={{
                  transform:
                    active === index
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  transition: ".3s",
                }}
              />
            </button>

            {active === index && (
              <div
                style={{
                  padding: "0 25px 25px",
                  color: "#64748B",
                  lineHeight: "30px",
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;