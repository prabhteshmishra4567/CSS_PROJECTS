const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Replace this with your actual API key
const DEEPSEEK_API_KEY = "your_actual_api_key";

// Define the /ask route
app.post("/ask", async (req, res) => {
    try {
        const userMessage = req.body.message;
        if (!userMessage) {
            return res.status(400).json({ error: "Message is required" });
        }

        console.log("User message:", userMessage); // Debugging log

        // Make API request to DeepSeek
        const response = await axios.post(
            "https://api.deepseek.com/chat", // Verify the correct endpoint
            { query: userMessage }, // Ensure correct request structure
            {
                headers: {
                    Authorization: `Bearer ${"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"}`,
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("DeepSeek API response:", response.data); // Debugging log
        res.json(response.data);
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        res.status(500).json({ error: error.response?.data || "Internal Server Error" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
