const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");
const multer = require("multer");

dotenv.config();

const Groq = require("groq-sdk");

const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/farmer-ai")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// ======================================
// GROQ SETUP
// ======================================

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// ======================================
// GEMINI SETUP
// ======================================

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

// ======================================
// MULTER SETUP
// ======================================

const storage =
  multer.memoryStorage();

const upload = multer({
  storage: storage,
});



// ======================================
// HOME ROUTE
// ======================================

app.get("/", (req, res) => {

res.send(
  "🌾 Krishi Mitra AI Backend Running"
);
});

// ======================================
// CHAT ROUTE
// ======================================

app.post("/chat", async (req, res) => {

  try {

    const { question } = req.body;

    const chatCompletion =
      await groq.chat.completions.create({

        messages: [

          {
            role: "system",

            content: `
You are an expert agriculture assistant for farmers.

Instructions:
- Give clean and professional answers
- Use headings
- Use bullet points
- Keep answers short
- Use simple Hindi or English
- Use markdown formatting
`,
          },

          {
            role: "user",
            content: question,
          },
        ],

        model:
          "llama-3.3-70b-versatile",
      });

    res.json({
      reply:
        chatCompletion.choices[0]
          .message.content,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Groq API Error",
    });
  }
});

// ======================================
// WEATHER ROUTE
// ======================================

app.get(
  "/weather/:city",
  async (req, res) => {

    try {

      const city =
        req.params.city;

      const weatherRes =
        await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
        );

      const data =
        weatherRes.data;

res.json({
  city: data.name,
  temperature: data.main.temp,
  humidity: data.main.humidity,
  condition: data.weather[0].description,
  windSpeed: data.wind.speed,
  icon: data.weather[0].icon,
});

    } catch (error) {

      console.log(error);

      res.status(500).json({
        error:
          "Weather API Error",
      });
    }
  }
);

// ======================================
// GOVERNMENT SCHEMES ROUTE
// ======================================

app.get("/government-schemes", async (req, res) => {

  try {

    const prompt = `
Give latest Indian farmer government schemes.

Include:
- Scheme name
- Benefits
- Who can apply
- Short eligibility
- Keep answer short and farmer friendly

Format in markdown.
`;

    const result =
      await groq.chat.completions.create({

        model:
          "llama-3.3-70b-versatile",

        messages: [

          {
            role: "system",
            content:
              "You are an Indian agriculture and government schemes expert.",
          },

          {
            role: "user",
            content: prompt,
          },
        ],
      });

    res.json({
      reply:
        result.choices[0]
          .message.content,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error:
        "Government schemes error",
    });
  }
});

// ======================================
// CROP RECOMMENDATION
// ======================================

app.post(
  "/crop-recommend",
  async (req, res) => {

    try {

      const {
        soilType,
        temperature,
        rainfall,
      } = req.body;

      const prompt = `
Suggest best crop for:

Soil Type: ${soilType}
Temperature: ${temperature}°C
Rainfall: ${rainfall} mm

Provide:
1. Best Crop
2. Reason
3. Fertilizer
4. Farming Tips

Format answer in markdown.
`;

      const chatCompletion =
        await groq.chat.completions.create({

          messages: [

            {
              role: "system",
              content:
                "You are an agriculture expert.",
            },

            {
              role: "user",
              content: prompt,
            },
          ],

          model:
            "llama-3.3-70b-versatile",
        });

      res.json({
        reply:
          chatCompletion.choices[0]
            .message.content,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        error:
          "Crop Recommendation Error",
      });
    }
  }
);

// ======================================
// FERTILIZER RECOMMENDATION
// ======================================

app.post("/fertilizer", async (req, res) => {

  try {

    const {
      crop,
      soil,
      stage,
    } = req.body;

    const prompt = `
Suggest fertilizer advice for:

Crop: ${crop}
Soil Type: ${soil}
Crop Stage: ${stage}

Provide:
1. Best Fertilizer
2. Quantity
3. Application Timing
4. Important Tips

Keep answer short and farmer friendly.
`;

    const result =
      await groq.chat.completions.create({

        model:
          "llama-3.3-70b-versatile",

        messages: [

          {
            role: "system",
            content:
              "You are an agriculture fertilizer expert.",
          },

          {
            role: "user",
            content: prompt,
          },
        ],
      });

    res.json({
      reply:
        result.choices[0]
          .message.content,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error:
        "Fertilizer recommendation error",
    });
  }
});

// ======================================
// MARKET PRICE ROUTE
// ======================================
app.get("/market-price/:crop", async (req, res) => {

  try {

    const crop = req.params.crop;

    const prompt = `
Give realistic Indian mandi market prices for ${crop}.

Format in markdown:

# 🌾 Market Price

- Crop Name
- Average Price
- Minimum Price
- Maximum Price
- Best Market
- Best Selling Time

Keep answer short and farmer friendly.
`;

    const result =
      await groq.chat.completions.create({

        model:
          "llama-3.3-70b-versatile",

        messages: [

          {
            role: "system",
            content:
              "You are an Indian agriculture market expert.",
          },

          {
            role: "user",
            content: prompt,
          },
        ],
      });

    res.json({
      reply:
        result.choices[0]
          .message.content,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Market price error",
    });
  }
});


// ======================================
// PLANT DISEASE DETECTION
// ======================================

app.post(
  "/detect-disease",
  upload.single("image"),

  async (req, res) => {

    try {

      if (!req.file) {

        return res.status(400).json({
          error: "No image uploaded",
        });
      }

      // Simple mock logic

      const diseases = [

        {
          name: "Leaf Blight",

          cause:
            "Fungal infection due to humidity",

          treatment:
            "Use copper-based fungicide spray",
        },

        {
          name: "Brown Spot",

          cause:
            "Fungal disease due to poor soil nutrition",

          treatment:
            "Apply balanced NPK fertilizer",
        },

        {
          name: "Rice Blast",

          cause:
            "Fungus in high moisture conditions",

          treatment:
            "Use resistant seed varieties and fungicide",
        },
      ];

      const random =
        diseases[
          Math.floor(
            Math.random() *
              diseases.length
          )
        ];

      res.json({
        message: `
# 🌿 Plant Disease Detection Result

## 🦠 Disease
${random.name}

## 📌 Cause
${random.cause}

## 💊 Treatment
${random.treatment}

## 🛡 Advice
- Regular monitoring of crops
- Avoid overwatering
- Use healthy seeds
`,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        error:
          "Mock AI detection failed",
      });
    }
  }
);

// ======================================
// SERVER
// ======================================

const PORT = 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );
});