import React, { useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt, FaMagic, FaThermometerHalf, FaCloud, FaTint, FaSearch } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import "./LocationAdvice.css";
import { API_URL } from "../../utils/constants";

const LocationAdvice = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [locationName, setLocationName] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [advice, setAdvice] = useState("");
  const [manualCity, setManualCity] = useState("");

  const fetchAdvice = async (payload) => {
    setLoading(true);
    setError("");
    setAdvice("");
    setLocationName("");
    setWeatherInfo(null);
    try {
      const res = await axios.post(`${API_URL}/location-advice`, payload);
      setLocationName(res.data.location);
      setWeatherInfo(res.data.weather);
      setAdvice(res.data.advice);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch advice. Please check the city name or try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAutoLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchAdvice({ lat: position.coords.latitude, lng: position.coords.longitude });
      },
      (err) => {
        console.error(err);
        setError("Location access denied or unavailable. Please enable permissions.");
        setLoading(false);
      }
    );
  };

  const handleManualSearch = (e) => {
    e.preventDefault();
    if (!manualCity.trim()) return;
    fetchAdvice({ city: manualCity.trim() });
  };

  return (
    <section id="location-advice" className="dashboard-section location-advice-section">
      <div className="section-title">
        <div>
          <h2><FaMapMarkerAlt style={{ color: "#10b981" }} /> Location-Based Smart Advice</h2>
          <p>
            Get personalized AI farming advice based on your current geographical location or search for a specific city/village.
          </p>
        </div>
      </div>

      <div className="location-advice-wrapper">
        <div className="location-controls">
          <button 
            className={`location-btn auto-btn ${loading ? "loading" : ""}`} 
            onClick={handleAutoLocation}
            disabled={loading}
          >
            <FaMapMarkerAlt /> Use My Location
          </button>
          
          <div className="location-divider">
            <span>OR</span>
          </div>
          
          <form className="location-manual-form" onSubmit={handleManualSearch}>
            <div className="input-group">
              <span className="input-icon"><FaSearch /></span>
              <input 
                type="text" 
                placeholder="Enter city or village name..." 
                value={manualCity}
                onChange={(e) => setManualCity(e.target.value)}
                disabled={loading}
                className="location-input"
              />
            </div>
            <button 
              type="submit" 
              className="location-btn manual-btn" 
              disabled={loading || !manualCity.trim()}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </form>
        </div>

        {error && <div className="error-message">⚠️ {error}</div>}

        {locationName && (
          <div className="location-info">
            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div className="info-details">
                <span className="info-label">Region</span>
                <span className="info-value">{locationName}</span>
              </div>
            </div>
            
            {weatherInfo && (
              <>
                <div className="info-item">
                  <div className="info-icon"><FaThermometerHalf /></div>
                  <div className="info-details">
                    <span className="info-label">Temperature</span>
                    <span className="info-value">{weatherInfo.temp}°C</span>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon"><FaCloud /></div>
                  <div className="info-details">
                    <span className="info-label">Condition</span>
                    <span className="info-value" style={{ textTransform: 'capitalize' }}>{weatherInfo.condition}</span>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon"><FaTint /></div>
                  <div className="info-details">
                    <span className="info-label">Humidity</span>
                    <span className="info-value">{weatherInfo.humidity}%</span>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {advice && (
          <div className="location-result-card">
            <h3><FaMagic style={{ color: "#10b981" }} /> AI Farming Analysis</h3>
            <div className="location-result-text">
              <ReactMarkdown>{advice}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LocationAdvice;
