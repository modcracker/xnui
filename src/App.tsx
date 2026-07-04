/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { generateDynamicSEOContent } from "./lib/seoGenerator";

// Lazy load non-critical sections below-the-fold
const Services = lazy(() => import("./components/Services"));
const Laboratory = lazy(() => import("./components/Laboratory"));
const FAQ = lazy(() => import("./components/FAQ"));
const Contact = lazy(() => import("./components/Contact"));
const Partnership = lazy(() => import("./components/Partnership"));
const About = lazy(() => import("./components/About"));
const Privacy = lazy(() => import("./components/Privacy"));
const Terms = lazy(() => import("./components/Terms"));
const Sitemap = lazy(() => import("./components/Sitemap"));
const ServiceUX = lazy(() => import("./components/ServiceUX"));
const ServiceBrand = lazy(() => import("./components/ServiceBrand"));
const ServiceWeb = lazy(() => import("./components/ServiceWeb"));
const LandingEnterprise = lazy(() => import("./components/LandingEnterprise"));
const FunnelAudit = lazy(() => import("./components/FunnelAudit"));
const Glossary = lazy(() => import("./components/Glossary"));
const ServiceDeepDive = lazy(() => import("./components/ServiceDeepDive"));

// Low-overhead placeholder to prevent viewport shifts with a sleek design loader card
function SectionLoader() {
  return (
    <div className="py-16 md:py-24 flex flex-col items-center justify-center bg-white min-h-[360px] animate-pulse">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="w-8 h-8 border border-black/[0.05] border-t-[#0070f3] rounded-full animate-spin absolute" />
        <div className="w-4 h-4 border border-[#00ffd5]/[0.15] rounded-full" />
      </div>
      <span className="font-sans text-xs text-black/45 mt-4">Streaming content...</span>
    </div>
  );
}

const SEOMapping: Record<string, { title: string; desc: string; canonical: string }> = {
  'home': {
    title: 'xnui | Premium Visual Designer & Elite UX Designer Portfolio',
    desc: 'Boutique visual design studio led by senior graphic designer and UX designer Sofia Varian. Discover premium UX services, high-fidelity design layouts, and tactile responsive webs.',
    canonical: '/'
  },
  'services': {
    title: 'Professional Graphic & UX Services | xnui Elastic Workspace',
    desc: 'We provide specialized UX services, visual design solutions, custom responsive typography layouts, and interactive spring-mechanic design systems.',
    canonical: '/services'
  },
  'laboratory': {
    title: 'Interactive Laboratory | xnui Visual & Motion Experiments',
    desc: 'Explore high-fidelity visual experiments, real-time UX simulation, spring reaction layouts, Verlet cloth dynamics, and coordinate mechanics.',
    canonical: '/laboratory'
  },
  'about': {
    title: 'Visual Designer Bio | Sofia Varian - Lead UX Service Architect',
    desc: 'Learn about the professional career of lead visual designer and graphic design specialist Sofia Varian, and the operating pillars of the xnui studio.',
    canonical: '/about'
  },
  'partnership': {
    title: 'Feelize Corporation Partnership | xnui Studio Certification',
    desc: 'Details on our elite certified design partnership & licensed verification system with Feelize Corporation for premium integrations.',
    canonical: '/partnership'
  },
  'faq': {
    title: 'Tactical FAQ | xnui Design Systems and Mechanics Support',
    desc: 'Answers to inquiries regarding dynamic coordinate licensing, engineering support, tactile physics, spring formulas, and custom builds.',
    canonical: '/faq'
  },
  'contact': {
    title: 'Inquiry Tunnel | Contact xnui Studio',
    desc: 'Initiate layout system commissions, interactive engineering integrations, or schedule partner coordinate consultations with xnui.',
    canonical: '/contact'
  },
  'privacy': {
    title: 'Privacy Protocol & State Encryptions | xnui',
    desc: 'Our commitment to database safety, local client-side persistence consent, browser storage encryption, and transparency protocol.',
    canonical: '/privacy'
  },
  'terms': {
    title: 'Terms of Engagement & Design Licensing Rules | xnui',
    desc: 'Layout system parameters, spring math usage guidelines, interactive intellectual property licensing, and customer rights agreements.',
    canonical: '/terms'
  },
  'sitemap': {
    title: 'Unified Site Architecture Map & SEO Directory | xnui',
    desc: 'Sitemap indexing directory available in Visual HTML, structured XML schema, JSON API payload, and plain text URL list.',
    canonical: '/sitemap'
  },
  'services-ux': {
    title: 'Bespoke UI/UX Design & Tactile Prototyping Services | xnui Studio',
    desc: 'Deep user experience research, human-computer ergonomics layout, and high-fidelity interactive prototyping services led by senior UX designer Sofia Varian.',
    canonical: '/services/ux-design'
  },
  'services-brand': {
    title: 'Premium Graphic Design & Strategic Brand Systems | xnui Studio',
    desc: 'Architecting high-impact corporate brand identities, visual style guide handbooks, and precise typographic grids designed for maximum authority.',
    canonical: '/services/brand-strategy'
  },
  'services-web': {
    title: 'Interactive Web Mechanics & Front-End Engineering | xnui',
    desc: 'Translating rich designs into ultra-responsive web experiences. Featuring zero layout shift index, Lighthouse speed optimization, and custom physics simulation code.',
    canonical: '/services/web-mechanics'
  },
  'landing-enterprise': {
    title: 'Enterprise UX Audits & Product Strategy | Sofia Varian Portfolio',
    desc: 'Comprehensive usability audits, contrast compliance assessments, and custom front-end token integration customized to complex fintech and startup systems.',
    canonical: '/landing/enterprise-ux'
  },
  'funnel-audit': {
    title: 'Fast-Track Usability & Visual Layout Audit | xnui Studio',
    desc: 'Request a diagnostic usability report for your business domain. Calculate loading velocity, shift index, and contrast health with designer suggestions.',
    canonical: '/funnel/audit-request'
  },
  'glossary': {
    title: 'Interactive UI/UX Design & User Interaction Glossary | xnui Studio',
    desc: 'Bespoke encyclopedia of user interface guidelines, kinetic user interaction physics, and adaptive AI design parameters curated by Sofia Varian.',
    canonical: '/glossary'
  },
  'cognitive-friction': {
    title: 'Cognitive Friction Optimization & Fitts\'s Law | xnui Studio',
    desc: 'Deep user experience latency calculations. Optimize padding formulas and tap recognition coordinates for elite user retention.',
    canonical: '/services/ux-design/cognitive-friction'
  },
  'tactile-haptics': {
    title: 'Tactile Viewport Haptics & Spring Physics | xnui Studio',
    desc: 'Implementing organic physical damping and spring constants for glass touch surfaces. Experience true structural inertia.',
    canonical: '/services/ux-design/tactile-haptics'
  },
  'typographic-geometry': {
    title: 'Typographic Grid Geometry & Swiss Proportions | xnui Studio',
    desc: 'Precision layout scaling systems centered on the golden ratio (1.618). Smooth responsive scaling without viewport jumps.',
    canonical: '/services/brand-strategy/typographic-geometry'
  },
  'chromatic-math': {
    title: 'Chromatic Contrast Mathematics & APCA Perceptual Contrasts | xnui',
    desc: 'Advanced Predictive Contrast Algorithm color token grids. Calculate actual perceptual contrast across dark and light canvases.',
    canonical: '/services/brand-strategy/chromatic-math'
  },
  'elastic-physics': {
    title: 'Elastic Motion Physics & Verlet Particle Canvases | xnui Studio',
    desc: 'Real-time mass-spring Verlet constraints. Let front-end UI components warp, drape, and snap with physical accuracy.',
    canonical: '/services/web-mechanics/elastic-physics'
  },
  'layout-stability': {
    title: 'Zero Layout Shift Mechanics & CLS Core Web Vital Protocols | xnui',
    desc: 'Guaranteeing a Cumulative Layout Shift score of 0.000. Real-time aspect-ratio locking skeleton systems.',
    canonical: '/services/web-mechanics/layout-stability'
  }
};

const JSONLDMapping: Record<string, any> = {
  'home': {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "xnui",
    "alternateName": "Tactile Visual Design & UX Studio",
    "url": "https://xnui.com/",
    "description": "Boutique digital visual design studio and portfolio of leading graphic designer and UX designer Sofia Varian, specializing in high-fidelity design systems, layout blueprints, and premium UX services.",
    "publisher": {
      "@type": "Organization",
      "name": "xnui Visual Design",
      "url": "https://xnui.com/",
      "logo": "https://xnui.com/logo.svg",
      "sameAs": [
        "https://www.linkedin.com/company/xnui/"
      ]
    }
  },
  'services': {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "xnui Professional Graphic & UX Services",
    "url": "https://xnui.com/#/services",
    "category": "Graphic Design, Visual Design, UX Designer, UX Service",
    "offers": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Premium UX Service & Design Planning",
          "description": "Premium user experience research, human-computer ergonomics layout, and interactive prototyping services."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "High-End Visual Designer Layout Blueprints",
          "description": "Expert visual designer blueprints, brand wireframes, high-contrast layouts, and typographic grids."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bespoke Graphic Design & Animation Mechanics",
          "description": "Custom vector design solutions, sleek micro-interaction typography, and premium web animations."
        }
      }
    ]
  },
  'laboratory': {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "xnui Interactive Laboratory",
    "description": "Simulation cluster showcasing modular web experimentations, kinetic behaviors, and real-time state models.",
    "url": "https://xnui.com/#/laboratory",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Verlet Cloth Dynamics Simulation",
          "description": "Kinetic mass-spring node systems allowing live tear, pull, and elastic drag manipulations."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tactile Fluid Ripple Field",
          "description": "Real-time interactive canvas mimicking density dispersion and coordinate turbulence reactions."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dynamic Spring Grid Mechanics",
          "description": "Sub-pixel physics simulation with adjustable friction, tension, and coordinate damping factors."
        }
      ]
    }
  },
  'about': {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "About Lead Visual Designer & UX Specialist Sofia Varian",
    "url": "https://xnui.com/#/about",
    "mainEntity": {
      "@type": "Person",
      "name": "Sofia Varian",
      "jobTitle": "Lead Visual Designer, Senior UX Designer, and Graphic Design Architect",
      "worksFor": {
        "@type": "Organization",
        "name": "xnui Studio",
        "url": "https://xnui.com/"
      },
      "knowsAbout": [
        "Graphic Design",
        "Visual Design",
        "UX Designer Portfolio",
        "UI UX Service",
        "Design Systems",
        "Tactile Engineering",
        "Spatial Computation"
      ],
      "description": "Sofia Varian is an interface architect, professional visual designer, and graphic designer who spent over a decade crafting elite UX services, interactive computing layouts, and premium digital systems.",
      "image": "https://xnui.com/src/assets/images/founder_portrait_1781393543128.jpg"
    }
  },
  'partnership': {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Feelize Corporation certified Partnership - xnui",
    "description": "Elite certified design partnership & licensed verification system with Feelize Corporation for premium integrations.",
    "url": "https://xnui.com/#/partnership"
  },
  'faq': {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is premium tactile interface design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Premium tactile design introduces sensory weight, organic drag, and spring-damper equations into digital web structures. This ensures user gestures are greeted with organic reaction and beautiful, immersive momentum feelings."
        }
      },
      {
        "@type": "Question",
        "name": "How does xnui coordinate layout system integrate with existing technologies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our systems compile to pure, low-overhead React and CSS structures using standard Tailwind. They are designed to interlock nicely into spatial computing frameworks or high-fidelity enterprise portals."
        }
      },
      {
        "@type": "Question",
        "name": "What custom mechanics are available in the xnui laboratory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide Verlet particle-system integrations, fluid density simulations, spring dynamics, kinetic magnetism buttons, and luxury coordinate-response interfaces."
        }
      }
    ]
  },
  'contact': {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Inquiry Tunnel & Project Intake",
    "url": "https://xnui.com/#/contact",
    "description": "Submit a secure project design inquiry, integration request, or layout coordinates briefing with xnui Interactive design team."
  },
  'privacy': {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Protocol - xnui",
    "url": "https://xnui.com/#/privacy"
  },
  'terms': {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Engagement - xnui",
    "url": "https://xnui.com/#/terms"
  },
  'sitemap': {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Unified Site Architecture Map & Directory - xnui",
    "url": "https://xnui.com/sitemap"
  },
  'services-ux': {
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
  },
  'services-brand': {
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
  },
  'services-web': {
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
  },
  'landing-enterprise': {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Enterprise UX Audits & Product Strategy",
    "url": "https://xnui.com/landing/enterprise-ux",
    "description": "Comprehensive usability audits, contrast compliance assessments, and custom front-end token integration customized to complex fintech and startup systems."
  },
  'funnel-audit': {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Fast-Track Usability & Visual Layout Audit",
    "url": "https://xnui.com/funnel/audit-request",
    "description": "Request a diagnostic usability report for your business domain. Calculate loading velocity, shift index, and contrast health with designer suggestions."
  },
  'glossary': {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "Interactive UI/UX & User Interaction Glossary",
    "url": "https://xnui.com/glossary",
    "description": "A comprehensive reference index of modern user interface components, user interaction physics, layout shift parameters, and adaptive AI design tokens.",
    "hasDefinedTerm": [
      {
        "@type": "DefinedTerm",
        "name": "User Interface (UI) Design",
        "description": "The visual and structural composition of digital applications, prioritizing spatial grid alignments and typography."
      },
      {
        "@type": "DefinedTerm",
        "name": "User Interaction (IxD) Mechanics",
        "description": "The physical, temporal, and kinetic feedback loop between a human gesture and the interface's responsive reaction."
      },
      {
        "@type": "DefinedTerm",
        "name": "AI Design & Generative Interfaces",
        "description": "The architectural framework where user interfaces dynamically adapt, morph, and pre-render in real-time."
      }
    ]
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact' | 'partnership' | 'about' | 'faq' | 'privacy' | 'terms' | 'sitemap' | 'services-ux' | 'services-brand' | 'services-web' | 'landing-enterprise' | 'funnel-audit' | 'glossary' | 'deep-dive'>('home');
  const [currentSubPageId, setCurrentSubPageId] = useState<string>("cognitive-friction");

  useEffect(() => {
    const handleRoute = () => {
      const pathname = window.location.pathname;
      const hash = window.location.hash || "";

      let routeKey = "home";
      let isLeafMatch = false;
      let leafSubPageId = "";
      let leafRouteKey = "";

      // 1a. Dynamic deep sub-service leaf nodes
      if (pathname.startsWith("/services/ux-design/cognitive-friction/metric-coordinate-")) {
        const id = pathname.substring("/services/ux-design/cognitive-friction/metric-coordinate-".length);
        leafRouteKey = "cognitive-friction";
        leafSubPageId = `cognitive-friction-leaf-${id}`;
        isLeafMatch = true;
      } else if (pathname.startsWith("/services/ux-design/tactile-haptics/damper-coefficient-")) {
        const id = pathname.substring("/services/ux-design/tactile-haptics/damper-coefficient-".length);
        leafRouteKey = "tactile-haptics";
        leafSubPageId = `tactile-haptics-leaf-${id}`;
        isLeafMatch = true;
      } else if (pathname.startsWith("/services/brand-strategy/typographic-geometry/golden-scale-step-")) {
        const id = pathname.substring("/services/brand-strategy/typographic-geometry/golden-scale-step-".length);
        leafRouteKey = "typographic-geometry";
        leafSubPageId = `typographic-geometry-leaf-${id}`;
        isLeafMatch = true;
      } else if (pathname.startsWith("/services/brand-strategy/chromatic-math/perceptual-apca-token-")) {
        const id = pathname.substring("/services/brand-strategy/chromatic-math/perceptual-apca-token-".length);
        leafRouteKey = "chromatic-math";
        leafSubPageId = `chromatic-math-leaf-${id}`;
        isLeafMatch = true;
      } else if (pathname.startsWith("/services/web-mechanics/elastic-physics/verlet-particle-")) {
        const id = pathname.substring("/services/web-mechanics/elastic-physics/verlet-particle-".length);
        leafRouteKey = "elastic-physics";
        leafSubPageId = `elastic-physics-leaf-${id}`;
        isLeafMatch = true;
      } else if (pathname.startsWith("/services/web-mechanics/layout-stability/cumulative-shift-frame-")) {
        const id = pathname.substring("/services/web-mechanics/layout-stability/cumulative-shift-frame-".length);
        leafRouteKey = "layout-stability";
        leafSubPageId = `layout-stability-leaf-${id}`;
        isLeafMatch = true;
      }

      // Fallback for hash dynamic urls
      if (!isLeafMatch) {
        if (hash.startsWith("#/services/ux-design/cognitive-friction/metric-coordinate-") || hash.startsWith("#services/ux-design/cognitive-friction/metric-coordinate-")) {
          const prefix = hash.startsWith("#/") ? "#/services/ux-design/cognitive-friction/metric-coordinate-" : "#services/ux-design/cognitive-friction/metric-coordinate-";
          const id = hash.substring(prefix.length);
          leafRouteKey = "cognitive-friction";
          leafSubPageId = `cognitive-friction-leaf-${id}`;
          isLeafMatch = true;
        } else if (hash.startsWith("#/services/ux-design/tactile-haptics/damper-coefficient-") || hash.startsWith("#services/ux-design/tactile-haptics/damper-coefficient-")) {
          const prefix = hash.startsWith("#/") ? "#/services/ux-design/tactile-haptics/damper-coefficient-" : "#services/ux-design/tactile-haptics/damper-coefficient-";
          const id = hash.substring(prefix.length);
          leafRouteKey = "tactile-haptics";
          leafSubPageId = `tactile-haptics-leaf-${id}`;
          isLeafMatch = true;
        } else if (hash.startsWith("#/services/brand-strategy/typographic-geometry/golden-scale-step-") || hash.startsWith("#services/brand-strategy/typographic-geometry/golden-scale-step-")) {
          const prefix = hash.startsWith("#/") ? "#/services/brand-strategy/typographic-geometry/golden-scale-step-" : "#services/brand-strategy/typographic-geometry/golden-scale-step-";
          const id = hash.substring(prefix.length);
          leafRouteKey = "typographic-geometry";
          leafSubPageId = `typographic-geometry-leaf-${id}`;
          isLeafMatch = true;
        } else if (hash.startsWith("#/services/brand-strategy/chromatic-math/perceptual-apca-token-") || hash.startsWith("#services/brand-strategy/chromatic-math/perceptual-apca-token-")) {
          const prefix = hash.startsWith("#/") ? "#/services/brand-strategy/chromatic-math/perceptual-apca-token-" : "#services/brand-strategy/chromatic-math/perceptual-apca-token-";
          const id = hash.substring(prefix.length);
          leafRouteKey = "chromatic-math";
          leafSubPageId = `chromatic-math-leaf-${id}`;
          isLeafMatch = true;
        } else if (hash.startsWith("#/services/web-mechanics/elastic-physics/verlet-particle-") || hash.startsWith("#services/web-mechanics/elastic-physics/verlet-particle-")) {
          const prefix = hash.startsWith("#/") ? "#/services/web-mechanics/elastic-physics/verlet-particle-" : "#services/web-mechanics/elastic-physics/verlet-particle-";
          const id = hash.substring(prefix.length);
          leafRouteKey = "elastic-physics";
          leafSubPageId = `elastic-physics-leaf-${id}`;
          isLeafMatch = true;
        } else if (hash.startsWith("#/services/web-mechanics/layout-stability/cumulative-shift-frame-") || hash.startsWith("#services/web-mechanics/layout-stability/cumulative-shift-frame-")) {
          const prefix = hash.startsWith("#/") ? "#/services/web-mechanics/layout-stability/cumulative-shift-frame-" : "#services/web-mechanics/layout-stability/cumulative-shift-frame-";
          const id = hash.substring(prefix.length);
          leafRouteKey = "layout-stability";
          leafSubPageId = `layout-stability-leaf-${id}`;
          isLeafMatch = true;
        }
      }

      // 1. Direct path matches (HTML5 clean urls)
      if (isLeafMatch) {
        routeKey = leafRouteKey;
      } else if (pathname === "/contact") routeKey = "contact";
      else if (pathname === "/partnership") routeKey = "partnership";
      else if (pathname === "/about") routeKey = "about";
      else if (pathname === "/faq") routeKey = "faq";
      else if (pathname === "/privacy") routeKey = "privacy";
      else if (pathname === "/terms") routeKey = "terms";
      else if (pathname === "/sitemap") routeKey = "sitemap";
      else if (pathname === "/services") routeKey = "services";
      else if (pathname === "/laboratory" || pathname === "/lab") routeKey = "laboratory";
      else if (pathname === "/services/ux-design") routeKey = "services-ux";
      else if (pathname === "/services/brand-strategy") routeKey = "services-brand";
      else if (pathname === "/services/web-mechanics") routeKey = "services-web";
      else if (pathname === "/landing/enterprise-ux") routeKey = "landing-enterprise";
      else if (pathname === "/funnel/audit-request") routeKey = "funnel-audit";
      else if (pathname === "/glossary") routeKey = "glossary";
      else if (pathname === "/services/ux-design/cognitive-friction") { routeKey = "cognitive-friction"; setCurrentSubPageId("cognitive-friction"); }
      else if (pathname === "/services/ux-design/tactile-haptics") { routeKey = "tactile-haptics"; setCurrentSubPageId("tactile-haptics"); }
      else if (pathname === "/services/brand-strategy/typographic-geometry") { routeKey = "typographic-geometry"; setCurrentSubPageId("typographic-geometry"); }
      else if (pathname === "/services/brand-strategy/chromatic-math") { routeKey = "chromatic-math"; setCurrentSubPageId("chromatic-math"); }
      else if (pathname === "/services/web-mechanics/elastic-physics") { routeKey = "elastic-physics"; setCurrentSubPageId("elastic-physics"); }
      else if (pathname === "/services/web-mechanics/layout-stability") { routeKey = "layout-stability"; setCurrentSubPageId("layout-stability"); }
      // 2. Legacy hash routing fallback
      else if (hash === "#/contact" || hash === "#contact") routeKey = "contact";
      else if (hash === "#/partnership" || hash === "#partnership") routeKey = "partnership";
      else if (hash === "#/about" || hash === "#about") routeKey = "about";
      else if (hash === "#/faq" || hash === "#faq") routeKey = "faq";
      else if (hash === "#/privacy" || hash === "#privacy") routeKey = "privacy";
      else if (hash === "#/terms" || hash === "#terms") routeKey = "terms";
      else if (hash === "#/sitemap" || hash === "#sitemap") routeKey = "sitemap";
      else if (hash === "#/services" || hash === "#services") routeKey = "services";
      else if (hash === "#/laboratory" || hash === "#laboratory" || hash === "#/lab" || hash === "#lab") routeKey = "laboratory";
      else if (hash === "#/services/ux-design") routeKey = "services-ux";
      else if (hash === "#/services/brand-strategy") routeKey = "services-brand";
      else if (hash === "#/services/web-mechanics") routeKey = "services-web";
      else if (hash === "#/landing/enterprise-ux") routeKey = "landing-enterprise";
      else if (hash === "#/funnel/audit-request") routeKey = "funnel-audit";
      else if (hash === "#/glossary" || hash === "#glossary") routeKey = "glossary";
      else if (hash === "#/services/ux-design/cognitive-friction") { routeKey = "cognitive-friction"; setCurrentSubPageId("cognitive-friction"); }
      else if (hash === "#/services/ux-design/tactile-haptics") { routeKey = "tactile-haptics"; setCurrentSubPageId("tactile-haptics"); }
      else if (hash === "#/services/brand-strategy/typographic-geometry") { routeKey = "typographic-geometry"; setCurrentSubPageId("typographic-geometry"); }
      else if (hash === "#/services/brand-strategy/chromatic-math") { routeKey = "chromatic-math"; setCurrentSubPageId("chromatic-math"); }
      else if (hash === "#/services/web-mechanics/elastic-physics") { routeKey = "elastic-physics"; setCurrentSubPageId("elastic-physics"); }
      else if (hash === "#/services/web-mechanics/layout-stability") { routeKey = "layout-stability"; setCurrentSubPageId("layout-stability"); }

      // Set currentPage state corresponding to which page component should be active
      const isDeepDive = [
        "cognitive-friction",
        "tactile-haptics",
        "typographic-geometry",
        "chromatic-math",
        "elastic-physics",
        "layout-stability"
      ].includes(routeKey);

      if (isLeafMatch) {
        setCurrentPage("deep-dive");
        setCurrentSubPageId(leafSubPageId);
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      } else if (isDeepDive) {
        setCurrentPage("deep-dive");
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      } else if (routeKey === "contact") {
        setCurrentPage("contact");
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      } else if (routeKey === "partnership") {
        setCurrentPage("partnership");
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      } else if (routeKey === "about") {
        setCurrentPage("about");
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      } else if (routeKey === "privacy") {
        setCurrentPage("privacy");
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      } else if (routeKey === "terms") {
        setCurrentPage("terms");
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      } else if (routeKey === "sitemap") {
        setCurrentPage("sitemap");
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      } else if (routeKey === "services-ux") {
        setCurrentPage("services-ux");
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      } else if (routeKey === "services-brand") {
        setCurrentPage("services-brand");
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      } else if (routeKey === "services-web") {
        setCurrentPage("services-web");
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      } else if (routeKey === "landing-enterprise") {
        setCurrentPage("landing-enterprise");
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      } else if (routeKey === "funnel-audit") {
        setCurrentPage("funnel-audit");
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      } else if (routeKey === "glossary") {
        setCurrentPage("glossary");
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      } else {
        setCurrentPage("home");

        // Handle scrolling for sections on the home page (services, laboratory, faq)
        let targetId = routeKey;
        if (targetId === "laboratory") {
          targetId = "lab";
        } else if (targetId === "home") {
          targetId = "hero";
        }

        if (targetId && targetId !== "home") {
          let attempts = 0;
          const scrollInterval = setInterval(() => {
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
              clearInterval(scrollInterval);
            }
            attempts++;
            if (attempts > 15) {
              clearInterval(scrollInterval);
            }
          }, 100);
        }
      }

      // Live SEO DOM Updates
      let seo = SEOMapping[routeKey] || SEOMapping.home;
      let activeSchema = JSONLDMapping[routeKey] || JSONLDMapping.home;

      if (isLeafMatch) {
        const parts = leafSubPageId.split("-leaf-");
        const type = parts[0];
        const num = parts[1];
        const content = generateDynamicSEOContent(type, num);
        
        seo = {
          title: content.title,
          desc: content.desc,
          canonical: pathname
        };
        activeSchema = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": content.heading,
          "url": `${window.location.origin}${pathname}`,
          "description": content.desc
        };
      }
      
      // 1. Dynamic Title Update
      document.title = seo.title;

      // 2. Dynamic Tag updates
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", seo.desc);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", seo.title);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", seo.desc);

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", `${window.location.origin}${seo.canonical}`);

      const twTitle = document.querySelector('meta[property="twitter:title"]');
      if (twTitle) twTitle.setAttribute("content", seo.title);

      const twDesc = document.querySelector('meta[property="twitter:description"]');
      if (twDesc) twDesc.setAttribute("content", seo.desc);

      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute("href", `${window.location.origin}${seo.canonical}`);
      }

      // 3. Dynamic JSON-LD structured schema script generation
      try {
        let scriptTag = document.getElementById("dynamic-jsonld");
        if (!scriptTag) {
          scriptTag = document.createElement("script");
          scriptTag.setAttribute("id", "dynamic-jsonld");
          scriptTag.setAttribute("type", "application/ld+json");
          document.head.appendChild(scriptTag);
        }
        
        const currentOrigin = window.location.origin;
        
        // Dynamically point all template origins (https://xnui.com) to the live runtime domain
        const liveJSONLDString = JSON.stringify(activeSchema).replace(/https:\/\/xnui\.com/g, currentOrigin);
        scriptTag.textContent = JSON.stringify(JSON.parse(liveJSONLDString), null, 2);
      } catch (err) {
        console.warn("JSON-LD Injection Warning:", err);
      }
    };

    // Global Click Interceptor to make standard anchor tags behave as seamless pushState SPA navs
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href");
        // Only intercept local relative urls, ignore external links, targets with _blank or hashes/scroll targets
        if (
          href && 
          href.startsWith("/") && 
          !href.startsWith("//") && 
          anchor.getAttribute("target") !== "_blank"
        ) {
          e.preventDefault();
          window.history.pushState({}, "", href);
          window.dispatchEvent(new Event("popstate"));
        }
      }
    };

    handleRoute();
    window.addEventListener("popstate", handleRoute);
    window.addEventListener("hashchange", handleRoute);
    document.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("popstate", handleRoute);
      window.removeEventListener("hashchange", handleRoute);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  const customEase = [0.19, 1, 0.22, 1] as const;

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#fbfbfb] selection:bg-electric-blue selection:text-white">
      {/* Noise aesthetic layer */}
      <div className="noise-bg" />
      
      <Navbar />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.div
            key="homepage-wrapper"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.65, ease: customEase }}
          >
            <Hero />
            
            <Suspense fallback={<SectionLoader />}>
              <Services />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
              <Laboratory />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
              <FAQ />
            </Suspense>
          </motion.div>
        )}
        
        {currentPage === 'contact' && (
          <motion.div
            key="contactpage-wrapper"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{ duration: 0.7, ease: customEase }}
            className="pt-24 min-h-screen flex flex-col justify-between"
          >
            <Suspense fallback={<SectionLoader />}>
              <Contact />
            </Suspense>
          </motion.div>
        )}

        {currentPage === 'partnership' && (
          <motion.div
            key="partnershippage-wrapper"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{ duration: 0.7, ease: customEase }}
            className="pt-24 min-h-screen flex flex-col justify-between"
          >
            <Suspense fallback={<SectionLoader />}>
              <Partnership />
            </Suspense>
          </motion.div>
        )}

        {currentPage === 'about' && (
          <motion.div
            key="aboutpage-wrapper"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{ duration: 0.7, ease: customEase }}
            className="pt-24 min-h-screen flex flex-col justify-between"
          >
            <Suspense fallback={<SectionLoader />}>
              <About />
            </Suspense>
          </motion.div>
        )}

        {currentPage === 'faq' && (
          <motion.div
            key="faqpage-wrapper"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{ duration: 0.7, ease: customEase }}
            className="pt-24 min-h-screen flex flex-col justify-between"
          >
            <Suspense fallback={<SectionLoader />}>
              <FAQ />
            </Suspense>
          </motion.div>
        )}

        {currentPage === 'privacy' && (
          <motion.div
            key="privacypage-wrapper"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{ duration: 0.7, ease: customEase }}
            className="pt-24 min-h-screen flex flex-col justify-between"
          >
            <Suspense fallback={<SectionLoader />}>
              <Privacy />
            </Suspense>
          </motion.div>
        )}

        {currentPage === 'terms' && (
          <motion.div
            key="termspage-wrapper"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{ duration: 0.7, ease: customEase }}
            className="pt-24 min-h-screen flex flex-col justify-between"
          >
            <Suspense fallback={<SectionLoader />}>
              <Terms />
            </Suspense>
          </motion.div>
        )}

        {currentPage === 'services-ux' && (
          <motion.div
            key="servicesuxpage-wrapper"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{ duration: 0.7, ease: customEase }}
            className="pt-24 min-h-screen flex flex-col justify-between"
          >
            <Suspense fallback={<SectionLoader />}>
              <ServiceUX />
            </Suspense>
          </motion.div>
        )}

        {currentPage === 'services-brand' && (
          <motion.div
            key="servicesbrandpage-wrapper"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{ duration: 0.7, ease: customEase }}
            className="pt-24 min-h-screen flex flex-col justify-between"
          >
            <Suspense fallback={<SectionLoader />}>
              <ServiceBrand />
            </Suspense>
          </motion.div>
        )}

        {currentPage === 'services-web' && (
          <motion.div
            key="serviceswebpage-wrapper"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{ duration: 0.7, ease: customEase }}
            className="pt-24 min-h-screen flex flex-col justify-between"
          >
            <Suspense fallback={<SectionLoader />}>
              <ServiceWeb />
            </Suspense>
          </motion.div>
        )}

        {currentPage === 'landing-enterprise' && (
          <motion.div
            key="landingenterprisepage-wrapper"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{ duration: 0.7, ease: customEase }}
            className="pt-24 min-h-screen flex flex-col justify-between"
          >
            <Suspense fallback={<SectionLoader />}>
              <LandingEnterprise />
            </Suspense>
          </motion.div>
        )}

        {currentPage === 'funnel-audit' && (
          <motion.div
            key="funnelauditpage-wrapper"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{ duration: 0.7, ease: customEase }}
            className="pt-24 min-h-screen flex flex-col justify-between"
          >
            <Suspense fallback={<SectionLoader />}>
              <FunnelAudit />
            </Suspense>
          </motion.div>
        )}

        {currentPage === 'glossary' && (
          <motion.div
            key="glossarypage-wrapper"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{ duration: 0.7, ease: customEase }}
            className="pt-24 min-h-screen flex flex-col justify-between"
          >
            <Suspense fallback={<SectionLoader />}>
              <Glossary />
            </Suspense>
          </motion.div>
        )}

        {currentPage === 'sitemap' && (
          <motion.div
            key="sitemappage-wrapper"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{ duration: 0.7, ease: customEase }}
            className="pt-24 min-h-screen flex flex-col justify-between"
          >
            <Suspense fallback={<SectionLoader />}>
              <Sitemap />
            </Suspense>
          </motion.div>
        )}

        {currentPage === 'deep-dive' && (
          <motion.div
            key="deepdivepage-wrapper"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{ duration: 0.7, ease: customEase }}
            className="pt-24 min-h-screen flex flex-col justify-between"
          >
            <Suspense fallback={<SectionLoader />}>
              <ServiceDeepDive subPageId={currentSubPageId} />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
    </main>
  );
}
