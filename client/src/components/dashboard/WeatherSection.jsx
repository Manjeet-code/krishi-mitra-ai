import "./WeatherSection.css";
import { useState } from "react";
import axios from "axios";

import {
  FaSearch,
  FaMapMarkerAlt,
  FaTemperatureHigh,
  FaTint,
  FaWind,
  FaCloud,
} from "react-icons/fa";

export default function WeatherSection() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);
const [weatherError, setWeatherError] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city.trim()) return;

    try {
      setLoading(true);
      setError("");

      const { data } = await axios.get(
        `https://krishi-mitra-ai-backend.onrender.com/weather/${city}`
      );

      setWeather(data);
    } catch (err) {
      console.error(err);
      setError("Unable to fetch weather.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="weather" className="weather-section">

      {/* Header */}

      <div className="weather-header">

        <div>

          <h2>🌤 Weather Forecast</h2>

          <p>
            Get real-time weather updates for your city
          </p>

        </div>

      </div>

      {/* Search */}

      <div className="weather-search">

        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") getWeather();
          }}
        />

        <button onClick={getWeather}>
          <FaSearch />
        </button>

      </div>

      {/* Loading */}

      {loading && (

        <div className="weather-loading">

          <div className="loader"></div>

          <h3>Fetching Weather...</h3>

        </div>

      )}

      {/* Error */}

      {error && (

        <div className="weather-error">

          {error}

        </div>

      )}

      {/* Weather Card */}

      {weather && (

        <div className="weather-card">

          <div className="weather-top">

            <div>

              <h2>

                <FaMapMarkerAlt />

                {" "}

                {weather.city}

              </h2>

              <p>{weather.description}</p>

            </div>

            <img
              src={weather.icon}
              alt="Weather Icon"
            />

          </div>

          <div className="weather-temp">

            {weather.temperature}°C

          </div>

          <div className="weather-info">

            <div className="info-card">

              <FaTemperatureHigh />

              <span>Feels Like</span>

              <h3>{weather.feelsLike}°C</h3>

            </div>

            <div className="info-card">

              <FaTint />

              <span>Humidity</span>

              <h3>{weather.humidity}%</h3>

            </div>

            <div className="info-card">

              <FaWind />

              <span>Wind</span>

              <h3>{weather.windSpeed} km/h</h3>

            </div>

            <div className="info-card">

              <FaCloud />

              <span>Clouds</span>

              <h3>{weather.clouds}%</h3>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}