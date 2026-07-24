const nodemailer = require("nodemailer");
const dns = require("dns");

// Force IPv4 resolution. Render sometimes fails on IPv6 for Gmail.
dns.setDefaultResultOrder("ipv4first");
const sendEmail = async (options) => {
  // Create a transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    },
    connectionTimeout: 10000, // 10 seconds timeout
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
