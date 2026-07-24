const connectDB = require("./config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");
const multer = require("multer");
const dns = require("dns");

// Fix IPv6 DNS resolution issues on Render
dns.setDefaultResultOrder('ipv4first');

dotenv.config();

// Connect to database
connectDB();

const Groq = require("groq-sdk");

const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");

const app = express();

app.use(cors());
app.use(express.json());

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
// AUTH ROUTES
// ======================================
app.use("/api/auth", require("./routes/authRoutes"));

// ======================================
// HOME ROUTE
// ======================================

app.get("/", (req, res) => {

  res.send(
    "🌾 KrishiMitra AI Backend Running"
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
- Format the entire output strictly as a professional bulleted list using markdown.
- Do not write long paragraphs. Keep it extremely concise.
- Use simple Hindi or English
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
- MUST INCLUDE the official government website link for each scheme formatted as a clickable Markdown link (e.g. [Visit Official Website](https://example.gov.in))
- Provide the answer strictly in markdown format using professional bullet points.
- Do not write long paragraphs. Keep it extremely concise.
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

Format the output strictly as a professional bulleted list using markdown. Do not use long paragraphs. Keep it extremely concise.
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

Format the output strictly as a professional bulleted list using markdown. Keep answer extremely concise, farmer friendly, and strictly avoid paragraphs.
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

Format the output strictly as a professional bulleted list using markdown. Keep answer extremely concise, farmer friendly, and strictly avoid paragraphs.
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

      // Real ML Logic using Gemini Vision AI (Groq Vision is decommissioned and HF is blocked)
      const base64Image = req.file.buffer.toString("base64");
      const mimeType = req.file.mimetype || "image/jpeg";
      
      const promptText = `
You are an expert agricultural scientist. Analyze this plant leaf image.
Identify any disease, its cause, and suggest a treatment.
If it is a healthy leaf, just state that it is healthy and give basic care tips.
Format the output strictly as a professional bulleted list using markdown. 
Do not use long paragraphs. Keep it extremely concise and farmer-friendly.
`;

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const imagePart = {
        inlineData: {
          data: base64Image,
          mimeType: mimeType,
        },
      };

      const result = await model.generateContent([promptText, imagePart]);
      const response = await result.response;
      const text = response.text();

      res.json({
        message: text,
      });

    } catch (error) {
      console.log("Gemini Vision Error:", error);
      res.status(500).json({
        error: "AI detection failed. Make sure your GEMINI_API_KEY starts with AIza... and is valid.",
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