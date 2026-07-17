import React from 'react';
import { Calendar, UserCheck, ShieldCheck, Network, Award, HardDrive } from 'lucide-react';

export const WhyTrustUs: React.FC = () => {
  const trustPoints = [
    {
      title: '15+ Years',
      subtitle: 'Operational experience',
      desc: 'Proven leadership overseeing systems through rapid global technological growth eras.',
      icon: Calendar
    },
    {
      title: 'Certified Engineers',
      subtitle: 'Platform experts',
      desc: 'Multi-cloud and virtualization certified technical architects leading deployments.',
      icon: UserCheck
    },
    {
      title: '24/7 Support',
      subtitle: 'Global response team',
      desc: 'Responsive, human helpdesk monitoring critical workflows to guarantee constant continuity.',
      icon: ShieldCheck
    },
    {
      title: 'Enterprise Solutions',
      subtitle: 'Scalable architecture',
      desc: 'High-density, modular infrastructure designed to grow with your operations seamlessly.',
      icon: Network
    }
  ];

  return (
    <section id="about" className="py-24 bg-surface-alt border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Copy & Grid of trust indicators */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-12 h-0.5 bg-primary-orange inline-block" />
              <span className="text-xs font-display font-bold text-primary-orange uppercase tracking-wider">Strategic Reliability</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-semibold text-gray-900 tracking-tight leading-snug">
              Why Organizations Trust IBS
            </h2>

            <p className="font-sans text-gray-600 leading-relaxed text-sm md:text-base">
              For over two decades, InfoBro Business Solutions has been a cornerstone for enterprises seeking technical excellence and unwavering reliability. Our approach combines deep expertise with a boutique service touch to prevent outages before they happen.
            </p>

            {/* Bullet points grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {trustPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div 
                    key={point.title} 
                    className="p-5 bg-white rounded-xl border border-border-subtle flex flex-col items-start hover:border-orange-200 hover:shadow-sm transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent-orange-soft text-primary-orange flex items-center justify-center mb-3">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-base font-display font-bold text-gray-900 leading-none mb-1">
                      {point.title}
                    </h3>
                    <p className="text-[11px] font-display font-semibold text-primary-brand tracking-wide uppercase mb-2">
                      {point.subtitle}
                    </p>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-sans">
                      {point.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Premium Datacenter Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] border border-border-subtle bg-slate-950 group">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80" 
                alt="IBS Secure Enterprise Datacenter Corridor" 
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Layout Graphic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating SLA stats */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-white/20 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#984800] text-white flex items-center justify-center shrink-0">
                    <Award className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-display font-bold text-gray-900 leading-none mb-1">Guaranteed Continuity</h4>
                    <p className="text-[10px] text-gray-500 leading-none">Standard redundant backup pathways</p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-lg font-display font-bold text-primary-brand block leading-none">99.999%</span>
                  <span className="text-[9px] font-sans font-semibold text-gray-400 block uppercase tracking-wider mt-1">Uptime Metric</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
