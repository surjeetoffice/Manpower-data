# 🚀 Career Application Form API

A Node.js + Express backend that receives job application form submissions and writes them to a **Google Sheet** using a **Service Account**.

![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen?logo=node.js) ![Express](https://img.shields.io/badge/Express.js-Backend-blue?logo=express) ![Google Sheets API](https://img.shields.io/badge/Google%20Sheets-API-34A853?logo=google-sheets)

---

## 📦 Features

- 📝 Accepts form submissions via POST
- 🔒 Uses Google Service Account for secure auth
- 📊 Appends submitted data to Google Sheets
- 🌐 CORS-enabled API

---

## ⚙️ Tech Stack

- Node.js
- Express
- Google Sheets API
- Google Cloud Service Account

## 2. Install Dependencies
bash
Copy
Edit
npm install
🔐 Google Cloud Setup
Step 1: Create a Service Account
Go to Google Cloud Console

Create a new project or use an existing one.

Navigate to:
IAM & Admin → Service Accounts → Create Service Account

Download the JSON credentials file after creation.

Step 2: Enable Google Sheets API
Go to APIs & Services

Click + ENABLE APIS AND SERVICES

Search for Google Sheets API and enable it.

Step 3: Share the Google Sheet
Open the target Google Sheet

Click “Share”

Paste the client_email from the JSON file (e.g., your-service@your-project.iam.gserviceaccount.com)

Give it Editor access

Click “Send”

🧪 Environment Variables
Create a .env file in your root directory:

env
Copy
Edit
PORT=5000
GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\nMIIEv...\\n-----END PRIVATE KEY-----\\n"
SPREADSHEET_ID=your_google_sheet_id_here
💡 Tip: Escape newlines in your private key with \\n

🚀 Run the Server
bash
Copy
Edit
npx nodemon index.js
Your server should start on:

arduino
Copy
Edit
http://localhost:5000
📬 API Endpoint
POST /api/contact
Saves form data to your Google Sheet.

Request Body
json
Copy
Edit
{
  "name": "John Doe",
  "email": "john@example.com",
  "jobTitle": "Frontend Developer",
  "company": "Google",
  "location": "Bangalore"
}
Response
json
Copy
Edit
{
  "success": true,
  "message": "Application submitted successfully!"
}
📂 Project Structure
pgsql
Copy
Edit
.
├── index.js
├── .env
├── package.json
└── README.md
🧑‍💻 Author
Made with ❤️ by Your Name

☁️ License
MIT License – Free to use and modify.

yaml
Copy
Edit

---

### ✅ To Use:

- Replace `your-service-account@...`, `your_google_sheet_id_here`, and `your-username` as needed.
- You can add badges, links, or even a demo GIF to showcase the form submission.

Would you like a matching frontend `README` too?

---


