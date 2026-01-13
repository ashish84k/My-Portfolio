const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1 style='color:red'>Server is running...</h1>");
});

app.post("/api/email", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // ✅ Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // ✅ Brevo API call (WAIT till email sent)
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Portfolio Contact",
          email: "ashishshen20@gmail.com",
        },
        to: [
          {
            email: "ashishshen20@gmail.com",
            name: "HR",
          },
        ],
        subject: subject,
        htmlContent: `
          <h3>New Portfolio Message</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b></p>
          <p>${message}</p>
          
        `,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
        timeout: 10000, // 10 sec wait
      }
    );

    // ✅ Email successfully sent
    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error("Email Error:", error.response?.data || error.message);

    return res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
