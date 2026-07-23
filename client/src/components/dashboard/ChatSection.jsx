import "./ChatSection.css";
import ReactMarkdown from "react-markdown";
import { useEffect, useRef } from "react";
import Logo from "../common/Logo";

import {
  FaPaperPlane,
  FaMicrophone,
  FaRobot,
  FaUserCircle,
  FaCopy,
  FaVolumeUp,
  FaTrash,
} from "react-icons/fa";

export default function ChatSection({
  question,
  setQuestion,
  messages,
  loading,
  askQuestion,
  listening,
  startListening,
}) {
  const chatRef = useRef(null);
const suggestionCategories = [
  {
    title: "🌾 Crop",
    questions: [
      "Best fertilizer for wheat",
      "How to increase paddy yield?",
      "Best seed for maize",
    ],
  },

  {
    title: "🐛 Disease",
    questions: [
      "Tomato leaf curl disease",
      "Rice blast treatment",
      "Yellow leaves in wheat",
    ],
  },

  {
    title: "💧 Irrigation",
    questions: [
      "Smart irrigation methods",
      "Drip irrigation benefits",
      "How often should I water tomatoes?",
    ],
  },

  {
    title: "🌦 Weather",
    questions: [
      "Will it rain tomorrow?",
      "Weather effect on crops",
      "Best crops for monsoon",
    ],
  },
];
const speakMessage = (text) => {
  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "hi-IN";

  speech.rate = 0.95;

  window.speechSynthesis.speak(speech);
};

const copyMessage = async (text) => {
  await navigator.clipboard.writeText(text);
};

const askSuggestion = (text) => {
  setQuestion(text);

  setTimeout(() => {
    askQuestion(text);
  }, 100);
};

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, loading]);

  return (
    <section id="chat" className="chat-section">

      {/* Header */}

<div className="chat-header">

  <div className="header-left">
    <div className="ai-logo">
      <Logo />
    </div>
    <div>
      <h2>KrishiMitra AI</h2>
      <p>Powered by Artificial Intelligence</p>

    </div>

  </div>

  <div className="header-right">

    <div className="chat-status">

      <span></span>

      Online

    </div>

    <button
      className="clear-btn"
      onClick={() => window.location.reload()}
    >
      <FaTrash />
    </button>

  </div>

</div>

      {/* Messages */}

      <div
        className="chat-body"
        ref={chatRef}
      >

        {messages.length === 0 && (

          <div className="chat-empty">

<FaRobot size={60} />

<h3>Welcome to KrishiMitra AI</h3>

<p>
  Ask anything about crops, fertilizers,
  diseases, irrigation and weather.
</p>

<div className="suggestion-wrapper">

  {suggestionCategories.map((category) => (

    <div
      key={category.title}
      className="suggestion-category"
    >

      <h4>{category.title}</h4>

      <div className="chips">

        {category.questions.map((item) => (

          <button
            key={item}
            className="chip"
            onClick={() => askSuggestion(item)}
          >

            {item}

          </button>

        ))}

      </div>

    </div>

  ))}

</div>
</div>

        )}

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`message-row ${
              msg.type === "user"
                ? "user"
                : "ai"
            }`}
          >

            <div className="avatar">

              {msg.type === "user" ? (

                <FaUserCircle />

              ) : (

                <FaRobot />

              )}

            </div>

<div className={`bubble ${msg.type}`}>

  {msg.type === "ai" && (

    <div className="ai-badge">

      🌾 Krishi AI

    </div>

  )}

  <ReactMarkdown>

    {msg.text}

  </ReactMarkdown>

  {msg.type === "ai" && (

    <div className="message-actions">

      <button
        onClick={() => copyMessage(msg.text)}
      >
        <FaCopy />
      </button>

      <button
        onClick={() => speakMessage(msg.text)}
      >
        <FaVolumeUp />
      </button>

    </div>

  )}

</div>

          </div>

        ))}

        {loading && (

          <div className="message-row ai">

            <div className="avatar">

              <FaRobot />

            </div>

            <div className="typing">

              <span></span>
              <span></span>
              <span></span>

            </div>

          </div>

        )}

      </div>

  {/* ==========================
      PREMIUM INPUT
========================== */}

<div className="chat-input-wrapper">

  <div className="chat-input-container">

    <textarea
      rows={1}
      value={question}
      placeholder="Ask Krishi AI anything..."
      onChange={(e) => setQuestion(e.target.value)}
      onKeyDown={(e) => {

        if (e.key === "Enter" && !e.shiftKey) {

          e.preventDefault();

          askQuestion();

        }

      }}
    />

    <div className="input-actions">

      <button
        className={`icon-btn ${
          listening ? "active" : ""
        }`}
        onClick={startListening}
        title="Voice Input"
      >
        <FaMicrophone />
      </button>

      <button
        className="send-btn"
        onClick={askQuestion}
        disabled={loading}
      >
        <FaPaperPlane />
      </button>

    </div>

  </div>

  <p className="chat-footer-text">

    🌾 AI can make mistakes. Verify farming advice with local experts.

  </p>

</div>

    </section>
  );
}