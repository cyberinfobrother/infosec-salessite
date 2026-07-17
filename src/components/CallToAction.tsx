import React from 'react';
import { ArrowRight, Calendar, ShieldCheck, Mail } from 'lucide-react';

interface CallToActionProps {
  onOpenQuoteModal: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="bg-[#984800] text-white py-20 relative overflow-hidden text-center">
      {/* Dynamic graphic rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-orange-200 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-primary-orange" /> Secure Workspace Onboarding
        </div>

        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
          Ready to Transform Your Business?
        </h2>

        <p className="text-orange-100 font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Take the first step towards a more secure, efficient, and scalable technology environment. Our accredited enterprise experts are ready to audit your current systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={onOpenQuoteModal}
            className="bg-white text-primary-brand hover:bg-orange-50 font-display text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2"
          >
            Talk to an Expert <ArrowRight className="w-4 h-4 text-primary-orange" />
          </button>
          <button
            onClick={onOpenQuoteModal}
            className="border border-white/40 hover:border-white text-white font-display text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-orange-300" /> Schedule a Demo
          </button>
        </div>

        {/* Footnote status banner */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] text-orange-200/60 font-medium">
          <span>SLA starts instantly on hardware hand-offs</span>
          <span>•</span>
          <span>Zero-liability structural risk reviews</span>
          <span>•</span>
          <span>Complies with strict federal separation guidelines</span>
        </div>
      </div>
    </section>
  );
};
