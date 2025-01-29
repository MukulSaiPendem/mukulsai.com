const dotenv = require("dotenv")
dotenv.config();
const mailgun = require("mailgun-js");
const Cors = require("cors")
console.log("Starting script...");
// Initialize Mailgun with credentials from environment variables
const DOMAIN = process.env.MAILGUN_DOMAIN;
const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: DOMAIN,
});

console.log("Mailgun initialized:", DOMAIN);

// Initialize the CORS middleware
const cors = Cors({
    origin: "*",
    methods: ["POST", "OPTIONS"],
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

module.exports = async function handler(req, res) {
    console.log("Handler called");

    await runMiddleware(req, res, cors);

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method === "POST") {
        const { name, email, message } = req.body;

        console.log("Incoming POST data:", { name, email, message });

        const emailData = {
            from: `${name} <${email}>`,
            to: process.env.MAILGUN_TO_EMAIL,
            subject: `New Contact Form Submission from ${name}`,
            text: message,
        };

        try {
            await mg.messages().send(emailData);
            console.log("Email sent successfully!");
            return res.status(200).json({ message: "Email sent successfully!" });
        } catch (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({ error: "Failed to send email" });
        }
    } else {
        console.log("Invalid request method:", req.method);
        return res.status(405).json({ error: "Method not allowed" });
    }
}

