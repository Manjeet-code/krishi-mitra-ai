import "./DashboardBanner.css";

import {
  FaLeaf,
  FaCloudSun,
  FaArrowTrendUp,
  FaRobot,
  FaSeedling,
  FaChartLine,
} from "react-icons/fa6";

export default function DashboardBanner() {

  const hour = new Date().getHours();

  let greeting = "Good Morning";

  if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  }

  if (hour >= 17) {
    greeting = "Good Evening";
  }

  // =========================
  // Smooth Scroll
  // =========================

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if(section){

      section.scrollIntoView({

        behavior:"smooth",

        block:"start",

      });

    }

  };


  return (

    <section className="banner">


      {/* Background Effects */}

      <div className="banner-glow glow-one"></div>

      <div className="banner-glow glow-two"></div>


      {/* LEFT CONTENT */}

      <div className="banner-left">


        <span className="welcome">

          👋 {greeting}, Farmer

        </span>


        <h1>

          Welcome to

          <span>

            {" "}KrishiMitra AI

          </span>

        </h1>


        <p>

          Your intelligent farming companion powered by
          Artificial Intelligence, weather analytics,
          crop prediction, disease detection and
          real-time agriculture insights.

        </p>



        <div className="banner-buttons">


          <button

            className="primary-btn"

            onClick={() => scrollToSection("chat")}

          >

            <FaRobot />

            Ask AI

          </button>



          <button

            className="secondary-btn"

            onClick={() => scrollToSection("crop")}

          >

            <FaSeedling />

            Crop Guide

          </button>


        </div>



        {/* Mini Stats */}

        <div className="banner-stats">


          <div className="stat-box">

            <FaRobot />

            <div>

              <h3>

                AI

              </h3>

              <span>

                Farming Assistant

              </span>

            </div>

          </div>



          <div className="stat-box">

            <FaChartLine />

            <div>

              <h3>

                Live

              </h3>

              <span>

                Market Insights

              </span>

            </div>

          </div>



          <div className="stat-box">

            <FaLeaf />

            <div>

              <h3>

                Smart

              </h3>

              <span>

                Crop Solutions

              </span>

            </div>

          </div>


        </div>


      </div>



      {/* RIGHT CONTENT */}


      <div className="banner-right">


        <div className="hero-ai-card">


          <div className="ai-card-header">


            <div className="ai-icon">

              🌾

            </div>


            <div>

              <h3>

                KrishiMitra AI

              </h3>

              <span>

                Online Assistant

              </span>

            </div>


            <div className="online-status">

              <span></span>

              Online

            </div>


          </div>



          <div className="ai-card-body">


            <div className="glass-item">


              <FaCloudSun />


              <div>

                <h4>

                  Weather Intelligence

                </h4>


                <p>

                  Smart climate updates

                </p>


              </div>


            </div>




            <div className="glass-item">


              <FaArrowTrendUp />


              <div>

                <h4>

                  Market Analysis

                </h4>


                <p>

                  Better selling decisions

                </p>


              </div>


            </div>



                        {/* AI Recommendation */}

            <div className="glass-item">


              <FaLeaf />


              <div>

                <h4>

                  AI Crop Advisor

                </h4>


                <p>

                  Smart crop recommendations

                </p>


              </div>


            </div>



            {/* Smart Farming Score */}

            <div className="farming-score">


              <div className="score-header">

                <span>

                  🌱 Farming Intelligence Score

                </span>


                <strong>

                  92%

                </strong>


              </div>



              <div className="score-bar">


                <div className="score-progress"></div>


              </div>


              <p>

                Based on weather, soil and market data

              </p>


            </div>



            {/* AI Message */}


            <div className="ai-message">


              <span>

                🤖

              </span>


              <p>

                "Your farm insights are ready.
                Ask AI for better decisions."

              </p>


            </div>



          </div>


        </div>



        {/* Floating Elements */}


        <div className="floating-card card-one">


          🌦

          <span>

            Weather AI

          </span>


        </div>



        <div className="floating-card card-two">


          🌾

          <span>

            Crop Expert

          </span>


        </div>



        <div className="floating-card card-three">


          📈

          <span>

            Market Trends

          </span>


        </div>



      </div>


    </section>

  );

}

