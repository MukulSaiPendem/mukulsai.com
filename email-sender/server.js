require("dotenv").config(); // Load environment variables
const express = require("express");
const bodyParser = require("body-parser");
const mailgun = require("mailgun-js");

const app = express();
app.use(bodyParser.json());

// Mailgun configuration
const DOMAIN = process.env.MAILGUN_DOMAIN; // Use domain from .env
const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY, // Use API key from .env
    domain: DOMAIN,
});

// Email endpoint
app.post("/send-email", (req, res) => {
    const { name, email, message } = req.body;

    const emailData = {
        from: `${name} <${email}>`,
        to: "pendemmukulsai@gmail.com", // Replace with your recipient email
        subject: `New Contact Form Submission from ${name}`,
        text: message,
    };

    mg.messages().send(emailData, (error, body) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).send("Failed to send email.");
        }
        console.log("Email sent successfully:", body);
        res.status(200).send("Email sent successfully!");
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
