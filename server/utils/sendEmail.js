const axios = require("axios");

const sendEmail = async (options) => {
  if (!process.env.BREVO_API_KEY) {
    console.error("Missing BREVO_API_KEY in environment variables.");
    throw new Error("Email service is not configured.");
  }

  const emailData = {
    sender: {
      name: process.env.FROM_NAME || "KrishiMitra AI",
      email: process.env.FROM_EMAIL || "manjeet06dec@gmail.com",
    },
    to: [
      {
        email: options.email,
      },
    ],
    subject: options.subject,
    textContent: options.message,
  };

  try {
    const response = await axios.post("https://api.brevo.com/v3/smtp/email", emailData, {
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json",
        accept: "application/json",
      },
    });
    console.log("Email sent successfully via Brevo: ", response.data.messageId);
  } catch (error) {
    console.error("Error sending email via Brevo: ", error.response?.data || error.message);
    throw new Error("Failed to send email");
  }
};

module.exports = sendEmail;
