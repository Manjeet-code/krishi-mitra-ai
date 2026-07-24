const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // Create a transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465,
    secure: process.env.SMTP_PORT === "587" ? false : true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    connectionTimeout: 10000, // 10 seconds timeout instead of hanging forever
    socketTimeout: 10000,
  });

  // Define the email options
  const message = {
    from: `${process.env.FROM_NAME || "KrishiMitra AI"} <${process.env.SMTP_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // Actually send the email
  const info = await transporter.sendMail(message);
  console.log("Email sent successfully: %s", info.messageId);
};

module.exports = sendEmail;
