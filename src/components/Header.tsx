import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
  onGoHome?: () => void;
  isServicePageActive?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal, onGoHome, isServicePageActive = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeScrolled = scrolled || isServicePageActive;

  const menuItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'SOLUTIONS', href: '#solutions' },
    { label: 'INDUSTRIES', href: '#industries' },
    { label: 'CONTACT', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (onGoHome) {
      onGoHome();
    }

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, isServicePageActive ? 100 : 0);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        activeScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-border-subtle shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}>
        <div 
          className="max-w-7xl mx-auto px-6 flex justify-between items-center transition-colors duration-300"
          style={{ color: activeScrolled ? undefined : '#f5f0f0' }}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2" onClick={(e) => handleNavClick(e, '#home')}>
            <span className={`font-display text-2xl font-bold tracking-tight flex items-center transition-colors duration-300 ${activeScrolled ? 'text-gray-900' : 'text-[#f5f0f0]'}`}>
              <span className="relative inline-flex items-center">
                <span className="relative inline-block leading-none">
                  ı
                  <span className="absolute -top-[0.1em] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary-orange rounded-full" />
                </span>
                <span className="leading-none">BS</span>
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-display text-xs font-semibold tracking-wider transition-colors duration-300 relative group py-2 ${
                  activeScrolled 
                    ? 'text-gray-600 hover:text-primary-orange' 
                    : 'text-[#f5f0f0]/90 hover:text-orange-300'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+18005550199" 
              className={`font-sans text-xs font-semibold flex items-center gap-1.5 transition-colors duration-300 ${
                activeScrolled 
                  ? 'text-gray-500 hover:text-primary-brand' 
                  : 'text-[#f5f0f0]/85 hover:text-[#f5f0f0]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-primary-orange" />
              +1 (800) 555-0199
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="bg-primary-orange hover:bg-orange-600 text-white font-display text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg transition-all shadow-md flex items-center gap-1.5 hover:shadow-lg cursor-pointer"
            >
              Get a Quote <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Burger button - Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden transition-colors duration-300 p-1 ${
              activeScrolled 
                ? 'text-gray-700 hover:text-primary-orange' 
                : 'text-[#f5f0f0] hover:text-orange-300'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-white border-t border-border-subtle p-6 flex flex-col justify-between md:hidden shadow-xl"
          >
            <nav className="flex flex-col gap-5 py-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-display text-base font-semibold text-gray-800 hover:text-primary-orange transition-colors py-2 border-b border-gray-100"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="space-y-4 border-t border-border-subtle pt-6">
              <a 
                href="tel:+18005550199" 
                className="flex items-center gap-2 font-sans text-sm text-gray-600 font-medium py-2"
              >
                <Phone className="w-4 h-4 text-primary-orange" />
                Call Desk: +1 (800) 555-0199
              </a>
              <a 
                href="mailto:info@ibssolutions.com" 
                className="flex items-center gap-2 font-sans text-sm text-gray-600 font-medium py-2"
              >
                <Mail className="w-4 h-4 text-primary-orange" />
                info@ibssolutions.com
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuoteModal) onOpenQuoteModal();
                }}
                className="w-full bg-primary-orange hover:bg-orange-600 text-white font-display text-sm font-bold uppercase tracking-wider py-4 rounded-xl transition-all shadow flex items-center justify-center gap-2"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
