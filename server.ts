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

  // Dynamic Sitemap Endpoints
  const getSitemapPaths = () => [
    { path: "#/home", lastmod: "2026-06-13", changefreq: "daily", priority: "1.0" },
    { path: "#/services", lastmod: "2026-06-13", changefreq: "weekly", priority: "0.9" },
    { path: "#/laboratory", lastmod: "2026-06-13", changefreq: "weekly", priority: "0.9" },
    { path: "#/about", lastmod: "2026-06-13", changefreq: "monthly", priority: "0.8" },
    { path: "#/partnership", lastmod: "2026-06-13", changefreq: "monthly", priority: "0.8" },
    { path: "#/faq", lastmod: "2026-06-13", changefreq: "monthly", priority: "0.7" },
    { path: "#/contact", lastmod: "2026-06-13", changefreq: "monthly", priority: "0.8" },
    { path: "#/privacy", lastmod: "2026-06-13", changefreq: "monthly", priority: "0.5" },
    { path: "#/terms", lastmod: "2026-06-13", changefreq: "monthly", priority: "0.5" },
  ];

  app.get("/sitemap.xml", (req, res) => {
    const protocol = req.headers["x-forwarded-proto"] || req.protocol || "http";
    const host = req.get("host") || "localhost:3000";
    const origin = `${protocol}://${host}`;
    const paths = getSitemapPaths();

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map(node => `  <url>
    <loc>${origin}/${node.path}</loc>
    <lastmod>${node.lastmod}</lastmod>
    <changefreq>${node.changefreq}</changefreq>
    <priority>${node.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

    res.header("Content-Type", "application/xml");
    res.send(xml);
  });

  app.get("/sitemap.json", (req, res) => {
    const protocol = req.headers["x-forwarded-proto"] || req.protocol || "http";
    const host = req.get("host") || "localhost:3000";
    const origin = `${protocol}://${host}`;
    const paths = getSitemapPaths();

    res.json({
      origin,
      timestamp: new Date().toISOString(),
      nodes: paths.map(node => ({
        url: `${origin}/${node.path}`,
        lastmod: node.lastmod,
        changefreq: node.changefreq,
        priority: parseFloat(node.priority)
      }))
    });
  });

  app.get("/sitemap.txt", (req, res) => {
    const protocol = req.headers["x-forwarded-proto"] || req.protocol || "http";
    const host = req.get("host") || "localhost:3000";
    const origin = `${protocol}://${host}`;
    const paths = getSitemapPaths();
    const txt = paths.map(node => `${origin}/${node.path}`).join("\n");

    res.header("Content-Type", "text/plain");
    res.send(txt);
  });

  // Robots.txt directing crawlers to dynamic sitemap
  app.get("/robots.txt", (req, res) => {
    const protocol = req.headers["x-forwarded-proto"] || req.protocol || "http";
    const host = req.get("host") || "localhost:3000";
    const origin = `${protocol}://${host}`;

    const txt = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${origin}/sitemap.xml`;

    res.header("Content-Type", "text/plain");
    res.send(txt);
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
