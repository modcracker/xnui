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

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/home';
      
      if (hash === '#/contact' || hash === '#contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      } else {
        setCurrentPage('home');
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
          setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
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
        {currentPage === 'home' ? (
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
        ) : (
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
      </AnimatePresence>
      
      <Footer />
    </main>
  );
}
