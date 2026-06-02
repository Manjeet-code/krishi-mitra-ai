# 🌾 Krishi Mitra AI

### Kisanon Ka Sacha Sathi

Krishi Mitra AI is an AI-powered smart agriculture assistant designed to help farmers make better farming decisions. The platform provides crop recommendations, weather information, market price insights, plant disease detection, and AI-powered farming guidance through an easy-to-use interface.

---

## 🚀 Features

### 🤖 AI Farming Assistant

* Ask agriculture-related questions in natural language.
* Get AI-powered guidance on crops, fertilizers, irrigation, and farming practices.
* Farmer-friendly responses with markdown formatting.

### 🌦 Weather Information

* Real-time weather updates by city.
* Temperature
* Humidity
* Weather condition
* Wind speed

### 🌱 Crop Recommendation System

* Enter:

  * Soil Type
  * Temperature
  * Rainfall
* Receive crop recommendations along with:

  * Best crop
  * Reason for recommendation
  * Fertilizer suggestions
  * Farming tips

### 💰 Market Price Checker

* Check crop market prices.
* Get:

  * Crop name
  * Average price
  * Minimum price
  * Maximum price
  * Best market
  * Best selling time

### 📷 Plant Disease Detection

* Upload plant images.
* Detect possible diseases.
* View:

  * Disease name
  * Cause
  * Treatment
  * Prevention tips

### 🎤 Voice Input Support

* Speak instead of typing.
* Voice automatically converts to text.
* Helpful for farmers with limited typing experience.

### 📱 Responsive Design

* Mobile-friendly interface.
* Works on desktop, tablet, and smartphone devices.

---

## 🛠 Tech Stack

### Frontend

* React.js
* Axios
* React Markdown
* Framer Motion
* React Speech Recognition

### Backend

* Node.js
* Express.js
* Multer
* CORS
* Dotenv

### AI & APIs

* Groq API (Llama 3.3 70B Versatile)
* OpenWeatherMap API
* Google Gemini API (configured for future enhancements)

---

## 📂 Project Structure

```text
krishi-mitra-ai/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Manjeet-code/krishi-mitra-ai.git
cd krishi-mitra-ai
```

### Backend Setup

```bash
cd server
npm install
```

Create `.env`

```env
GROQ_API_KEY=your_groq_api_key
WEATHER_API_KEY=your_openweathermap_api_key
GEMINI_API_KEY=your_gemini_api_key
```

Run backend:

```bash
npm start
```

---

### Frontend Setup

```bash
cd client
npm install
npm start
```

---

## 🌍 Deployment

### Frontend

* Vercel

### Backend

* Render

---

## 🎯 Future Enhancements

* Real AI disease detection using Deep Learning
* Multi-language support
* GPS-based weather forecasting
* Farmer authentication system
* Government scheme recommendations
* Live mandi price integration
* Voice response from AI
* Crop yield prediction

---

## 👨‍💻 Developed By

Manjeet Kumar

---

## 📜 License

This project is developed for educational and learning purposes.
