import React, { useState } from 'react';
import { Star, Shield, Quote, Filter } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export const ClientExperiences: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'healthcare' | 'finance' | 'manufacturing'>('all');

  const filteredReviews = filter === 'all' 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter(r => r.category === filter);

  const categories = [
    { id: 'all', label: 'ALL CRITIQUES' },
    { id: 'healthcare', label: 'HEALTHCARE' },
    { id: 'finance', label: 'FINANCE' },
    { id: 'manufacturing', label: 'MANUFACTURING' }
  ];

  return (
    <section className="py-24 bg-white text-left">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-12 h-0.5 bg-primary-orange inline-block" />
              <span className="text-xs font-display font-bold text-primary-orange uppercase tracking-wider">Client Experiences</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-gray-900 tracking-tight leading-none mb-4">
              Proven Global Client Success
            </h2>
            <p className="text-gray-600 font-sans text-sm max-w-xl">
              Reliability is proven through the success of our partners. Read direct statements from enterprise technology leaders.
            </p>
          </div>

          {/* Interactive filter buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-4 py-2 rounded-lg text-[10px] font-display font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === cat.id
                    ? 'bg-primary-brand text-white shadow'
                    : 'bg-surface-alt text-gray-600 hover:bg-gray-200 border border-border-subtle'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-xl border border-border-subtle hover:border-orange-200 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative"
              >
                {/* Visual quote indicator */}
                <div className="absolute top-6 right-8 text-orange-200/50">
                  <Quote className="w-10 h-10 rotate-180" />
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-gray-700 italic font-sans text-sm leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author profile */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-display font-bold text-gray-900 leading-none mb-1">
                      {item.author}
                    </h4>
                    <p className="text-[11px] font-sans text-gray-400">
                      {item.role}, <span className="font-semibold text-gray-500">{item.company}</span>
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-accent-orange-soft flex items-center justify-center text-primary-orange shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
