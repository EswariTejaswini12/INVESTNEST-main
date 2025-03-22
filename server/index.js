const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // Import dotenv to load environment variables

const app = express();

// Enable CORS for all requests
app.use(cors());

// Middleware
app.use(bodyParser.json()); // Parse incoming requests as JSON

// Create a transport using your email and app password
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,  // Using environment variable for email
    pass: process.env.EMAIL_PASS,  // Using environment variable for app password
  },
  tls: {
    rejectUnauthorized: false,
  },
  connectionTimeout: 30000,  // 30 seconds for connection timeout
  greetingTimeout: 15000,    // 15 seconds for greeting timeout
  port: 587,                 // Use port 587 for TLS
  secure: false,             // Don't use SSL (use TLS instead)
});

// POST route to handle email sending
app.post("/send-email", (req, res) => {
  const { email } = req.body;

  // Validate email format
  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Validates Gmail email addresses only
  if (!email || !email.match(emailPattern)) {
    console.log("Invalid email format");
    return res.status(400).send("Invalid email. Please provide a valid Gmail address.");
  }

  const mailOptions = {
    from: process.env.EMAIL_USER, // Gmail address (from environment variable)
    to: email,                    // Recipient email (from request body)
    subject: "Thank You for Subscribing",
    text: "Thank you for subscribing to our newsletter! Stay tuned for exclusive updates, insights, and opportunities delivered straight to your inbox.", // Email content
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
      return res.status(500).send("Failed to send email. Please try again later.");
    } else {
      console.log("Email sent successfully:", info.response);
      return res.status(200).send("Email sent successfully");
    }
  });
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});