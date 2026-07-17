import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyTrustUs } from './components/WhyTrustUs';
import { ServicesHeroSlider } from './components/ServicesHeroSlider';
import { ServicePage } from './components/ServicePage';
import { VerticalExpertise } from './components/VerticalExpertise';
import { Partners } from './components/Partners';
import { ClientExperiences } from './components/ClientExperiences';
import { CostCalculator } from './components/CostCalculator';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FooterPages } from './components/FooterPages';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeServicePageId, setActiveServicePageId] = useState<string | null>(null);
  const [activeFooterPage, setActiveFooterPage] = useState<'privacy' | 'terms' | 'locations' | 'sitemap' | null>(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [originSectionId, setOriginSectionId] = useState<string | null>(null);

  const handleOpenQuoteModal = () => {
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  const handleSelectServicePage = (serviceId: string, origin?: string) => {
    setPrevScrollPos(window.scrollY);
    setOriginSectionId(origin || null);
    setActiveServicePageId(serviceId);
    setActiveFooterPage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectFooterPage = (page: 'privacy' | 'terms' | 'locations' | 'sitemap') => {
    setPrevScrollPos(window.scrollY);
    setActiveServicePageId(null);
    setActiveFooterPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = (targetSectionId?: string) => {
    setActiveServicePageId(null);
    setActiveFooterPage(null);
    setTimeout(() => {
      const activeSectionId = targetSectionId ? targetSectionId.replace('#', '') : originSectionId;
      if (activeSectionId) {
        const element = document.getElementById(activeSectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          return;
        }
      }
      window.scrollTo({
        top: prevScrollPos,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background-warm text-gray-800 antialiased font-sans selection:bg-accent-orange-soft selection:text-primary-brand">
      {/* Header */}
      <Header 
        onOpenQuoteModal={handleOpenQuoteModal} 
        onGoHome={handleGoHome}
        isServicePageActive={activeServicePageId !== null || activeFooterPage !== null}
      />

      {/* Main Sections */}
      <AnimatePresence mode="wait">
        {activeFooterPage ? (
          <motion.main
            key="footer-pages-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <FooterPages 
              activeTab={activeFooterPage}
              onTabChange={setActiveFooterPage}
              onClose={handleGoHome}
              onSelectServicePage={(serviceId) => {
                setActiveFooterPage(null);
                handleSelectServicePage(serviceId);
              }}
            />
          </motion.main>
        ) : activeServicePageId ? (
          <motion.main
            key="service-detail-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <ServicePage 
              serviceId={activeServicePageId}
              onClose={handleGoHome}
              onOpenQuoteModal={handleOpenQuoteModal}
            />
          </motion.main>
        ) : (
          <motion.main
            key="home-main-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero Landing */}
            <Hero onOpenQuoteModal={handleOpenQuoteModal} />

            {/* Metrics Row */}
            <Metrics />

            {/* IT Services Grid */}
            <ServicesGrid onSelectService={handleSelectServicePage} />

            {/* Why Trust Us section */}
            <WhyTrustUs />

            {/* Full-Spectrum Solutions Cinematic Carousel */}
            <ServicesHeroSlider onSelectService={handleSelectServicePage} />

            {/* Industry Vertical Expertises */}
            <VerticalExpertise />

            {/* Partners Row */}
            <Partners />

            {/* Interactive Scope Cost Calculator */}
            <CostCalculator />

            {/* Client Experiences / Testimonials */}
            <ClientExperiences />

            {/* Bottom Call to Action banner */}
            <CallToAction onOpenQuoteModal={handleOpenQuoteModal} />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer onSelectFooterPage={handleSelectFooterPage} />

      {/* Embedded Quote / Consultation Request Modal Overlay */}
      <AnimatePresence>
        {quoteModalOpen && (
          <QuoteModal isOpen={quoteModalOpen} onClose={handleCloseQuoteModal} />
        )}
      </AnimatePresence>
    </div>
  );
}
