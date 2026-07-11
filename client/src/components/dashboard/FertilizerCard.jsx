import "./FertilizerCard.css";
import { FaSeedling, FaFlask, FaLeaf } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

const FertilizerCard = ({
  fertilizerCrop,
  setFertilizerCrop,
  fertilizerSoil,
  setFertilizerSoil,
  cropStage,
  setCropStage,
  getFertilizerAdvice,
  fertilizerResult,
  loading = false,
}) => {

  return (

    <section id="fertilizer" className="fertilizer-section">

      {/* Header */}

      <div className="fertilizer-header">

        <div>

          <h2>🧪 AI Fertilizer Recommendation</h2>

          <p>

            Get smart fertilizer suggestions based on crop, soil type and crop growth stage.

          </p>

        </div>

      </div>

      <div className="fertilizer-wrapper">

        {/* LEFT PANEL */}

        <div className="fertilizer-form">

          <div className="input-group">

            <label>

              🌾 Crop Name

            </label>

            <input
              type="text"
              placeholder="e.g. Wheat"
              value={fertilizerCrop}
              onChange={(e) =>
                setFertilizerCrop(e.target.value)
              }
            />

          </div>

          <div className="input-group">

            <label>

              🌱 Soil Type

            </label>

            <input
              type="text"
              placeholder="e.g. Loamy Soil"
              value={fertilizerSoil}
              onChange={(e) =>
                setFertilizerSoil(e.target.value)
              }
            />

          </div>

          <div className="input-group">

            <label>

              🌿 Crop Growth Stage

            </label>

            <input
              type="text"
              placeholder="e.g. Vegetative"
              value={cropStage}
              onChange={(e) =>
                setCropStage(e.target.value)
              }
              onKeyDown={(e) => {

                if (e.key === "Enter") {

                  getFertilizerAdvice();

                }

              }}
            />

          </div>

          <button
            className="fertilizer-btn"
            onClick={getFertilizerAdvice}
            disabled={loading}
          >

            <FaFlask />

            Get AI Recommendation

          </button>

        </div>

        {/* RIGHT PANEL */}

        <div className="fertilizer-result-card">

          {!loading && !fertilizerResult && (

            <div className="fertilizer-placeholder">

              <FaLeaf />

              <h3>

                AI Ready

              </h3>

              <p>

                Enter crop details to receive intelligent fertilizer recommendations.

              </p>

            </div>

          )}

          {loading && (

            <div className="fertilizer-loading">

              <div className="loader"></div>

              <h3>

                AI is preparing recommendations...

              </h3>

              <p>

                Please wait a moment.

              </p>

            </div>

          )}

         {fertilizerResult && !loading && (

  <div className="fertilizer-success">

    {/* Top Header */}

    <div className="fertilizer-result-header">

      <div className="fertilizer-badge">

        🌱 AI Recommendation Ready

      </div>

      <div className="fertilizer-status">

        AI Powered

      </div>

    </div>

    {/* Title */}

    <h2>

      🧪 Fertilizer Recommendation Report

    </h2>

    {/* AI Output */}

<div className="fertilizer-result-text">

  <ReactMarkdown>

    {fertilizerResult}

  </ReactMarkdown>

</div>

    {/* Best Practices */}

    <div className="fertilizer-tips">

      <div className="tip-card">

        🌱

        <span>

          Apply fertilizer according to the crop growth stage.

        </span>

      </div>

      <div className="tip-card">

        💧

        <span>

          Irrigate the field after fertilizer application.

        </span>

      </div>

      <div className="tip-card">

        🌿

        <span>

          Prefer soil-test-based fertilizer recommendations.

        </span>

      </div>

      <div className="tip-card">

        ☀️

        <span>

          Avoid fertilizer application during heavy rainfall.

        </span>

      </div>

    </div>

    {/* Reset */}

    <button
      className="fertilizer-reset-btn"
      onClick={() => {

        setFertilizerCrop("");
        setFertilizerSoil("");
        setCropStage("");

      }}
    >

      🔄 Get Another Recommendation

    </button>

  </div>

)}

        </div>

      </div>

    </section>

  );

};

export default FertilizerCard;