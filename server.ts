import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    console.log("Contact form submission attempt:", { name, email, message });

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Skipping email sending.");
      return res.status(503).json({ 
        error: "Contact service not configured.", 
        details: "Please set RESEND_API_KEY in the application settings." 
      });
    }

    const resendClient = new Resend(process.env.RESEND_API_KEY);

    try {
      console.log("Attempting to send email via Resend to 718gal@gmail.com...");
      const { data, error } = await resendClient.emails.send({
        from: "onboarding@resend.dev",
        to: "718gal@gmail.com",
        subject: `New Inquiry from tactile.studio: ${name}`,
        html: `
          <h1>New Lead from tactile.studio</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        console.error("Resend API Error details:", JSON.stringify(error, null, 2));
        return res.status(500).json({ error: error.message || "Failed to send email via Resend" });
      }

      console.log("Email sent successfully:", data);
      res.json({ success: true, data });
    } catch (err) {
      console.error("Critical error in /api/contact:", err);
      res.status(500).json({ error: "Internal server error: " + (err instanceof Error ? err.message : String(err)) });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
