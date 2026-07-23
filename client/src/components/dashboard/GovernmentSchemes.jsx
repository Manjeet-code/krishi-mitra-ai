import "./GovernmentSchemes.css";
import ReactMarkdown from "react-markdown";
import {
  FaUniversity,
  FaSyncAlt,
  FaLandmark,
  FaShieldAlt,
} from "react-icons/fa";

const GovernmentScheme = ({
  getSchemes,
  schemes,
  loading = false,
}) => {

  return (

    <section id="schemes" className="scheme-section">

      {/* Header */}

      <div className="scheme-header">

        <div>

          <h2>🏛 Government Schemes</h2>

          <p>

            Explore the latest government schemes, subsidies and farmer welfare programs powered by AI.

          </p>

        </div>

        <button
          className="refresh-btn"
          onClick={getSchemes}
          disabled={loading}
        >

          <FaSyncAlt />

          Refresh

        </button>

      </div>

      <div className="scheme-wrapper">

        {/* LEFT SIDE */}

        <div className="scheme-info-card">

          <div className="info-icon">

            <FaLandmark />

          </div>

          <h3>

            Farmer Welfare Portal

          </h3>

          <p>

            Discover central and state government schemes including subsidies,
            crop insurance, PM-KISAN, soil health programs,
            irrigation support and agricultural loans.

          </p>

          <div className="scheme-features">

            <div className="feature-item">

              🌾 Agricultural Subsidies

            </div>

            <div className="feature-item">

              💰 Financial Assistance

            </div>

            <div className="feature-item">

              🚜 Farm Equipment Support

            </div>

            <div className="feature-item">

              🌧 Crop Insurance

            </div>

            <div className="feature-item">

              🌱 Organic Farming

            </div>

            <div className="feature-item">

              🏦 Agriculture Loans

            </div>

          </div>

          <button
            className="scheme-btn"
            onClick={getSchemes}
            disabled={loading}
          >

            <FaUniversity />

            Load Government Schemes

          </button>

        </div>

        {/* RIGHT SIDE */}

        <div className="scheme-result-card">

          {!loading && !schemes && (

            <div className="scheme-placeholder">

              <FaUniversity />

              <h3>

                Government Schemes

              </h3>

              <p>

                Click on <strong>Load Government Schemes</strong> to get the latest AI-powered scheme recommendations.

              </p>

            </div>

          )}

          {loading && (

            <div className="scheme-loading">

              <div className="loader"></div>

              <h3>

                Fetching Government Schemes...

              </h3>

              <p>

                AI is collecting the latest farmer welfare schemes.

              </p>

            </div>

          )}

         {schemes && !loading && (

  <div className="scheme-success">

    {/* Top Header */}

    <div className="scheme-result-header">

      <div className="scheme-badge">

        🏛 Government Verified

      </div>

      <div className="scheme-status">

        AI Updated

      </div>

    </div>

    {/* Title */}

    <h2>

      🌾 Latest Government Schemes

    </h2>

    {/* AI Output */}

    <div className="scheme-result-text">

      <ReactMarkdown
        components={{
          a: ({ node, children, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
        }}
      >

        {schemes}

      </ReactMarkdown>

    </div>

    {/* Quick Benefits */}

    <div className="scheme-benefits">

      <div className="benefit-card">

        💰

        <span>

          Financial assistance for eligible farmers.

        </span>

      </div>

      <div className="benefit-card">

        🚜

        <span>

          Subsidies on agricultural machinery and equipment.

        </span>

      </div>

      <div className="benefit-card">

        🌧

        <span>

          Crop insurance and disaster relief support.

        </span>

      </div>

      <div className="benefit-card">

        🌱

        <span>

          Organic farming and sustainable agriculture incentives.

        </span>

      </div>

      <div className="benefit-card">

        💧

        <span>

          Irrigation and water conservation schemes.

        </span>

      </div>

      <div className="benefit-card">

        🏦

        <span>

          Easy agricultural loans with government support.

        </span>

      </div>

    </div>

    {/* Footer */}

    <div className="scheme-footer">

      <div className="footer-note">

        <FaShieldAlt />

        <span>

          Always verify eligibility criteria and application dates before applying.

        </span>

      </div>

    </div>

    {/* Refresh Button */}

    <button
      className="scheme-refresh-btn"
      onClick={getSchemes}
    >

      <FaSyncAlt />

      Refresh Latest Schemes

    </button>

  </div>

)}

        </div>

      </div>

    </section>

  );

};

export default GovernmentScheme;