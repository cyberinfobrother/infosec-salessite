import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FooterProps {
  onSelectFooterPage?: (page: 'privacy' | 'terms' | 'locations' | 'sitemap') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectFooterPage }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#1b1c1c] text-white pt-20 pb-8 text-left border-t border-border-subtle relative overflow-hidden">
      {/* Structural design meshes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-16 border-b border-white/10">
        {/* IBS Branding */}
        <div className="md:col-span-4 space-y-5">
          <a href="#home" onClick={handleScrollToTop} className="font-display text-2xl font-bold tracking-tight text-white flex items-center">
            <span className="relative inline-flex items-center">
              <span className="relative inline-block leading-none">
                ı
                <span className="absolute -top-[0.1em] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary-orange rounded-full" />
              </span>
              <span className="leading-none">BS</span>
            </span>
          </a>
          <p className="text-gray-400 font-sans text-xs leading-relaxed max-w-sm">
            High-performance technology solutions for enterprise organizations worldwide. Professional, Trusted, Sophisticated. We modernize your core architecture safely.
          </p>

          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary-orange hover:text-white flex items-center justify-center text-gray-400 transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary-orange hover:text-white flex items-center justify-center text-gray-400 transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary-orange hover:text-white flex items-center justify-center text-gray-400 transition-all">
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-display font-bold uppercase tracking-wider text-orange-200">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs text-gray-400 font-sans">
            <li>
              <button 
                onClick={(e) => { e.preventDefault(); onSelectFooterPage?.('privacy'); }}
                className="hover:text-primary-orange transition-colors cursor-pointer text-left focus:outline-none"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button 
                onClick={(e) => { e.preventDefault(); onSelectFooterPage?.('terms'); }}
                className="hover:text-primary-orange transition-colors cursor-pointer text-left focus:outline-none"
              >
                Terms of Service
              </button>
            </li>
            <li>
              <button 
                onClick={(e) => { e.preventDefault(); onSelectFooterPage?.('locations'); }}
                className="hover:text-primary-orange transition-colors cursor-pointer text-left focus:outline-none"
              >
                Global Locations
              </button>
            </li>
            <li>
              <button 
                onClick={(e) => { e.preventDefault(); onSelectFooterPage?.('sitemap'); }}
                className="hover:text-primary-orange transition-colors cursor-pointer text-left focus:outline-none"
              >
                Sitemap
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-display font-bold uppercase tracking-wider text-orange-200">
            Contact Us
          </h4>
          <ul className="space-y-3.5 text-xs text-gray-400 font-sans">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-primary-orange shrink-0 mt-0.5" />
              <span>Headquarters:<br />123 Enterprise Plaza<br />Silicon Valley, CA 94000</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-primary-orange shrink-0" />
              <a href="mailto:info@ibssolutions.com" className="hover:text-primary-orange transition-colors">info@ibssolutions.com</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-primary-orange shrink-0" />
              <a href="tel:+18005550199" className="hover:text-primary-orange transition-colors">+1 (800) 555-0199</a>
            </li>
          </ul>
        </div>

        {/* Newsletter form */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-display font-bold uppercase tracking-wider text-orange-200">
            Newsletter
          </h4>
          <p className="text-xs text-gray-400 font-sans leading-relaxed">
            Stay updated on enterprise tech trends.
          </p>

          <AnimatePresence mode="wait">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary-orange font-sans"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#984800] hover:bg-orange-600 text-white font-display text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-1.5 shadow"
                >
                  SUBSCRIBE <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 rounded-lg text-xs flex items-center gap-2"
              >
                <Check className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                <span>Subscription registered! Welcome to IBS Tech Briefing.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Subfooter */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-[10px] font-sans gap-4">
        <div>
          © 2026 InfoBro Business Solutions, Inc. All rights reserved.
        </div>
        <div className="flex gap-4 items-center">
          <a href="#" className="hover:text-primary-orange">GDPR Compliant</a>
          <span>•</span>
          <a href="#" className="hover:text-primary-orange">SOC 2 Verified</a>
          <span>•</span>
          <span className="flex items-center gap-1 text-gray-600">
            <ShieldCheck className="w-3.5 h-3.5 text-primary-orange" /> ISO/IEC 27001
          </span>
        </div>
      </div>
    </footer>
  );
};
