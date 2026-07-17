import React, { useState } from 'react';
import { HeartPulse, Building, GraduationCap, DollarSign, ShoppingBag, Factory, Shield, Check, Award, ArrowRight, ArrowLeftRight } from 'lucide-react';
import { INDUSTRIES } from '../data';
import { IndustryItem } from '../types';
import { IconResolver } from './IconResolver';
import { motion, AnimatePresence } from 'motion/react';

export const VerticalExpertise: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('healthcare');

  const selectedIndustry = INDUSTRIES.find(ind => ind.id === activeTab) || INDUSTRIES[0];

  return (
    <section id="industries" className="py-24 bg-surface-alt border-y border-border-subtle text-left">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-12 h-1.5 bg-primary-orange mx-auto mb-4 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-gray-900 tracking-tight mb-4">
            Vertical-Specific Expertise
          </h2>
          <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Technology is not one-size-fits-all. We provide specialized solutions tailored to the unique regulatory and operational needs of key industries.
          </p>
        </div>

        {/* 6 Industry Selector Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-8">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(ind.id)}
              className={`p-5 rounded-xl border text-center flex flex-col items-center justify-center transition-all cursor-pointer ${
                activeTab === ind.id
                  ? 'border-primary-orange bg-primary-brand text-white shadow-md'
                  : 'border-border-subtle bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                activeTab === ind.id ? 'bg-white/10 text-white' : 'bg-accent-orange-soft text-primary-orange'
              }`}>
                <IconResolver name={ind.iconName} className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-display font-bold uppercase tracking-wider block">
                {ind.title}
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Deep Dive Detail Board */}
        <div className="bg-white rounded-xl border border-border-subtle overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border-subtle">
            {/* Left board: details & core features (7 cols) */}
            <div className="lg:col-span-7 p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndustry.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-display font-bold text-primary-orange bg-accent-orange-soft px-3 py-1 rounded-full uppercase tracking-wider">
                      {selectedIndustry.title} Vertical Solution
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-semibold text-gray-900 mb-2">
                      {selectedIndustry.subtitle}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans">
                      {selectedIndustry.description}
                    </p>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-display font-bold text-gray-400 uppercase tracking-wider">Engineered Integrations:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedIndustry.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                          <Check className="w-4 h-4 text-primary-orange shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right board: Compliance & Case studies (5 cols) */}
            <div className="lg:col-span-5 p-8 md:p-10 bg-surface-alt flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndustry.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 flex flex-col h-full justify-between"
                >
                  {/* Compliance segment */}
                  <div>
                    <h4 className="text-xs font-display font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-primary-orange" /> Audit Compliance Alignment
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedIndustry.complianceStandards.map((std) => (
                        <span key={std} className="text-[10px] font-sans font-bold bg-white text-gray-700 border border-border-subtle px-2.5 py-1 rounded">
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Real-world case study container */}
                  <div className="bg-white p-5 rounded-lg border border-border-subtle">
                    <h5 className="text-[10px] font-display font-bold text-primary-brand uppercase tracking-wider mb-2.5 flex items-center gap-1">
                      <Award className="w-4 h-4 text-primary-orange" /> Proven Outcome Case Study
                    </h5>
                    <h6 className="text-xs font-display font-bold text-gray-900 mb-1">
                      {selectedIndustry.useCase.title}
                    </h6>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-sans">
                      "{selectedIndustry.useCase.description}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
