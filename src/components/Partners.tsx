import React from 'react';
import { PARTNERS } from '../data';

export const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-xs font-display font-bold text-gray-400 uppercase tracking-widest">
            OUR ECOSYSTEM PARTNERS
          </p>
        </div>

        {/* Clean, high-contrast flat grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
          {PARTNERS.map((partner) => (
            <div 
              key={partner.name} 
              className="p-4 rounded-lg bg-surface-alt hover:bg-accent-orange-soft border border-transparent hover:border-orange-100 transition-all flex flex-col items-center text-center group"
            >
              <span className="font-display text-base font-bold text-gray-500 group-hover:text-primary-brand tracking-tight transition-colors">
                {partner.name}
              </span>
              <span className="text-[9px] font-sans text-gray-400 group-hover:text-primary-orange uppercase tracking-wider font-semibold mt-1">
                {partner.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
