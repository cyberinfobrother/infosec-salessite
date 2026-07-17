import React from 'react';
import { Users, Calendar, Award, PhoneCall } from 'lucide-react';

export const Metrics: React.FC = () => {
  const stats = [
    { value: '100+', label: 'CLIENTS', desc: 'Active Global Enterprises', icon: Users },
    { value: '15+', label: 'YEARS', desc: 'Proven Industry Excellence', icon: Calendar },
    { value: '99%', label: 'SATISFACTION', desc: 'SLA Support Rating', icon: Award },
    { value: '24/7', label: 'SUPPORT', desc: 'On-Duty Operations Desk', icon: PhoneCall }
  ];

  return (
    <section className="bg-[#984800] text-white py-12 relative overflow-hidden">
      {/* Decorative vector background meshes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-1/2 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-orange-400/20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label} 
                className={`text-center flex flex-col items-center justify-center ${
                  idx > 1 ? 'pt-6 md:pt-0' : idx > 0 ? 'pt-0 md:pt-0' : ''
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1.5 justify-center">
                  <Icon className="w-5 h-5 text-orange-200 opacity-80" />
                  <span className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-none">
                    {stat.value}
                  </span>
                </div>
                <p className="text-xs font-display font-bold text-orange-200 tracking-widest uppercase mb-0.5">
                  {stat.label}
                </p>
                <p className="text-[10px] text-orange-100/75 font-sans font-medium">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
