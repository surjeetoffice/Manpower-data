require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { google } = require("googleapis");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Google Sheets Auth setup
const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');
const auth = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    privateKey, ["https://www.googleapis.com/auth/spreadsheets"]
);

const sheets = google.sheets({ version: "v4", auth });
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const SHEET_NAME = "Sheet1"; // Change if your sheet tab name is different

// POST endpoint to receive form data and save to Google Sheet
app.post("/api/contact", async(req, res) => {
    const { name, email, jobTitle, company, location } = req.body;

    if (!name || !email || !jobTitle || !company || !location) {
        return res.status(400).json({ success: false, message: "Missing required fields." });
    }

    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!A1`,
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [
                        name,
                        email,
                        jobTitle,
                        company,
                        location,
                        new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
                    ],
                ],
            },
        });

        res.json({ success: true, message: "Application submitted successfully!" });
    } catch (error) {
        console.error("Error submitting to Google Sheets:", error);
        res.status(500).json({ success: false, message: "Failed to submit application." });
    }
});

// Default route
app.get("/", (req, res) => {
    res.send("Career API is running!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});