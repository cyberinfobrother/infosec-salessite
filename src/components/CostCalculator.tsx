import React, { useState } from 'react';
import { Calculator, CheckCircle2, ChevronRight, HelpCircle, ArrowRight, Shield, Database, Users, Network } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CostCalculatorProps {
  isModal?: boolean;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ isModal = false }) => {
  const [employees, setEmployees] = useState<number>(45);
  const [servers, setServers] = useState<number>(4);
  const [locations, setLocations] = useState<number>(1);
  
  // Service selections
  const [includeManagedIT, setIncludeManagedIT] = useState<boolean>(true);
  const [includeCybersecurity, setIncludeCybersecurity] = useState<boolean>(true);
  const [includeCloudBackup, setIncludeCloudBackup] = useState<boolean>(false);
  const [includeNetworkMgmt, setIncludeNetworkMgmt] = useState<boolean>(false);
  
  // SLA support level
  const [supportLevel, setSupportLevel] = useState<'standard' | 'premium' | 'elite'>('premium');
  
  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  // Calculate pricing based on realistic enterprise models
  const baseUserCost = 45; // $45 per user
  const securityUserCost = 35; // $35 per user
  const cloudServerCost = 90; // $90 per server
  const networkSiteCost = 150; // $150 per location

  let monthlySupportEstimate = 0;
  if (includeManagedIT) monthlySupportEstimate += employees * baseUserCost;
  if (includeCybersecurity) monthlySupportEstimate += employees * securityUserCost;
  if (includeCloudBackup) monthlySupportEstimate += servers * cloudServerCost;
  if (includeNetworkMgmt) monthlySupportEstimate += locations * networkSiteCost;

  // Multiplier for SLA levels
  let slaMultiplier = 1.0;
  if (supportLevel === 'premium') slaMultiplier = 1.25;
  if (supportLevel === 'elite') slaMultiplier = 1.5;

  const totalMonthlyCost = Math.round(monthlySupportEstimate * slaMultiplier);
  const setupOnboardingCost = Math.round(totalMonthlyCost * 0.75); // Setup fee is typically a percentage of monthly

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  const resetCalculator = () => {
    setEmployees(45);
    setServers(4);
    setLocations(1);
    setIncludeManagedIT(true);
    setIncludeCybersecurity(true);
    setIncludeCloudBackup(false);
    setIncludeNetworkMgmt(false);
    setSupportLevel('premium');
    setFormSubmitted(false);
    setFormData({ name: '', email: '', phone: '', notes: '' });
  };

  return (
    <section id="quote-calculator" className={isModal ? "w-full" : "py-20 bg-surface-alt border-y border-border-subtle"}>
      <div className={isModal ? "w-full" : "max-w-7xl mx-auto px-6"}>
        {!isModal && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-orange-soft text-primary-orange font-display text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Calculator className="w-3.5 h-3.5" /> Interactive Planner
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-gray-900 tracking-tight mb-4">
              Build Your Enterprise IT Scope
            </h2>
            <p className="text-gray-600 font-sans text-lg">
              Customize services, size parameters, and response SLA to generate an instant transparent cost estimate. 
            </p>
          </div>
        )}

        <div className={`grid grid-cols-1 ${isModal ? 'gap-6' : 'lg:grid-cols-12 gap-10'} items-stretch`}>
          {/* Controls - Left side */}
          <div className={`${isModal ? 'w-full' : 'lg:col-span-7'} bg-white p-6 md:p-8 rounded-xl border border-border-subtle shadow-sm flex flex-col justify-between`}>
            <div>
              {/* Size Parameters */}
              <h3 className="text-lg font-display font-semibold text-gray-900 mb-6 border-b border-border-subtle pb-2">
                1. Infrastructure Scale
              </h3>
              
              <div className="space-y-6 mb-8">
                {/* Employees */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary-orange" /> Active Employees / Endpoints
                    </label>
                    <span className="text-sm font-bold text-primary-brand bg-accent-orange-soft px-2.5 py-0.5 rounded-full">
                      {employees} users
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="350" 
                    value={employees} 
                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                    className="w-full accent-primary-orange h-2 bg-gray-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                    <span>10 employees</span>
                    <span>150</span>
                    <span>350+</span>
                  </div>
                </div>

                {/* Servers */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Database className="w-4 h-4 text-primary-orange" /> Virtual or Physical Servers
                    </label>
                    <span className="text-sm font-bold text-primary-brand bg-accent-orange-soft px-2.5 py-0.5 rounded-full">
                      {servers} servers
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="40" 
                    value={servers} 
                    onChange={(e) => setServers(parseInt(e.target.value))}
                    className="w-full accent-primary-orange h-2 bg-gray-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                    <span>1 server</span>
                    <span>20</span>
                    <span>40+ servers</span>
                  </div>
                </div>

                {/* Locations */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Network className="w-4 h-4 text-primary-orange" /> Branch Offices / Locations
                    </label>
                    <span className="text-sm font-bold text-primary-brand bg-accent-orange-soft px-2.5 py-0.5 rounded-full">
                      {locations} {locations === 1 ? 'site' : 'sites'}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    value={locations} 
                    onChange={(e) => setLocations(parseInt(e.target.value))}
                    className="w-full accent-primary-orange h-2 bg-gray-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                    <span>1 site</span>
                    <span>5</span>
                    <span>10 sites</span>
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <h3 className="text-lg font-display font-semibold text-gray-900 mb-4 border-b border-border-subtle pb-2">
                2. Select Technology Pillars
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <button
                  type="button"
                  onClick={() => setIncludeManagedIT(!includeManagedIT)}
                  className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${
                    includeManagedIT 
                      ? 'border-primary-orange bg-accent-orange-soft shadow-sm' 
                      : 'border-border-subtle bg-white hover:bg-gray-50'
                  }`}
                >
                  <input 
                    type="checkbox" 
                    checked={includeManagedIT} 
                    readOnly
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-orange focus:ring-primary-orange"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Managed IT Support</p>
                    <p className="text-xs text-gray-500 mt-0.5">Continuous remote & site helpdesk</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setIncludeCybersecurity(!includeCybersecurity)}
                  className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${
                    includeCybersecurity 
                      ? 'border-primary-orange bg-accent-orange-soft shadow-sm' 
                      : 'border-border-subtle bg-white hover:bg-gray-50'
                  }`}
                >
                  <input 
                    type="checkbox" 
                    checked={includeCybersecurity} 
                    readOnly
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-orange focus:ring-primary-orange"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Enterprise Security</p>
                    <p className="text-xs text-gray-500 mt-0.5">Active MDR, SIEM & threat hunting</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setIncludeCloudBackup(!includeCloudBackup)}
                  className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${
                    includeCloudBackup 
                      ? 'border-primary-orange bg-accent-orange-soft shadow-sm' 
                      : 'border-border-subtle bg-white hover:bg-gray-50'
                  }`}
                >
                  <input 
                    type="checkbox" 
                    checked={includeCloudBackup} 
                    readOnly
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-orange focus:ring-primary-orange"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Cloud Hybrid & Backup</p>
                    <p className="text-xs text-gray-500 mt-0.5">Standby servers & continuous mirrors</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setIncludeNetworkMgmt(!includeNetworkMgmt)}
                  className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${
                    includeNetworkMgmt 
                      ? 'border-primary-orange bg-accent-orange-soft shadow-sm' 
                      : 'border-border-subtle bg-white hover:bg-gray-50'
                  }`}
                >
                  <input 
                    type="checkbox" 
                    checked={includeNetworkMgmt} 
                    readOnly
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-orange focus:ring-primary-orange"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Core Network Mgmt</p>
                    <p className="text-xs text-gray-500 mt-0.5">SD-WAN, switches & redundant fiber</p>
                  </div>
                </button>
              </div>

              {/* Service SLA Tier */}
              <h3 className="text-lg font-display font-semibold text-gray-900 mb-4 border-b border-border-subtle pb-2">
                3. SLA Response Tier
              </h3>
              
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', name: 'Standard', desc: '8x5 Support, Next Business Day resolution', mult: '1.0x' },
                  { id: 'premium', name: 'Premium', desc: '24x7 NOC, 4-Hour Response SLA', mult: '1.25x' },
                  { id: 'elite', name: 'Elite', desc: '15-Min Critical response, Dedicated SOC', mult: '1.5x' }
                ].map((level) => (
                  <button
                    key={level.id}
                    type="button"
                    onClick={() => setSupportLevel(level.id as any)}
                    className={`p-3.5 rounded-xl border text-center transition-all flex flex-col items-center justify-between ${
                      supportLevel === level.id 
                        ? 'border-primary-orange bg-primary-brand text-white shadow-sm' 
                        : 'border-border-subtle bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider block">{level.name}</span>
                    <span className={`text-[10px] font-sans block mt-1 leading-snug ${
                      supportLevel === level.id ? 'text-orange-200' : 'text-gray-400'
                    }`}>{level.desc}</span>
                    <span className={`text-xs font-semibold mt-2.5 px-2 py-0.5 rounded ${
                      supportLevel === level.id ? 'bg-orange-950/40 text-orange-200' : 'bg-gray-100 text-gray-500'
                    }`}>{level.mult}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Summary - Right side */}
          <div className={`${isModal ? 'w-full' : 'lg:col-span-5'} flex flex-col justify-between bg-primary-brand text-white p-6 md:p-8 rounded-xl shadow-lg relative overflow-hidden`}>
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-orange/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-lg font-display font-semibold text-orange-200 mb-6 border-b border-white/10 pb-2">
                Estimate Summary
              </h3>

              <div className="space-y-4 mb-8">
                {/* Scale parameters breakdown */}
                <div className="flex justify-between text-sm text-orange-100/80">
                  <span>Scope configuration:</span>
                  <span className="font-semibold text-white">
                    {employees} users / {servers} servers / {locations} {locations === 1 ? 'site' : 'sites'}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-orange-100/80">
                  <span>Support level:</span>
                  <span className="font-semibold text-white uppercase tracking-wider">{supportLevel}</span>
                </div>

                <hr className="border-white/10" />

                {/* Sub-components list */}
                <div className="space-y-2.5 text-xs">
                  {includeManagedIT && (
                    <div className="flex justify-between text-orange-100/90">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary-orange shrink-0" /> Managed IT Helpdesk
                      </span>
                      <span>${employees * baseUserCost}/mo</span>
                    </div>
                  )}
                  {includeCybersecurity && (
                    <div className="flex justify-between text-orange-100/90">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary-orange shrink-0" /> Enterprise Cybersecurity
                      </span>
                      <span>${employees * securityUserCost}/mo</span>
                    </div>
                  )}
                  {includeCloudBackup && (
                    <div className="flex justify-between text-orange-100/90">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary-orange shrink-0" /> Cloud Hybrid Backup
                      </span>
                      <span>${servers * cloudServerCost}/mo</span>
                    </div>
                  )}
                  {includeNetworkMgmt && (
                    <div className="flex justify-between text-orange-100/90">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary-orange shrink-0" /> Core SD-WAN Network
                      </span>
                      <span>${locations * networkSiteCost}/mo</span>
                    </div>
                  )}

                  {slaMultiplier > 1 && (
                    <div className="flex justify-between text-primary-orange font-semibold">
                      <span>SLA Response Multiplier</span>
                      <span>x{slaMultiplier}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-black/20 p-5 rounded-lg border border-white/5 mb-8">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-orange-200 block">Estimated Monthly Support</span>
                    <span className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                      ${totalMonthlyCost.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-orange-200/70 block mt-0.5">*Based on 12-mo contract commitment</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-white/10 text-xs text-orange-100/90">
                  <span>Estimated Onboarding & Audit fee:</span>
                  <span className="font-bold text-white">${setupOnboardingCost.toLocaleString()} (one-time)</span>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="space-y-3"
                  >
                    <p className="text-xs text-orange-100/80 mb-2">
                      Submit this profile to our engineering desk for a formal audit.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Name" 
                        className="bg-white/10 border border-white/15 rounded px-3 py-2 text-xs text-white placeholder-orange-200/50 focus:outline-none focus:border-primary-orange w-full"
                      />
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Work Email" 
                        className="bg-white/10 border border-white/15 rounded px-3 py-2 text-xs text-white placeholder-orange-200/50 focus:outline-none focus:border-primary-orange w-full"
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={!formData.name || !formData.email}
                      className="w-full bg-primary-orange hover:bg-orange-600 disabled:bg-white/10 disabled:text-white/40 text-white font-display text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-all shadow"
                    >
                      Lock In This Estimate <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-950/40 border border-emerald-500/30 p-5 rounded-lg text-center"
                  >
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-sm font-display font-bold text-white mb-1">Inquiry Registered Successfully!</h4>
                    <p className="text-xs text-emerald-200/80 mb-4">
                      An IBS Enterprise Solutions Director will call you back within 15 minutes to coordinate your on-site infrastructure review.
                    </p>
                    <button 
                      onClick={resetCalculator}
                      className="text-xs font-semibold text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded transition-all"
                    >
                      Calculate New Scope
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
