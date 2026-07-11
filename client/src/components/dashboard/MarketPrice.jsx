import "./MarketPrice.css";
import { FaSearch, FaChartLine } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

const MarketPrice = ({
  cropName,
  setCropName,
  getMarketPrice,
  marketPrice,
  loading = false,
}) => {

  return (

    <section id="market" className="market-section">

      {/* Header */}

      <div className="market-header">

        <div>

          <h2>📈 AI Market Price</h2>

          <p>

            Check the latest market price of your crop using AI.

          </p>

        </div>

      </div>

      <div className="market-wrapper">

        {/* LEFT */}

        <div className="market-search-card">

          <div className="input-group">

            <label>

              🌾 Crop Name

            </label>

            <input
              type="text"
              placeholder="e.g. Wheat, Rice, Potato"
              value={cropName}
              onChange={(e) => setCropName(e.target.value)}
              onKeyDown={(e) => {

                if (e.key === "Enter") {

                  getMarketPrice();

                }

              }}
            />

          </div>

          <button
            className="market-btn"
            onClick={getMarketPrice}
            disabled={loading}
          >

            <FaSearch />

            Search Price

          </button>

        </div>

        {/* RIGHT */}

        <div className="market-result-card">

          {!loading && !marketPrice && (

            <div className="market-placeholder">

              <FaChartLine />

              <h3>

                No Market Data

              </h3>

              <p>

                Enter a crop name to view the latest market price and AI insights.

              </p>

            </div>

          )}

          {loading && (

            <div className="market-loading">

              <div className="loader"></div>

              <h3>

                Fetching Market Prices...

              </h3>

              <p>

                Please wait while AI collects the latest data.

              </p>

            </div>

          )}

       {marketPrice && !loading && (

  <div className="market-success">

    {/* Top */}

    <div className="market-result-header">

      <div className="market-badge">

        📈 Live Market Update

      </div>

      <div className="market-status">

        AI Verified

      </div>

    </div>

    {/* Title */}

    <h2>

      🌾 Market Price Analysis

    </h2>

    {/* AI Response */}

<div className="market-result-text">

  <ReactMarkdown>

    {marketPrice}

  </ReactMarkdown>

</div>

    {/* Quick Insights */}

    <div className="market-insights">

      <div className="insight-card">

        🌾

        <span>

          Compare prices across nearby mandis.

        </span>

      </div>

      <div className="insight-card">

        📈

        <span>

          Monitor daily price changes.

        </span>

      </div>

      <div className="insight-card">

        💰

        <span>

          Sell when market demand is high.

        </span>

      </div>

      <div className="insight-card">

        🚜

        <span>

          Plan harvesting based on price trends.

        </span>

      </div>

    </div>

    {/* Reset */}

    <button
      className="market-reset-btn"
      onClick={() => setCropName("")}
    >

      🔄 Search Another Crop

    </button>

  </div>

)}

        </div>

      </div>

    </section>

  );

};

export default MarketPrice;