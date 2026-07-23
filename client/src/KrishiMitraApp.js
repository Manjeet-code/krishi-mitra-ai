import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardCards from "./components/dashboard/DashboardCards";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  // =========================
  // CHAT STATES
  // =========================

  const [question, setQuestion] =
    useState("");

  const [messages, setMessages] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  // =========================
  // WEATHER STATES
  // =========================

  const [city, setCity] =
    useState("");

  const [weather, setWeather] =
    useState(null);

  const [showWeather,
    setShowWeather] =
    useState(true);

  const [showWeatherButton,
    setShowWeatherButton] =
    useState(false);

  // =========================
  // CROP STATES
  // =========================

  const [soilType,
    setSoilType] =
    useState("");

  const [temperature,
    setTemperature] =
    useState("");

  const [rainfall,
    setRainfall] =
    useState("");

  const [cropResult,
    setCropResult] =
    useState("");

  const [showCrop,
    setShowCrop] =
    useState(true);

  const [showCropButton,
    setShowCropButton] =
    useState(false);

    // =========================
// MARKET PRICE STATES
// =========================

const [cropName, setCropName] = useState("");
const [marketPrice, setMarketPrice] = useState("");

  // =========================
  // DISEASE STATES
  // =========================

  const [image, setImage] =
    useState(null);

  const [preview, setPreview] =
    useState(null);

  const [diseaseResult,
    setDiseaseResult] =
    useState("");

    // =========================
// FERTILIZER STATES
// =========================

const [fertilizerCrop, setFertilizerCrop] = useState("");
const [fertilizerSoil, setFertilizerSoil] = useState("");
const [cropStage, setCropStage] = useState("");
const [fertilizerResult, setFertilizerResult] = useState("");

// =========================
// GOVERNMENT SCHEME STATES
// =========================

const [schemes, setSchemes] =
  useState("");

// =========================
// VOICE ASSISTANT
// =========================

const {
  transcript,
  listening,
  resetTranscript,
} = useSpeechRecognition();

  useEffect(() => {

  if (transcript) {

    setQuestion(transcript);
  }

}, [transcript]);
// =========================
// START VOICE INPUT
// =========================

const startListening = () => {

  SpeechRecognition.startListening({
    continuous: false,
    language: "hi-IN",
  });
};
  // =========================
  // CHAT FUNCTION
  // =========================

const askQuestion = async () => {

  if (!question) return;

  const userMessage = {
    type: "user",
    text: question,
  };

  setMessages((prev) => [
    ...prev,
    userMessage,
  ]);

  setLoading(true);

  try {

    const res = await axios.post(
      "https://krishi-mitra-ai-backend.onrender.com/chat",
      {
        question,
      }
    );

    const aiText =
      typeof res.data.reply === "string"
        ? res.data.reply
        : JSON.stringify(res.data.reply);

    const aiMessage = {
      type: "ai",
      text: aiText,
    };

    setMessages((prev) => [
      ...prev,
      aiMessage,
    ]);

    const speech =
      new SpeechSynthesisUtterance(
        aiText
      );

    speech.lang = "hi-IN";

    window.speechSynthesis.speak(
      speech
    );

  } catch (error) {

    console.log(error);

    setMessages((prev) => [
      ...prev,
      {
        type: "ai",
        text:
          "❌ Error getting response",
      },
    ]);
  }

  setQuestion("");

  resetTranscript();

  setLoading(false);
};


useEffect(() => {
  if (!location.state?.section) return;

  setTimeout(() => {
    const element = document.getElementById(location.state.section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 300);
}, [location]);

  // =========================
  // WEATHER FUNCTION
  // =========================

  const getWeather = async () => {

    if (!city) return;

    try {

      const res = await axios.get(
        `https://krishi-mitra-ai-backend.onrender.com/weather/${city}`
      );

      setWeather(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  // =========================
// GOVERNMENT SCHEMES FUNCTION
// =========================

const getSchemes = async () => {

  try {

    const res = await axios.get(
      "https://krishi-mitra-ai-backend.onrender.com/government-schemes"
    );

    setSchemes(res.data.reply);

  } catch (error) {

    console.log(error);
  }
};

  // =========================
  // CROP RECOMMENDATION
  // =========================

  const recommendCrop = async () => {

    try {

      const res = await axios.post(
        "https://krishi-mitra-ai-backend.onrender.com/crop-recommend",
        {
          soilType,
          temperature,
          rainfall,
        }
      );

      setCropResult(res.data.reply);

    } catch (error) {

      console.log(error);
    }
  };

  // =========================
  // DISEASE DETECTION
  // =========================

  const detectDisease = async () => {

    if (!image) return;

    const formData =
      new FormData();

    formData.append(
      "image",
      image
    );

    try {

      const res = await axios.post(
        "https://krishi-mitra-ai-backend.onrender.com/detect-disease",
        formData
      );

      setDiseaseResult(
        res.data.message
      );

    } catch (error) {

      console.log(error);
    }
  };

  // =========================
// MARKET PRICE FUNCTION
// =========================

const getMarketPrice = async () => {
  if (!cropName) return;

  try {
    const res = await axios.get(
      `https://krishi-mitra-ai-backend.onrender.com/market-price/${cropName}`
    );

    setMarketPrice(res.data.reply);
  } catch (error) {
    console.log(error);
  }
};

// =========================
// FERTILIZER FUNCTION
// =========================

const getFertilizerAdvice = async () => {

  try {

    const res = await axios.post(
      "https://krishi-mitra-ai-backend.onrender.com/fertilizer",
      {
        crop: fertilizerCrop,
        soil: fertilizerSoil,
        stage: cropStage,
      }
    );

    setFertilizerResult(res.data.reply);

  } catch (error) {

    console.log(error);
  }
};

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #d4fc79, #96e6a1)",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >

<button
  onClick={() => navigate("/")}
  style={{
    position: "fixed",
    top: "25px",
    left: "25px",
    zIndex: 9999,
    background: "linear-gradient(135deg,#16A34A,#22C55E)",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    padding: "14px 24px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 12px 30px rgba(22,163,74,.35)",
    transition: "all .3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow =
      "0 18px 35px rgba(22,163,74,.45)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 12px 30px rgba(22,163,74,.35)";
  }}
>
  🏠 Home
</button>

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        style={{
          maxWidth: "950px",
          margin: "auto",
          background: "white",
          borderRadius: "20px",
          padding: "25px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >

<h1
  style={{
    textAlign: "center",
    color: "green",
    fontSize: "38px",
    marginBottom: "10px",
  }}
>
  🌾 KrishiMitra AI
</h1>

<p
  style={{
    textAlign: "center",
    color: "#050505",
    fontSize: "18px",
    marginTop: "-10px",
    marginBottom: "25px",
    fontWeight: "bold",
  }}
>
  "कृषि मित्र AI - किसानों का सच्चा साथी"🌱
</p>

        

        {/* ========================= */}
        {/* WEATHER SECTION */}
        {/* ========================= */}

        {showWeatherButton && (

          <button
            onClick={() => {
              setShowWeather(true);
              setShowWeatherButton(false);
            }}
            style={{
              marginBottom: "15px",
              background: "green",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Show Weather Section
          </button>

        )}

        {showWeather && (

          <motion.div
          id="weather"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            style={{
              background: "#e8f5e9",
              padding: "20px",
              borderRadius: "15px",
              marginBottom: "25px",
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
              }}
            >

              <h2>
                🌦 Weather Information
              </h2>

              <button
                onClick={() => {
                  setShowWeather(false);
                  setShowWeatherButton(true);
                }}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Hide
              </button>

            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "15px",
              }}
            >

              <input
                type="text"
                placeholder="Enter city..."
                value={city}
                onChange={(e) =>
                  setCity(
                    e.target.value
                  )
                }
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "10px",
                  border:
                    "1px solid #ccc",
                }}
              />

              <button
                onClick={getWeather}
                style={{
                  background: "green",
                  color: "white",
                  border: "none",
                  padding:
                    "12px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Get Weather
              </button>

            </div>

            {weather && (

              <div
                style={{
                  marginTop: "20px",
                  background: "white",
                  padding: "15px",
                  borderRadius: "12px",
                }}
              >

                <p>
                  📍 {weather.city}
                </p>

                <p>
                  🌡 Temperature:
                  {weather.temperature}°C
                </p>

                <p>
                  💧 Humidity:
                  {weather.humidity}%
                </p>

                <p>
                  ☁ Condition:
                  {weather.condition}
                </p>

                <p>
                  🌬 Wind Speed:
                  {weather.windSpeed} m/s
                </p>

              </div>
            )}

          </motion.div>
        )}

        {/* ========================= */}
        {/* CROP SECTION */}
        {/* ========================= */}

        {showCropButton && (

          <button
            onClick={() => {
              setShowCrop(true);
              setShowCropButton(false);
            }}
            style={{
              marginBottom: "15px",
              background: "green",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Show Crop Section
          </button>

        )}

        {showCrop && (

          <motion.div
          id="crop"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            style={{
              background: "#f1f8e9",
              padding: "20px",
              borderRadius: "15px",
              marginBottom: "25px",
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
              }}
            >

              <h2>
                🌱 Crop Recommendation
              </h2>

              <button
                onClick={() => {
                  setShowCrop(false);
                  setShowCropButton(true);
                }}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Hide
              </button>

            </div>

            <div
              style={{
                display: "flex",
                flexDirection:
                  "column",
                gap: "10px",
                marginTop: "15px",
              }}
            >

              <input
                type="text"
                placeholder="Soil Type"
                value={soilType}
                onChange={(e) =>
                  setSoilType(
                    e.target.value
                  )
                }
                style={{
                  padding: "12px",
                  borderRadius: "10px",
                }}
              />

              <input
                type="number"
                placeholder="Temperature °C"
                value={temperature}
                onChange={(e) =>
                  setTemperature(
                    e.target.value
                  )
                }
                style={{
                  padding: "12px",
                  borderRadius: "10px",
                }}
              />

              <input
                type="number"
                placeholder="Rainfall mm"
                value={rainfall}
                onChange={(e) =>
                  setRainfall(
                    e.target.value
                  )
                }
                style={{
                  padding: "12px",
                  borderRadius: "10px",
                }}
              />

              <button
                onClick={
                  recommendCrop
                }
                style={{
                  background: "green",
                  color: "white",
                  border: "none",
                  padding: "12px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Recommend Crop
              </button>

            </div>

            {cropResult && (

              <div
                style={{
                  marginTop: "20px",
                  background: "white",
                  padding: "15px",
                  borderRadius: "12px",
                }}
              >

                <ReactMarkdown>
                  {cropResult}
                </ReactMarkdown>

              </div>
            )}

          </motion.div>
        )}

 {/* ========================= */}
{/* MARKET PRICE SECTION */}
{/* ========================= */}

<motion.div
id="mandi"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  style={{
    background: "#e3f2fd",
    padding: "20px",
    borderRadius: "15px",
    marginBottom: "25px",
  }}
>
  <h2>💰 Market Price Checker</h2>

  <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
    <input
      type="text"
      placeholder="Enter crop name (e.g. wheat, rice)"
      value={cropName}
      onChange={(e) => setCropName(e.target.value)}
      style={{
        flex: 1,
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid #ccc",
      }}
    />

    <button
      onClick={getMarketPrice}
      style={{
        background: "green",
        color: "white",
        border: "none",
        padding: "12px 18px",
        borderRadius: "10px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Get Price
    </button>
  </div>

{marketPrice && (

  <div
    style={{
      marginTop: "20px",
      background: "white",
      padding: "15px",
      borderRadius: "12px",
    }}
  >

    <ReactMarkdown>
      {marketPrice}
    </ReactMarkdown>

  </div>
)}
</motion.div>

{/* ========================= */}
{/* GOVERNMENT SCHEMES */}
{/* ========================= */}

<motion.div
id="schemes"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  style={{
    background: "#ede7f6",
    padding: "20px",
    borderRadius: "15px",
    marginBottom: "25px",
  }}
>

  <h2>
    🔔 Government Schemes
  </h2>

  <button
    onClick={getSchemes}
    style={{
      marginTop: "15px",
      background: "green",
      color: "white",
      border: "none",
      padding: "12px 18px",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    Show Schemes
  </button>

  {schemes && (

    <div
      style={{
        marginTop: "20px",
        background: "white",
        padding: "15px",
        borderRadius: "12px",
      }}
    >

      <ReactMarkdown>
        {schemes}
      </ReactMarkdown>

    </div>
  )}

</motion.div>

{/* ========================= */}
{/* FERTILIZER SECTION */}
{/* ========================= */}

<motion.div
id="fertilizer"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  style={{
    background: "#f3e5f5",
    padding: "20px",
    borderRadius: "15px",
    marginBottom: "25px",
  }}
>

  <h2>🌿 Fertilizer Recommendation</h2>

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginTop: "15px",
    }}
  >

    <input
      type="text"
      placeholder="Crop Name"
      value={fertilizerCrop}
      onChange={(e) =>
        setFertilizerCrop(e.target.value)
      }
      style={{
        padding: "12px",
        borderRadius: "10px",
      }}
    />

    <input
      type="text"
      placeholder="Soil Type"
      value={fertilizerSoil}
      onChange={(e) =>
        setFertilizerSoil(e.target.value)
      }
      style={{
        padding: "12px",
        borderRadius: "10px",
      }}
    />

    <input
      type="text"
      placeholder="Crop Stage (Seedling / Flowering etc)"
      value={cropStage}
      onChange={(e) =>
        setCropStage(e.target.value)
      }
      style={{
        padding: "12px",
        borderRadius: "10px",
      }}
    />

    <button
      onClick={getFertilizerAdvice}
      style={{
        background: "green",
        color: "white",
        border: "none",
        padding: "12px",
        borderRadius: "10px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Get Fertilizer Advice
    </button>

  </div>

  {fertilizerResult && (

    <div
      style={{
        marginTop: "20px",
        background: "white",
        padding: "15px",
        borderRadius: "12px",
      }}
    >

      <ReactMarkdown>
        {fertilizerResult}
      </ReactMarkdown>

    </div>
  )}

</motion.div>

        {/* ========================= */}
        {/* DISEASE DETECTION */}
        {/* ========================= */}

        <motion.div
        id="disease"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          style={{
            background: "#fff8e1",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "25px",
          }}
        >

          <h2>
            📷 Plant Disease Detection
          </h2>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {

              setImage(
                e.target.files[0]
              );

              setPreview(
                URL.createObjectURL(
                  e.target.files[0]
                )
              );
            }}
            style={{
              marginTop: "15px",
            }}
          />

          {preview && (

            <div
              style={{
                marginTop: "20px",
              }}
            >

              <img
                src={preview}
                alt="preview"
                style={{
                  width: "250px",
                  borderRadius: "12px",
                }}
              />

            </div>
          )}

          <button
            onClick={detectDisease}
            style={{
              marginTop: "20px",
              background: "green",
              color: "white",
              border: "none",
              padding: "12px 18px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Detect Disease
          </button>

          {diseaseResult && (

            <div
              style={{
                marginTop: "20px",
                background: "white",
                padding: "15px",
                borderRadius: "12px",
              }}
            >

              <ReactMarkdown>
                {diseaseResult}
              </ReactMarkdown>

            </div>
          )}

        </motion.div>

{/* ========================= */}
{/* CHAT AREA */}
{/* ========================= */}

<div id="voice">

<h2
  style={{
    marginBottom: "15px",
    color: "green",
    fontWeight: "bold",
  }}
>
  💬 Chat Box
</h2>

        <div
          style={{
            height: "450px",
            overflowY: "auto",
            padding: "15px",
            borderRadius: "15px",
            background: "#e5ebf6",
            border:
              "1px solid #000000",
          }}
        >

          {messages.map(
            (msg, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.type ===
                    "user"
                      ? "flex-end"
                      : "flex-start",
                  marginBottom:
                    "15px",
                }}
              >

                <div
                  style={{
                    maxWidth: "70%",
                    padding: "15px",
                    borderRadius:
                      "15px",
                    background:
                      msg.type ===
                      "user"
                        ? "green"
                        : "#e6f4ea",
                    color:
                      msg.type ===
                      "user"
                        ? "white"
                        : "black",
                  }}
                >

                  <ReactMarkdown>
                    {msg.text}
                  </ReactMarkdown>

                </div>

              </motion.div>
            )
          )}

          {loading && (

            <p
              style={{
                color: "green",
              }}
            >
              ⏳ AI is typing...
            </p>

          )}

        </div>

        {/* ========================= */}
        {/* INPUT AREA */}
        {/* ========================= */}

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
          }}
        >

          <input
            type="text"
            placeholder="Ask farming question..."
            value={question}
            onChange={(e) =>
              setQuestion(
                e.target.value
              )
            }
            style={{
              flex: 1,
              padding: "15px",
              borderRadius: "12px",
              border:
                "1px solid #073001",
              fontSize: "16px",
            }}
          />

<button
  onClick={startListening}
  style={{
    background: listening
      ? "red"
      : "orange",
    color: "white",
    border: "none",
    padding: "15px 18px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "18px",
  }}
>
  {listening ? "🎙 Listening..." : "🎤"}
</button>

          <button
            onClick={askQuestion}
            style={{
              background: "green",
              color: "white",
              border: "none",
              padding:
                "15px 25px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Send
          </button>

        </div>
</div>
      </motion.div>

</div>
);
}

export default App;