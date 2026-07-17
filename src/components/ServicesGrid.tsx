import React, { useState } from 'react';
import { ArrowRight, Check, X, Shield, Clock, HardDrive, Cpu, ExternalLink, Mail, Phone } from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';
import { IconResolver } from './IconResolver';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesGridProps {
  onSelectService?: (id: string, origin?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [requestEmail, setRequestEmail] = useState('');

  const handleOpenModal = (service: ServiceItem) => {
    setActiveService(service);
    setRequestSubmitted(false);
    setRequestEmail('');
  };

  const handleCloseModal = () => {
    setActiveService(null);
  };

  const handleRequestService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestEmail) return;
    setRequestSubmitted(true);
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-12 h-1.5 bg-primary-orange mx-auto mb-4 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-gray-900 tracking-tight mb-4">
            Tailored IT Services
          </h2>
          <p className="text-gray-600 font-sans text-base max-w-2xl mx-auto">
            Providing high-availability technical management and bespoke architectural alignments to drive modern enterprise scalability.
          </p>
        </div>

        {/* Grid of 6 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white p-8 rounded-xl border border-border-subtle shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-accent-orange-soft flex items-center justify-center text-primary-orange mb-6 group-hover:bg-primary-brand group-hover:text-white transition-all duration-300">
                  <IconResolver name={service.iconName} className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-primary-brand transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 font-sans text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <button
                onClick={() => onSelectService ? onSelectService(service.id, 'services') : handleOpenModal(service)}
                className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-primary-orange hover:text-primary-brand transition-colors text-left"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal Drawer */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white rounded-xl shadow-2xl border border-border-subtle max-w-2xl w-full relative z-10 overflow-hidden flex flex-col text-left"
            >
              {/* Decorative top orange bar */}
              <div className="h-2 bg-gradient-to-r from-primary-brand to-primary-orange" />

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-orange-soft flex items-center justify-center text-primary-orange">
                    <IconResolver name={activeService.iconName} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-gray-900">{activeService.title}</h3>
                    <p className="text-xs text-primary-brand font-semibold uppercase tracking-wider">Enterprise Technical Pillar</p>
                  </div>
                </div>

                <p className="text-gray-600 font-sans text-sm leading-relaxed mb-6">
                  {activeService.description}
                </p>

                <div className="space-y-6">
                  {/* Scope of Work */}
                  <div>
                    <h4 className="text-xs font-display font-bold uppercase tracking-widest text-gray-400 mb-3">Service Scope Included:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeService.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                          <Check className="w-4 h-4 text-primary-orange shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Architecture & SLA parameters */}
                  <div className="bg-surface-alt p-5 rounded-lg border border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-[11px] font-display font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary-orange" /> Service Level Agreement (SLA)
                      </h5>
                      <p className="text-xs text-gray-800 font-medium leading-relaxed">{activeService.sla}</p>
                    </div>
                    <div>
                      <h5 className="text-[11px] font-display font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                        <Cpu className="w-3.5 h-3.5 text-primary-orange" /> Core Architecture
                      </h5>
                      <p className="text-xs text-gray-600 leading-relaxed">{activeService.architecture}</p>
                    </div>
                  </div>
                </div>

                {/* Simulated Inquiry Callback */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <AnimatePresence mode="wait">
                    {!requestSubmitted ? (
                      <form onSubmit={handleRequestService} className="flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-1">
                          <input
                            type="email"
                            value={requestEmail}
                            onChange={(e) => setRequestEmail(e.target.value)}
                            required
                            placeholder="Enter work email for SLA guidelines..."
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-xs text-gray-900 focus:outline-none focus:border-primary-orange"
                          />
                        </div>
                        <button
                          type="submit"
                          className="bg-primary-orange hover:bg-orange-600 text-white font-display text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg transition-all shadow flex items-center justify-center gap-1.5 whitespace-nowrap"
                        >
                          Request Consultation <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-orange-50 border border-orange-200 text-orange-800 rounded-lg text-xs flex items-center gap-2.5"
                      >
                        <Shield className="w-5 h-5 text-primary-orange shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Consultation registered for {requestEmail}!</p>
                          <p className="text-gray-600 mt-0.5">We will send standard pricing templates and schedule a systems architect meeting shortly.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
