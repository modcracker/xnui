import express from "express";
import path from "path";
import { Resend } from "resend";
import dotenv from "dotenv";
import fs from "fs";
import { fileURLToPath } from "url";
import { generateDynamicSEOContent } from "./src/lib/seoGenerator";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getDistPath = () => {
  const pathsToTry = [
    path.join(process.cwd(), "dist"),
    path.join(__dirname, "dist"),
    path.join(__dirname, "..", "dist"),
    path.resolve("./dist"),
    path.resolve("../dist")
  ];
  
  for (const p of pathsToTry) {
    if (fs.existsSync(path.join(p, "index.html"))) {
      console.log("Found dist folder at:", p);
      return p;
    }
  }
  
  console.error("Could not find dist folder in any of the attempted paths:", pathsToTry);
  return path.join(process.cwd(), "dist"); // Fallback
};

const distPath = getDistPath();

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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
const getSitemapPaths = () => {
  const paths = [
    { path: "/", lastmod: "2026-06-13", changefreq: "daily", priority: "1.0" },
    { path: "/services", lastmod: "2026-06-13", changefreq: "weekly", priority: "0.9" },
    { path: "/laboratory", lastmod: "2026-06-13", changefreq: "weekly", priority: "0.9" },
    { path: "/about", lastmod: "2026-06-13", changefreq: "monthly", priority: "0.8" },
    { path: "/partnership", lastmod: "2026-06-13", changefreq: "monthly", priority: "0.8" },
    { path: "/faq", lastmod: "2026-06-13", changefreq: "monthly", priority: "0.7" },
    { path: "/contact", lastmod: "2026-06-13", changefreq: "monthly", priority: "0.8" },
    { path: "/privacy", lastmod: "2026-06-13", changefreq: "monthly", priority: "0.5" },
    { path: "/terms", lastmod: "2026-06-13", changefreq: "monthly", priority: "0.5" },
    { path: "/services/ux-design", lastmod: "2026-07-02", changefreq: "weekly", priority: "0.8" },
    { path: "/services/brand-strategy", lastmod: "2026-07-02", changefreq: "weekly", priority: "0.8" },
    { path: "/services/web-mechanics", lastmod: "2026-07-02", changefreq: "weekly", priority: "0.8" },
    { path: "/landing/enterprise-ux", lastmod: "2026-07-02", changefreq: "weekly", priority: "0.8" },
    { path: "/funnel/audit-request", lastmod: "2026-07-02", changefreq: "daily", priority: "0.9" },
    { path: "/glossary", lastmod: "2026-07-02", changefreq: "weekly", priority: "0.9" },
    { path: "/services/ux-design/cognitive-friction", lastmod: "2026-07-02", changefreq: "weekly", priority: "0.8" },
    { path: "/services/ux-design/tactile-haptics", lastmod: "2026-07-02", changefreq: "weekly", priority: "0.8" },
    { path: "/services/brand-strategy/typographic-geometry", lastmod: "2026-07-02", changefreq: "weekly", priority: "0.8" },
    { path: "/services/brand-strategy/chromatic-math", lastmod: "2026-07-02", changefreq: "weekly", priority: "0.8" },
    { path: "/services/web-mechanics/elastic-physics", lastmod: "2026-07-02", changefreq: "weekly", priority: "0.8" },
    { path: "/services/web-mechanics/layout-stability", lastmod: "2026-07-02", changefreq: "weekly", priority: "0.8" },
  ];

  // 1. Cognitive Friction Leaf Nodes (8000 items)
  for (let i = 1; i <= 8000; i++) {
    paths.push({
      path: `/services/ux-design/cognitive-friction/metric-coordinate-${i}`,
      lastmod: "2026-07-04",
      changefreq: "weekly",
      priority: "0.6"
    });
  }

  // 2. Tactile Haptic Leaf Nodes (8000 items)
  for (let i = 1; i <= 8000; i++) {
    paths.push({
      path: `/services/ux-design/tactile-haptics/damper-coefficient-${i}`,
      lastmod: "2026-07-04",
      changefreq: "weekly",
      priority: "0.6"
    });
  }

  // 3. Typographic Geometry Leaf Nodes (8000 items)
  for (let i = 1; i <= 8000; i++) {
    paths.push({
      path: `/services/brand-strategy/typographic-geometry/golden-scale-step-${i}`,
      lastmod: "2026-07-04",
      changefreq: "weekly",
      priority: "0.6"
    });
  }

  // 4. Chromatic Math Leaf Nodes (8000 items)
  for (let i = 1; i <= 8000; i++) {
    paths.push({
      path: `/services/brand-strategy/chromatic-math/perceptual-apca-token-${i}`,
      lastmod: "2026-07-04",
      changefreq: "weekly",
      priority: "0.6"
    });
  }

  // 5. Elastic Motion Leaf Nodes (8000 items)
  for (let i = 1; i <= 8000; i++) {
    paths.push({
      path: `/services/web-mechanics/elastic-physics/verlet-particle-${i}`,
      lastmod: "2026-07-04",
      changefreq: "weekly",
      priority: "0.6"
    });
  }

  // 6. Zero Layout Shift Leaf Nodes (8000 items)
  for (let i = 1; i <= 8000; i++) {
    paths.push({
      path: `/services/web-mechanics/layout-stability/cumulative-shift-frame-${i}`,
      lastmod: "2026-07-04",
      changefreq: "weekly",
      priority: "0.6"
    });
  }

  return paths;
};

app.get("/sitemap.xml", (req, res) => {
  const protocol = req.headers["x-forwarded-proto"] || req.protocol || "http";
  const host = req.get("host") || "localhost:3000";
  const origin = `${protocol}://${host}`;
  const paths = getSitemapPaths();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated dynamically by xnui Studio. Full architecture consists of 48,021 active crawled paths. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map(node => `  <url>
    <loc>${node.path === "/" ? origin : `${origin}${node.path}`}</loc>
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
      url: node.path === "/" ? origin : `${origin}${node.path}`,
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
  const txt = paths.map(node => node.path === "/" ? origin : `${origin}${node.path}`).join("\n");

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

// Vite middleware for development (lazy loaded using dynamic expression to prevent Vercel bundle analysis)
let viteDevServer: any = null;
if (process.env.NODE_ENV !== "production") {
  const viteModule = "vite";
  import(viteModule).then(({ createServer }) => {
    createServer({
      server: { middlewareMode: true },
      appType: "spa"
    }).then(vite => {
      viteDevServer = vite;
    });
  }).catch(err => {
    console.error("Failed to load Vite dev server:", err);
  });
}

// Delegate to Vite dev server in development
app.use((req, res, next) => {
  if (viteDevServer) {
    viteDevServer.middlewares(req, res, next);
  } else {
    next();
  }
});

// In production, serve built static files and inject SEO tags
if (process.env.NODE_ENV === "production") {
  app.use(express.static(distPath));

    const seoData: Record<string, { title: string; desc: string; canonical: string; schema: any }> = {
      "/": {
        title: "xnui | Premium Digital Interfaces",
        desc: "xnui is a boutique visual design studio led by expert UX designer Sofia Varian, offering premium UX services and responsive tactile layouts.",
        canonical: "/",
        schema: {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "xnui",
          "url": "https://xnui.com/",
          "description": "Boutique digital design studio crafting high-fidelity design systems, layout blueprints, and tactile web interfaces."
        }
      },
      "/services/ux-design": {
        title: "Bespoke UI/UX Design & Tactile Prototyping Services | xnui Studio",
        desc: "Deep user experience research, human-computer ergonomics layout, and high-fidelity interactive prototyping services led by senior UX designer Sofia Varian.",
        canonical: "/services/ux-design",
        schema: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Bespoke UI/UX Design & Tactile Prototyping",
          "url": "https://xnui.com/services/ux-design",
          "provider": {
            "@type": "Organization",
            "name": "xnui",
            "url": "https://xnui.com/"
          },
          "description": "Premium user experience research, human-computer ergonomics layout, and high-fidelity interactive prototyping services led by Sofia Varian.",
          "serviceType": "UI/UX Design, Usability Optimization"
        }
      },
      "/services/brand-strategy": {
        title: "Premium Graphic Design & Strategic Brand Systems | xnui Studio",
        desc: "Architecting high-impact corporate brand identities, visual style guide handbooks, and precise typographic grids designed for maximum authority.",
        canonical: "/services/brand-strategy",
        schema: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Premium Graphic Design & Strategic Brand Systems",
          "url": "https://xnui.com/services/brand-strategy",
          "provider": {
            "@type": "Organization",
            "name": "xnui",
            "url": "https://xnui.com/"
          },
          "description": "Architecting high-impact corporate brand identities, visual style guide handbooks, and precise typographic grids designed for maximum authority.",
          "serviceType": "Graphic Design, Brand Strategy"
        }
      },
      "/services/web-mechanics": {
        title: "Interactive Web Mechanics & Front-End Engineering | xnui",
        desc: "Translating rich designs into ultra-responsive web experiences. Featuring zero layout shift index, Lighthouse speed optimization, and custom physics simulation code.",
        canonical: "/services/web-mechanics",
        schema: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Interactive Web Mechanics & Front-End Engineering",
          "url": "https://xnui.com/services/web-mechanics",
          "provider": {
            "@type": "Organization",
            "name": "xnui",
            "url": "https://xnui.com/"
          },
          "description": "Translating designs into high-performance web experiences. Featuring zero layout shift index, Lighthouse speed optimization, and custom physics simulation code.",
          "serviceType": "Front-End Engineering, Web Development"
        }
      },
      "/landing/enterprise-ux": {
        title: "Enterprise UX Audits & Product Strategy | Sofia Varian Portfolio",
        desc: "Comprehensive usability audits, contrast compliance assessments, and custom front-end token integration customized to complex fintech and startup systems.",
        canonical: "/landing/enterprise-ux",
        schema: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Enterprise UX Audits & Product Strategy",
          "url": "https://xnui.com/landing/enterprise-ux",
          "description": "Comprehensive usability audits, contrast compliance assessments, and custom front-end token integration customized to complex fintech and startup systems."
        }
      },
      "/funnel/audit-request": {
        title: "Fast-Track Usability & Visual Layout Audit | xnui Studio",
        desc: "Request a diagnostic usability report for your business domain. Calculate loading velocity, shift index, and contrast health with designer suggestions.",
        canonical: "/funnel/audit-request",
        schema: {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Fast-Track Usability & Visual Layout Audit",
          "url": "https://xnui.com/funnel/audit-request",
          "description": "Request a diagnostic usability report for your business domain. Calculate loading velocity, shift index, and contrast health with designer suggestions."
        }
      },
      "/glossary": {
        title: "Interactive UI/UX Design & User Interaction Glossary | xnui Studio",
        desc: "Bespoke encyclopedia of user interface guidelines, kinetic user interaction physics, and adaptive AI design parameters curated by Sofia Varian.",
        canonical: "/glossary",
        schema: {
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          "name": "Interactive UI/UX & User Interaction Glossary",
          "url": "https://xnui.com/glossary",
          "description": "A comprehensive reference index of modern user interface components, user interaction physics, layout shift parameters, and adaptive AI design tokens."
        }
      },
      "/partnership": {
        title: "Strategic Design Partnerships & UX Alliances | xnui Studio",
        desc: "Collaborate with senior designer Sofia Varian. Discover bespoke brand scaling ecosystems, spatial engineering alignment, and joint design-to-development sprints.",
        canonical: "/partnership",
        schema: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Strategic Design Partnerships & UX Alliances",
          "url": "https://xnui.com/partnership",
          "description": "Collaborate with senior designer Sofia Varian on premium design systems, high-fidelity prototypes, and tactile UI/UX development sprints."
        }
      },
      "/about": {
        title: "About xnui Studio & Sofia Varian | Boutique Visual Design",
        desc: "Meet Sofia Varian, principal designer at xnui. Learn about our spatial typography grid layouts, responsive interaction physics, and premium digital craft.",
        canonical: "/about",
        schema: {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About xnui Studio & Sofia Varian",
          "url": "https://xnui.com/about",
          "description": "Learn about the boutique digital design systems and tactical interface engineering philosophy at xnui led by Sofia Varian."
        }
      },
      "/faq": {
        title: "Frequently Asked Questions | xnui Studio Design FAQ",
        desc: "Inquiries answered regarding custom design sprints, APCA contrast validation, Core Web Vital speed optimization, and our handoff methodology.",
        canonical: "/faq",
        schema: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "name": "Frequently Asked Questions",
          "url": "https://xnui.com/faq",
          "description": "Common inquiries answered regarding bespoke design systems, layout calibration, and technical front-end handoff."
        }
      },
      "/contact": {
        title: "Inquire & Start a Custom Design Sprint | xnui Studio",
        desc: "Initiate contact with principal designer Sofia Varian. Schedule strategic visual layout sprints, brand systems consulting, or deep usability audits.",
        canonical: "/contact",
        schema: {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Inquire & Start a Custom Design Sprint",
          "url": "https://xnui.com/contact",
          "description": "Get in touch with Sofia Varian to commission premium design systems, custom typography grids, or deep UX audits."
        }
      },
      "/privacy": {
        title: "Privacy Policy | xnui Studio Data Compliance",
        desc: "Data handling and user transparency guidelines for xnui digital interactive experiences and custom visual studio products.",
        canonical: "/privacy",
        schema: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Privacy Policy",
          "url": "https://xnui.com/privacy",
          "description": "Privacy compliance policy specifying user data transparency parameters at xnui."
        }
      },
      "/terms": {
        title: "Terms of Service & Licensing Agreements | xnui Studio",
        desc: "Operational frameworks, typographic asset licensing, and design sprint terms for clients and strategic studio partnerships.",
        canonical: "/terms",
        schema: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Terms of Service & Licensing Agreements",
          "url": "https://xnui.com/terms",
          "description": "Operational terms and intellectual property licenses for custom design deliverables."
        }
      }
    };

    let cachedIndexHtml: string | null = null;

    app.get("*", (req, res) => {
      try {
        const indexPath = path.join(distPath, "index.html");
        if (!cachedIndexHtml) {
          if (fs.existsSync(indexPath)) {
            cachedIndexHtml = fs.readFileSync(indexPath, "utf-8");
          } else {
            console.error("index.html not found at:", indexPath);
            return res.status(500).send("Application Build Error: dist/index.html is missing.");
          }
        }

        const activePath = req.path;
        let matchedSeo = seoData[activePath];

        if (!matchedSeo) {
          if (activePath.startsWith("/services/ux-design/cognitive-friction/metric-coordinate-")) {
            const num = activePath.substring("/services/ux-design/cognitive-friction/metric-coordinate-".length);
            const content = generateDynamicSEOContent("cognitive-friction", num);
            matchedSeo = {
              title: content.title,
              desc: content.desc,
              canonical: activePath,
              schema: {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": content.heading,
                "url": `https://xnui.com${activePath}`,
                "description": content.desc
              }
            };
          } else if (activePath.startsWith("/services/ux-design/tactile-haptics/damper-coefficient-")) {
            const num = activePath.substring("/services/ux-design/tactile-haptics/damper-coefficient-".length);
            const content = generateDynamicSEOContent("tactile-haptics", num);
            matchedSeo = {
              title: content.title,
              desc: content.desc,
              canonical: activePath,
              schema: {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": content.heading,
                "url": `https://xnui.com${activePath}`,
                "description": content.desc
              }
            };
          } else if (activePath.startsWith("/services/brand-strategy/typographic-geometry/golden-scale-step-")) {
            const num = activePath.substring("/services/brand-strategy/typographic-geometry/golden-scale-step-".length);
            const content = generateDynamicSEOContent("typographic-geometry", num);
            matchedSeo = {
              title: content.title,
              desc: content.desc,
              canonical: activePath,
              schema: {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": content.heading,
                "url": `https://xnui.com${activePath}`,
                "description": content.desc
              }
            };
          } else if (activePath.startsWith("/services/brand-strategy/chromatic-math/perceptual-apca-token-")) {
            const num = activePath.substring("/services/brand-strategy/chromatic-math/perceptual-apca-token-".length);
            const content = generateDynamicSEOContent("chromatic-math", num);
            matchedSeo = {
              title: content.title,
              desc: content.desc,
              canonical: activePath,
              schema: {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": content.heading,
                "url": `https://xnui.com${activePath}`,
                "description": content.desc
              }
            };
          } else if (activePath.startsWith("/services/web-mechanics/elastic-physics/verlet-particle-")) {
            const num = activePath.substring("/services/web-mechanics/elastic-physics/verlet-particle-".length);
            const content = generateDynamicSEOContent("elastic-physics", num);
            matchedSeo = {
              title: content.title,
              desc: content.desc,
              canonical: activePath,
              schema: {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": content.heading,
                "url": `https://xnui.com${activePath}`,
                "description": content.desc
              }
            };
          } else if (activePath.startsWith("/services/web-mechanics/layout-stability/cumulative-shift-frame-")) {
            const num = activePath.substring("/services/web-mechanics/layout-stability/cumulative-shift-frame-".length);
            const content = generateDynamicSEOContent("layout-stability", num);
            matchedSeo = {
              title: content.title,
              desc: content.desc,
              canonical: activePath,
              schema: {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": content.heading,
                "url": `https://xnui.com${activePath}`,
                "description": content.desc
              }
            };
          } else {
            matchedSeo = seoData["/"];
          }
        }

        let finalHtml = cachedIndexHtml!;

        // 1. Title tag injection
        finalHtml = finalHtml.replace(
          /<title>.*?<\/title>/,
          `<title>${matchedSeo.title}</title>`
        );

        // 2. Meta description injection
        finalHtml = finalHtml.replace(
          /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
          `<meta name="description" content="${matchedSeo.desc}" />`
        );

        // 3. OpenGraph dynamic injection
        finalHtml = finalHtml.replace(
          /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
          `<meta property="og:title" content="${matchedSeo.title}" />`
        );
        finalHtml = finalHtml.replace(
          /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
          `<meta property="og:description" content="${matchedSeo.desc}" />`
        );
        finalHtml = finalHtml.replace(
          /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
          `<meta property="og:url" content="https://xnui.com${matchedSeo.canonical}" />`
        );

        // 4. Twitter tags dynamic injection
        finalHtml = finalHtml.replace(
          /<meta\s+property="twitter:title"\s+content=".*?"\s*\/?>/i,
          `<meta property="twitter:title" content="${matchedSeo.title}" />`
        );
        finalHtml = finalHtml.replace(
          /<meta\s+property="twitter:description"\s+content=".*?"\s*\/?>/i,
          `<meta property="twitter:description" content="${matchedSeo.desc}" />`
        );
        finalHtml = finalHtml.replace(
          /<meta\s+property="twitter:url"\s+content=".*?"\s*\/?>/i,
          `<meta property="twitter:url" content="https://xnui.com${matchedSeo.canonical}" />`
        );

        // 5. Canonical link dynamic injection
        finalHtml = finalHtml.replace(
          /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
          `<link rel="canonical" href="https://xnui.com${matchedSeo.canonical}" />`
        );

        // 6. JSON-LD structured schema script dynamic injection
        finalHtml = finalHtml.replace(
          /<script\s+id="dynamic-jsonld"\s+type="application\/ld\+json">.*?<\/script>/is,
          `<script id="dynamic-jsonld" type="application/ld+json">${JSON.stringify(matchedSeo.schema, null, 2)}</script>`
        );

        res.header("Content-Type", "text/html");
        res.send(finalHtml);
      } catch (err) {
        console.error("Failed to inject meta tags into index.html:", err);
        const indexPath = path.join(distPath, "index.html");
        if (fs.existsSync(indexPath)) {
          res.sendFile(indexPath);
        } else {
          res.status(500).send("Failed to inject SEO tags and dist/index.html is missing.");
        }
      }
    });
  }

  // Only start listening when not running on Vercel
  if (!process.env.VERCEL) {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }

export default app;
