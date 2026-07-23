import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

// Dashboard Layout
import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardBanner from "../components/dashboard/DashboardBanner";
import SettingsModal from "../components/dashboard/SettingsModal";

// Dashboard Sections
import ChatSection from "../components/dashboard/ChatSection";
import WeatherSection from "../components/dashboard/WeatherSection";
import CropRecommendation from "../components/dashboard/CropRecommendation";
import DiseaseDetection from "../components/dashboard/DiseaseDetection";
import MarketPrice from "../components/dashboard/MarketPrice";
import FertilizerCard from "../components/dashboard/FertilizerCard";
import GovernmentSchemes from "../components/dashboard/GovernmentSchemes";
import DashboardFooter from "../components/dashboard/DashboardFooter";


const KrishiMitraApp = () => {

//  const navigate = useNavigate();

  const location = useLocation();

  /*
  =====================================================
  ALL STATES WILL COME HERE
  =====================================================
  */
  const [showSettings, setShowSettings] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   // ============================
  // CHAT STATES
  // ============================

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // ============================
  // WEATHER STATES
  // ============================

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  // ============================
  // CROP STATES
  // ============================

  const [soilType, setSoilType] = useState("");
  const [temperature, setTemperature] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [cropResult, setCropResult] = useState("");

  // ============================
  // DISEASE STATES
  // ============================

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [diseaseResult, setDiseaseResult] = useState("");

  // ============================
  // MARKET PRICE STATES
  // ============================

  const [cropName, setCropName] = useState("");
  const [marketPrice, setMarketPrice] = useState("");

  // ============================
  // FERTILIZER STATES
  // ============================

  const [fertilizerCrop, setFertilizerCrop] = useState("");
  const [fertilizerSoil, setFertilizerSoil] = useState("");
  const [cropStage, setCropStage] = useState("");
  const [fertilizerResult, setFertilizerResult] = useState("");

  // ============================
  // GOVERNMENT SCHEME
  // ============================

  const [schemes, setSchemes] = useState("");

  // ============================
  // VOICE RECOGNITION
  // ============================

  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  // ============================
  // AUTO FILL QUESTION
  // ============================

  useEffect(() => {
    if (transcript) {
      setQuestion(transcript);
    }
  }, [transcript]);

  // ============================
  // SCROLL TO SECTION
  // ============================

  useEffect(() => {
    if (location.state?.scrollTo) {

      setTimeout(() => {

        const section = document.getElementById(
          location.state.scrollTo
        );

        if (section) {

          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }

      }, 300);

    }
  }, [location]);

  // ============================
  // SETTINGS MODAL EVENT
  // ============================

  useEffect(() => {
    const handleOpenSettings = () => setShowSettings(true);
    window.addEventListener("open-settings", handleOpenSettings);
    return () => window.removeEventListener("open-settings", handleOpenSettings);
  }, []);

  // ============================
  // START VOICE
  // ============================

  const startListening = () => {

    SpeechRecognition.startListening({

      continuous: false,

      language: "hi-IN",

    });

  };

  /*
  =====================================================
  ALL FUNCTIONS WILL COME HERE
  =====================================================
  */
 // ============================
// ASK AI
// ============================

const askQuestion = async (customQuestion = null) => {

  const finalQuestion = customQuestion || question;

  if (!finalQuestion.trim()) return;

  const userMessage = {
    type: "user",
    text: finalQuestion,
  };

  setMessages((prev) => [...prev, userMessage]);

  setLoading(true);

  try {

    const res = await axios.post(
      "http://localhost:5000/chat",
      {
        question: finalQuestion,
      }
    );

    const aiText =
      typeof res.data.reply === "string"
        ? res.data.reply
        : JSON.stringify(res.data.reply);

    setMessages((prev) => [
      ...prev,
      {
        type: "ai",
        text: aiText,
      },
    ]);

    const speech =
      new SpeechSynthesisUtterance(aiText);

    speech.lang = "hi-IN";

    window.speechSynthesis.speak(speech);

  } catch (error) {

    console.log(error);

    setMessages((prev) => [
      ...prev,
      {
        type: "ai",
        text: "❌ Failed to get AI response.",
      },
    ]);

  }

  setQuestion("");

  resetTranscript();

  setLoading(false);

};

// ============================
// WEATHER
// ============================

const getWeather = async () => {
  if (!city.trim()) return;

  try {
    const { data } = await axios.get(
      `http://localhost:5000/weather/${city}`
    );

    setWeather(data);
  } catch (error) {
    console.error(error);
  }
};

// ============================
// CROP RECOMMENDATION
// ============================

const recommendCrop = async () => {

  try {

    const res = await axios.post(
      "http://localhost:5000/crop-recommend",
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

// ============================
// DISEASE DETECTION
// ============================

const detectDisease = async () => {

  if (!image) return;

  const formData = new FormData();

  formData.append("image", image);

  try {

    const res = await axios.post(
      "http://localhost:5000/detect-disease",
      formData
    );

    setDiseaseResult(res.data.message);

  } catch (error) {

    console.log(error);

  }

};

// ============================
// MARKET PRICE
// ============================

const getMarketPrice = async () => {

  if (!cropName) return;

  try {

    const res = await axios.get(
      `http://localhost:5000/market-price/${cropName}`
    );

    setMarketPrice(res.data.reply);

  } catch (error) {

    console.log(error);

  }

};

// ============================
// FERTILIZER
// ============================

const getFertilizerAdvice = async () => {

  try {

    const res = await axios.post(
      "http://localhost:5000/fertilizer",
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

// ============================
// GOVERNMENT SCHEMES
// ============================

const getSchemes = async () => {

  try {

    const res = await axios.get(
      "http://localhost:5000/government-schemes"
    );

    setSchemes(res.data.reply);

  } catch (error) {

    console.log(error);

  }

};

return (
  <>
<DashboardLayout
    sidebar={<DashboardSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />}
    header={<DashboardHeader isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />}
    banner={<DashboardBanner />}
>

    <ChatSection
  question={question}
  setQuestion={setQuestion}
  messages={messages}
  loading={loading}
  askQuestion={askQuestion}
  listening={listening}
  startListening={startListening}
/>

        <WeatherSection
      city={city}
      setCity={setCity}
      weather={weather}
      getWeather={getWeather}
    />

    <CropRecommendation
      soilType={soilType}
      setSoilType={setSoilType}
      temperature={temperature}
      setTemperature={setTemperature}
      rainfall={rainfall}
      setRainfall={setRainfall}
      recommendCrop={recommendCrop}
      cropResult={cropResult}
    />

    <MarketPrice
      cropName={cropName}
      setCropName={setCropName}
      getMarketPrice={getMarketPrice}
      marketPrice={marketPrice}
    />

    
<FertilizerCard
  fertilizerCrop={fertilizerCrop}
  setFertilizerCrop={setFertilizerCrop}
  fertilizerSoil={fertilizerSoil}
  setFertilizerSoil={setFertilizerSoil}
  cropStage={cropStage}
  setCropStage={setCropStage}
  fertilizerResult={fertilizerResult}
  getFertilizerAdvice={getFertilizerAdvice}
/>

    <DiseaseDetection
      image={image}
      preview={preview}
      setImage={setImage}
      setPreview={setPreview}
      detectDisease={detectDisease}
      diseaseResult={diseaseResult}
    />

    <GovernmentSchemes
      schemes={schemes}
      getSchemes={getSchemes}
    />
 <DashboardFooter />
 
  </DashboardLayout>
  {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
  </>

);

};

export default KrishiMitraApp;