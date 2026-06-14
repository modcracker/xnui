/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

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
    canonical: '#/home'
  },
  'services': {
    title: 'Professional Graphic & UX Services | xnui Elastic Workspace',
    desc: 'We provide specialized UX services, visual design solutions, custom responsive typography layouts, and interactive spring-mechanic design systems.',
    canonical: '#/services'
  },
  'laboratory': {
    title: 'Interactive Laboratory | xnui Visual & Motion Experiments',
    desc: 'Explore high-fidelity visual experiments, real-time UX simulation, spring reaction layouts, Verlet cloth dynamics, and coordinate mechanics.',
    canonical: '#/laboratory'
  },
  'about': {
    title: 'Visual Designer Bio | Sofia Varian - Lead UX Service Architect',
    desc: 'Learn about the professional career of lead visual designer and graphic design specialist Sofia Varian, and the operating pillars of the xnui studio.',
    canonical: '#/about'
  },
  'partnership': {
    title: 'Feelize Corporation Partnership | xnui Studio Certification',
    desc: 'Details on our elite certified design partnership & licensed verification system with Feelize Corporation for premium integrations.',
    canonical: '#/partnership'
  },
  'faq': {
    title: 'Tactical FAQ | xnui Design Systems and Mechanics Support',
    desc: 'Answers to inquiries regarding dynamic coordinate licensing, engineering support, tactile physics, spring formulas, and custom builds.',
    canonical: '#/faq'
  },
  'contact': {
    title: 'Inquiry Tunnel | Contact xnui Studio',
    desc: 'Initiate layout system commissions, interactive engineering integrations, or schedule partner coordinate consultations with xnui.',
    canonical: '#/contact'
  },
  'privacy': {
    title: 'Privacy Protocol & State Encryptions | xnui',
    desc: 'Our commitment to database safety, local client-side persistence consent, browser storage encryption, and transparency protocol.',
    canonical: '#/privacy'
  },
  'terms': {
    title: 'Terms of Engagement & Design Licensing Rules | xnui',
    desc: 'Layout system parameters, spring math usage guidelines, interactive intellectual property licensing, and customer rights agreements.',
    canonical: '#/terms'
  },
  'sitemap': {
    title: 'Unified Site Architecture Map & SEO Directory | xnui',
    desc: 'Sitemap indexing directory available in Visual HTML, structured XML schema, JSON API payload, and plain text URL list.',
    canonical: '#/sitemap'
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
    "url": "https://xnui.com/#/sitemap"
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact' | 'partnership' | 'about' | 'faq' | 'privacy' | 'terms' | 'sitemap'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/home';
      
      let routeKey = 'home';

      if (hash === '#/contact' || hash === '#contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        routeKey = 'contact';
      } else if (hash === '#/partnership' || hash === '#partnership') {
        setCurrentPage('partnership');
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        routeKey = 'partnership';
      } else if (hash === '#/about' || hash === '#about') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        routeKey = 'about';
      } else if (hash === '#/faq' || hash === '#faq') {
        setCurrentPage('faq');
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        routeKey = 'faq';
      } else if (hash === '#/privacy' || hash === '#privacy') {
        setCurrentPage('privacy');
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        routeKey = 'privacy';
      } else if (hash === '#/terms' || hash === '#terms') {
        setCurrentPage('terms');
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        routeKey = 'terms';
      } else if (hash === '#/sitemap' || hash === '#sitemap') {
        setCurrentPage('sitemap');
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        routeKey = 'sitemap';
      } else {
        setCurrentPage('home');
        
        // Detect sub-routing hashes within standard home page
        if (hash === '#/services' || hash === '#services') {
          routeKey = 'services';
        } else if (hash === '#/laboratory' || hash === '#laboratory' || hash === '#/lab' || hash === '#lab') {
          routeKey = 'laboratory';
        }

        // Handle scrolling behavior for hash-routed paths
        let cleanHash = hash;
        if (hash.startsWith('#/')) {
          cleanHash = '#' + hash.substring(2);
        }

        // Map path sections to DOM element IDs
        let targetId = cleanHash.substring(1);
        if (targetId === 'laboratory') {
          targetId = 'lab';
        } else if (targetId === 'home') {
          targetId = 'hero';
        }

        if (targetId && targetId !== '/') {
          let attempts = 0;
          const scrollInterval = setInterval(() => {
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
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
      const seo = SEOMapping[routeKey] || SEOMapping.home;
      
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
      if (ogUrl) ogUrl.setAttribute("content", `${window.location.origin}/${seo.canonical}`);

      const twTitle = document.querySelector('meta[property="twitter:title"]');
      if (twTitle) twTitle.setAttribute("content", seo.title);

      const twDesc = document.querySelector('meta[property="twitter:description"]');
      if (twDesc) twDesc.setAttribute("content", seo.desc);

      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute("href", `${window.location.origin}/${seo.canonical}`);
      }

      // 3. Dynamic JSON-LD structured schema script generation
      try {
        let scriptTag = document.getElementById('dynamic-jsonld');
        if (!scriptTag) {
          scriptTag = document.createElement('script');
          scriptTag.setAttribute('id', 'dynamic-jsonld');
          scriptTag.setAttribute('type', 'application/ld+json');
          document.head.appendChild(scriptTag);
        }
        
        const currentOrigin = window.location.origin;
        const baseData = JSONLDMapping[routeKey] || JSONLDMapping.home;
        
        // Dynamically point all template origins (https://xnui.com) to the live runtime domain
        const liveJSONLDString = JSON.stringify(baseData).replace(/https:\/\/xnui\.com/g, currentOrigin);
        scriptTag.textContent = JSON.stringify(JSON.parse(liveJSONLDString), null, 2);
      } catch (err) {
        console.warn("JSON-LD Injection Warning:", err);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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
      </AnimatePresence>
      
      <Footer />
    </main>
  );
}
