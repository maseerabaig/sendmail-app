require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.get("/sendemail", async (req, res) => {
  try {
   
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    
    const mailOptions = {
      from: `"Masai NEM Student" <${process.env.EMAIL}>`,
      to: `db7583777@gmail.com, venugopal.burli@masaischool.com`,
      subject: "Test Email from NEM Student",
      text: "This is a testing Mail sent by NEM student, no need to reply.",
    };

    
    await transporter.sendMail(mailOptions);

    res.send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email.");
  }
});


app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


