import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

const CAROUSEL_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80",
    caption: "Cybersecurity & Threat Defense",
    tagline: "SOC 2 Type II Compliant Real-Time Threat Mitigation"
  },
  {
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80",
    caption: "Cloud & Virtual Infrastructure",
    tagline: "High-Availability Multi-Cloud Server Architecture"
  },
  {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
    caption: "Digital Transformation & AI",
    tagline: "Leverage Modern Data Pipelines and Intelligence Engines"
  },
  {
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80",
    caption: "Enterprise Network Modernization",
    tagline: "99.99% Core SLA Connectivity & Hardware Assets"
  },
  {
    url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1920&q=80",
    caption: "Operational Analytics Desk",
    tagline: "Unified System Metrics & Dashboard Observability"
  },
  {
    url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1920&q=80",
    caption: "Quantum & Advanced Solutions",
    tagline: "Future-Proof Cryptography & Performance Scaling"
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 6000); // 6 seconds for each slide
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-slate-950 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image Carousel with Fade Transitions */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={CAROUSEL_IMAGES[currentImageIndex].url}
              alt={CAROUSEL_IMAGES[currentImageIndex].caption}
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Advanced gradient overlays for deep cinematic contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background-warm via-transparent to-slate-950/50 z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 w-full">
        {/* Left Column Content - High Legibility Overlays */}
        <div className="lg:col-span-8 space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md text-orange-300 font-display text-xs font-semibold uppercase tracking-wider rounded-full border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-primary-orange animate-pulse" /> Next-Gen Enterprise Technology
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.1]">
            Empowering Businesses Through <span className="bg-gradient-to-r from-orange-400 to-primary-orange bg-clip-text text-transparent">Smart Technology</span> Solutions
          </h1>

          <p className="font-sans text-lg text-slate-200 max-w-xl leading-relaxed">
            Helping organizations modernize their IT infrastructure through cybersecurity, cloud services, networking, managed IT, and digital transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="bg-primary-orange hover:bg-orange-600 text-white font-display text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Talk to an Expert <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollToSection('#services')}
              className="bg-white/10 border border-white/20 hover:border-white text-white font-display text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-lg transition-all hover:bg-white/20 flex items-center justify-center gap-2"
            >
              Explore Services
            </button>
          </div>

          {/* Quick trust flags */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-primary-orange rounded-full" />
              99.99% Network SLA
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-primary-orange rounded-full" />
              SOC 2 Type II Audited
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-primary-orange rounded-full" />
              24/7 Engineers On-Duty
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

