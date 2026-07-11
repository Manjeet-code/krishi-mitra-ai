import { FaSeedling, FaLeaf, FaCloudRain } from "react-icons/fa";
import "./CropRecommendation.css";
import ReactMarkdown from "react-markdown";

const CropRecommendation = ({
  soilType,
  setSoilType,
  temperature,
  setTemperature,
  rainfall,
  setRainfall,
  recommendCrop,
  cropResult,
}) => {
  return (
    <section id="crop" className="dashboard-section">

      <div className="section-title">
        <div>
          <h2>🌾 AI Crop Recommendation</h2>
          <p>
            Get intelligent crop suggestions based on soil, temperature and rainfall.
          </p>
        </div>
      </div>

      <div className="crop-wrapper">

        {/* LEFT */}

        <div className="crop-form">

          <div className="input-group">
            <label>🌱 Soil Type</label>
            <input
              type="text"
              placeholder="e.g. Loamy"
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>🌡 Temperature (°C)</label>
            <input
              type="number"
              placeholder="e.g. 28"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>🌧 Rainfall (mm)</label>
            <input
              type="number"
              placeholder="e.g. 180"
              value={rainfall}
              onChange={(e) => setRainfall(e.target.value)}
            />
          </div>

          <button
            className="crop-btn"
            onClick={recommendCrop}
          >
            🌾 Recommend Crop
          </button>

        </div>

        {/* RIGHT */}

        <div className="crop-result-card">

          {cropResult ? (
            <>
              <FaSeedling className="crop-icon" />

              <h2>AI Recommendation</h2>

<div className="crop-result-text">
  <ReactMarkdown>{cropResult}</ReactMarkdown>
</div>

            </>
          ) : (
            <div className="crop-placeholder">

              <FaLeaf />

              <h3>No Recommendation Yet</h3>

              <p>
                Fill the details and click
                <strong> Recommend Crop</strong>.
              </p>

            </div>
          )}

        </div>

      </div>

    </section>
  );
};

export default CropRecommendation;