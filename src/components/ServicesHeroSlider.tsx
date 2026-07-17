import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ShieldAlert, Server, Cpu, Cloud, Database, Users, Shield, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SlideItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  bgImage: string;
}

const CAROUSEL_SLIDES: SlideItem[] = [
  {
    id: 'cybersecurity',
    category: 'Security Operations',
    title: 'CYBER DEFENSE SHIELD',
    subtitle: 'ACTIVE INTEGRITY SYSTEM',
    description: 'Protecting corporate mainframes with active Managed Detection and Response (MDR), threat containment, deep packet filters, and cloud compliance layouts.',
    bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'infrastructure',
    category: 'Network Engineering',
    title: 'ENTERPRISE BACKBONE',
    subtitle: 'HIGH-AVAILABILITY FABRIC',
    description: 'Engineering redundant optical fiber trunks, modular enterprise chassis systems, SD-WAN software balancing, and climate-controlled core racks.',
    bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'virtualization',
    category: 'Compute Optimization',
    title: 'HYPERVISOR CLUSTERING',
    subtitle: 'OPTIMIZED ELASTICITY',
    description: 'Consolidating hardware footprints into virtual hypervisor environments. High-performance VMware clustering with automated host migration.',
    bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'cloud-hybrid',
    category: 'Cloud Engineering',
    title: 'HYBRID CORE TUNNELS',
    subtitle: 'PUBLIC & LOCAL SYNCHRONICITY',
    description: 'Bridging physical database servers with scalable public cloud pipelines using secure IPSec connections and unified active identity vaults.',
    bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'backups',
    category: 'Data Preservation',
    title: 'IMMUTABLE REPOSITORIES',
    subtitle: 'RANSOMWARE-PROOF STORAGE',
    description: 'Immutable WORM-compliant storage repositories guarding business directory databases with Object Lock rules and incremental verification.',
    bgImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'end-user-support',
    category: 'Workspace Operations',
    title: '24/7/365 HELP DESK',
    subtitle: 'RESPONSIVE DESPATCH CHANNEL',
    description: 'Equipping client workstation teams with direct remote troubleshooting, automated OS patch management, and priority support dispatch.',
    bgImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80'
  }
];

interface ServicesHeroSliderProps {
  onSelectService: (serviceId: string, origin?: string) => void;
}

export const ServicesHeroSlider: React.FC<ServicesHeroSliderProps> = ({ onSelectService }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play feature with simple interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 12000); // 12 seconds per slide for cinematic pace
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  // Get other slides for the queue in sequence
  const getQueueItems = () => {
    const queue = [];
    for (let i = 1; i < CAROUSEL_SLIDES.length; i++) {
      const idx = (activeIndex + i) % CAROUSEL_SLIDES.length;
      queue.push(CAROUSEL_SLIDES[idx]);
    }
    return queue;
  };

  const activeSlide = CAROUSEL_SLIDES[activeIndex];

  const getSlideIcon = (id: string) => {
    switch (id) {
      case 'cybersecurity':
        return <ShieldAlert className="w-5 h-5 text-white" />;
      case 'infrastructure':
        return <Server className="w-5 h-5 text-white" />;
      case 'virtualization':
        return <Cpu className="w-5 h-5 text-white" />;
      case 'cloud-hybrid':
        return <Cloud className="w-5 h-5 text-white" />;
      case 'backups':
        return <Database className="w-5 h-5 text-white" />;
      case 'end-user-support':
        return <Users className="w-5 h-5 text-white" />;
      default:
        return <Bookmark className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="solutions" className="py-24 bg-[#0a0c10] text-white overflow-hidden relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <span className="text-primary-orange font-display text-xs font-bold uppercase tracking-widest block mb-2">
            ENTERPRISE ROADMAP
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            Full-Spectrum Solutions
          </h2>
          <div className="w-20 h-1 bg-primary-orange mt-4 rounded-full" />
        </div>

        {/* Carousel View Container */}
        <div className="w-full min-h-[660px] md:h-[640px] lg:h-[720px] relative rounded-[2rem] overflow-hidden shadow-2xl bg-[#090b0e] flex items-center border border-white/5">
          
          {/* Active Background Crossfade */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={activeIndex}
                src={activeSlide.bgImage}
                alt={activeSlide.title}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 0.35, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* High-Contrast Vignettes as described in requirements */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
          </div>

          {/* Left Details Content */}
          <div className="w-full md:w-1/2 p-8 md:p-16 relative z-20 flex flex-col justify-center h-full text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.05
                    }
                  }
                }}
                className="space-y-6"
              >
                {/* Horizontal white separator line like screenshot */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, width: 0 },
                    visible: { opacity: 1, width: 40, transition: { duration: 0.5 } }
                  }}
                  className="h-[2px] bg-white rounded-full" 
                />

                {/* Tagline category label */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="text-sm font-sans tracking-wide text-gray-300 font-medium"
                >
                  {activeSlide.category}
                </motion.div>

                {/* Main large display title */}
                <motion.h3
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } }
                  }}
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-white leading-tight"
                >
                  {activeSlide.title}
                </motion.h3>

                {/* Subtitle / tag */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="text-xs text-primary-orange font-display font-extrabold uppercase tracking-widest"
                >
                  {activeSlide.subtitle}
                </motion.p>

                {/* Descriptive summary paragraph */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  className="text-xs md:text-sm text-gray-300/90 font-sans leading-relaxed max-w-md tracking-normal"
                >
                  {activeSlide.description}
                </motion.p>

                {/* Custom layout buttons group - Exactly as shown in screenshot */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } }
                  }}
                  className="pt-6 flex items-center gap-4"
                >
                  {/* Circle orange button */}
                  <button
                    onClick={() => onSelectService(activeSlide.id, 'solutions')}
                    className="w-12 h-12 rounded-full bg-primary-orange flex items-center justify-center text-white hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 group cursor-pointer"
                    aria-label="View Details Icon"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {getSlideIcon(activeSlide.id)}
                    </span>
                  </button>

                  {/* Outline pill shape button */}
                  <button
                    onClick={() => onSelectService(activeSlide.id, 'solutions')}
                    className="px-7 py-3.5 border border-white/30 text-white rounded-full text-[10px] font-display font-extrabold uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all cursor-pointer flex items-center gap-2"
                  >
                    DISCOVER SERVICE /
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floating Interactive Side-Queue Cards (Right side) - Layout matched to video */}
          <div className="absolute right-4 md:right-8 lg:right-12 bottom-12 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-20 flex md:flex-col gap-4 overflow-x-auto max-w-[calc(100%-2rem)] md:max-w-[260px] lg:max-w-[320px] pb-4 md:pb-0 scrollbar-none scroll-smooth">
            {getQueueItems().map((slide) => (
              <motion.button
                key={slide.id}
                layoutId={`queue-card-${slide.id}`}
                onClick={() => {
                  const targetIndex = CAROUSEL_SLIDES.findIndex((s) => s.id === slide.id);
                  setActiveIndex(targetIndex);
                }}
                className="flex-shrink-0 w-44 h-56 md:w-56 md:h-72 rounded-[1.5rem] overflow-hidden relative border border-white/10 group cursor-pointer shadow-2xl hover:border-primary-orange transition-all text-left bg-slate-950"
                transition={{ type: 'spring', stiffness: 220, damping: 26 }}
              >
                <img 
                  src={slide.bgImage} 
                  alt={slide.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Gradient vignette inside card */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                
                {/* Content at bottom-left exactly like video screenshot */}
                <div className="absolute bottom-5 left-5 right-5 z-20 text-left">
                  {/* Short white line inside card */}
                  <div className="w-5 h-[1.5px] bg-white/65 mb-2.5" />
                  
                  <span className="text-[8px] tracking-wider uppercase font-bold text-gray-300 block mb-1">
                    {slide.category}
                  </span>
                  
                  <h4 className="text-xs md:text-sm font-display font-black uppercase text-white tracking-tight leading-tight line-clamp-2 group-hover:text-orange-200 transition-colors">
                    {slide.title}
                  </h4>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Responsive Control Dock (Bottom left) - Layout matched to video */}
          <div className="absolute bottom-8 left-8 md:left-16 z-20 flex items-center gap-6 text-white w-full max-w-[400px]">
            
            {/* Circular navigation keys */}
            <div className="flex gap-2.5">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all cursor-pointer bg-black/30 backdrop-blur-md"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all cursor-pointer bg-black/30 backdrop-blur-md"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Horizontal tracking slider line connecting indicators as shown in screenshot */}
            <div className="hidden md:block flex-1 h-[1px] bg-white/20 relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-primary-orange"
                initial={{ width: '0%' }}
                animate={{ width: `${((activeIndex + 1) / CAROUSEL_SLIDES.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Large Serif-Style Number Indicator */}
            <div className="font-display pr-12">
              <span className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

