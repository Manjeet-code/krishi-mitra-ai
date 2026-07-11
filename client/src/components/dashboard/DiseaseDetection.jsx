import "./DiseaseDetection.css";
import { useRef } from "react";
import {
  FaCloudUploadAlt,
  FaLeaf,
  FaCamera,
  FaImage,
} from "react-icons/fa";

import ReactMarkdown from "react-markdown";

const DiseaseDetection = ({
  image,
  setImage,
  detectDisease,
  diseaseResult,
  loading = false,
}) => {

  const fileInputRef = useRef(null);

  const handleImage = (e) => {

    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }

  };

  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  return (

    <section id="disease" className="disease-section">

      {/* Header */}

      <div className="disease-header">

        <div>

          <h2>

            🌿 AI Plant Disease Detection

          </h2>

          <p>

            Upload a crop leaf image and let AI identify diseases instantly.

          </p>

        </div>

      </div>

      <div className="disease-wrapper">

        {/* LEFT */}

        <div className="upload-card">

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleImage}
          />

          {!image ? (

            <div
              className="upload-area"
              onClick={openFilePicker}
            >

              <FaCloudUploadAlt />

              <h3>

                Upload Leaf Image

              </h3>

              <p>

                Drag & Drop or Click to Browse

              </p>

              <button>

                <FaCamera />

                Choose Image

              </button>

            </div>

          ) : (

            <div className="preview-area">

              <img
                src={URL.createObjectURL(image)}
                alt="Crop"
              />

              <button
                className="change-btn"
                onClick={openFilePicker}
              >

                <FaImage />

                Change Image

              </button>

            </div>

          )}

          <button
            className="detect-btn"
            onClick={detectDisease}
            disabled={!image || loading}
          >

            🌱 Detect Disease

          </button>

        </div>

        {/* RIGHT */}

        <div className="result-card">

          {!diseaseResult && !loading && (

            <div className="placeholder">

              <FaLeaf />

              <h3>

                AI Ready

              </h3>

              <p>

                Upload a clear crop leaf image to receive disease analysis and treatment suggestions.

              </p>

            </div>

          )}

          {loading && (

            <div className="loading-box">

              <div className="loader"></div>

              <h3>

                AI is analyzing the image...

              </h3>

              <p>

                Please wait a few seconds.

              </p>

            </div>

          )}

         {diseaseResult && !loading && (

  <div className="result-success">

    <div className="result-header">

      <div className="result-badge">

        🌿 AI Analysis Complete

      </div>

      <div className="confidence">

        AI Powered

      </div>

    </div>

    <h2>

      🦠 Disease Detection Report

    </h2>

<div className="result-content">

  <ReactMarkdown>

    {diseaseResult}

  </ReactMarkdown>

</div>

    <div className="result-footer">

      <div className="footer-card">

        🌱
        <span>

          Use certified seeds

        </span>

      </div>

      <div className="footer-card">

        💊
        <span>

          Follow recommended treatment

        </span>

      </div>

      <div className="footer-card">

        💧
        <span>

          Maintain proper irrigation

        </span>

      </div>

      <div className="footer-card">

        ☀️
        <span>

          Monitor crop regularly

        </span>

      </div>

    </div>

    <button
      className="new-scan-btn"
      onClick={() => {

        setImage(null);

      }}
    >

      🔄 Scan Another Image

    </button>

  </div>

)}

        </div>

      </div>

    </section>

  );

};

export default DiseaseDetection;