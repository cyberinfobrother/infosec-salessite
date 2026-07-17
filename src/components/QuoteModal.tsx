import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, HelpCircle, FileText, Calendar } from 'lucide-react';
import { CostCalculator } from './CostCalculator';
import { motion, AnimatePresence } from 'motion/react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'quote' | 'callback'>('quote');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    needs: 'Managed IT',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      needs: 'Managed IT',
      notes: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-2xl border border-border-subtle max-w-5xl w-full relative z-10 overflow-hidden flex flex-col md:flex-row text-left"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-20 p-1 bg-white rounded-full border border-gray-100 shadow-sm"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Left pane: Dynamic calculator inside modal! */}
        <div className="flex-1 max-h-[85vh] overflow-y-auto p-6 md:p-8 bg-surface-alt">
          <div className="mb-6">
            <h3 className="text-xl font-display font-bold text-gray-900 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-primary-orange" /> IBS Solutions Architect Desk
            </h3>
            <p className="text-xs text-gray-500 font-sans mt-1">
              Configure parameters below to generate an immediate workload support quote estimate.
            </p>
          </div>

          <CostCalculator isModal={true} />
        </div>

        {/* Modal Right pane: Interactive quick consult callback (35% width) */}
        <div className="w-full md:w-[350px] bg-[#984800] text-white p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 shrink-0">
          <div>
            <h4 className="text-sm font-display font-bold text-orange-200 uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Rapid Consultation
            </h4>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <p className="text-xs text-orange-100 leading-relaxed">
                    Prefer direct callback? Submit this ticket to bypass the estimator and schedule a custom audit with an engineer.
                  </p>

                  <div>
                    <label className="text-[10px] font-display font-bold uppercase text-orange-200 block mb-1">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. David Vance" 
                      className="w-full bg-white/10 border border-white/15 rounded-lg px-3 py-2.5 text-xs text-white placeholder-orange-200/40 focus:outline-none focus:border-primary-orange"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-display font-bold uppercase text-orange-200 block mb-1">Work Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. david@enterprise.com" 
                      className="w-full bg-white/10 border border-white/15 rounded-lg px-3 py-2.5 text-xs text-white placeholder-orange-200/40 focus:outline-none focus:border-primary-orange"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-display font-bold uppercase text-orange-200 block mb-1">Company / Organization</label>
                    <input 
                      type="text" 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="e.g. Vance Logistics" 
                      className="w-full bg-white/10 border border-white/15 rounded-lg px-3 py-2.5 text-xs text-white placeholder-orange-200/40 focus:outline-none focus:border-primary-orange"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-display font-bold uppercase text-orange-200 block mb-1">Main Technology Need</label>
                    <select 
                      value={formData.needs}
                      onChange={(e) => setFormData({...formData, needs: e.target.value})}
                      className="w-full bg-white/15 border border-white/15 rounded-lg px-2.5 py-2.5 text-xs text-white focus:outline-none focus:border-primary-orange"
                    >
                      <option className="text-gray-900" value="Managed IT">Managed IT & Helpdesk</option>
                      <option className="text-gray-900" value="Cybersecurity">Enterprise Cybersecurity</option>
                      <option className="text-gray-900" value="Cloud Services">Cloud Hybrid & Migration</option>
                      <option className="text-gray-900" value="Network Engineering">Network Engineering (SD-WAN)</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-primary-orange hover:bg-orange-600 text-white font-display text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-all shadow mt-2"
                  >
                    Schedule Direct Callback <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4 text-center py-6"
                >
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="text-sm font-display font-bold text-white">Consultation Booked!</h5>
                  <p className="text-xs text-orange-100 leading-relaxed">
                    Thank you, {formData.name}. We have registered your direct callback request for <span className="font-semibold text-white">{formData.company}</span> regarding <span className="font-semibold text-white">{formData.needs}</span>.
                  </p>
                  <p className="text-[11px] text-orange-200/80 italic">
                    An IBS Solutions architect is assigned to call you at your email address within 15 minutes.
                  </p>
                  <button 
                    onClick={handleReset}
                    className="text-xs font-semibold text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded transition-all mt-4"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="pt-6 border-t border-white/10 text-[10px] text-orange-200/60 leading-normal font-sans">
            <p>IBS complies with ISO/IEC 27001 data isolation policies. All communications are confidential and secure.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
