import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Shield, 
  FileText, 
  MapPin, 
  Globe, 
  Clock, 
  Mail, 
  Phone, 
  ExternalLink, 
  CheckCircle, 
  AlertTriangle,
  Users,
  Key,
  Database,
  Building2,
  ListCollapse,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';

interface FooterPagesProps {
  activeTab: 'privacy' | 'terms' | 'locations' | 'sitemap';
  onTabChange: (tab: 'privacy' | 'terms' | 'locations' | 'sitemap') => void;
  onClose: (targetSectionId?: string) => void;
  onSelectServicePage: (serviceId: string, origin?: string) => void;
}

export const FooterPages: React.FC<FooterPagesProps> = ({ 
  activeTab, 
  onTabChange, 
  onClose,
  onSelectServicePage
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('manila');
  
  // Local time state for global offices
  const [localTimes, setLocalTimes] = useState({
    manila: '',
    siliconValley: '',
    london: '',
    singapore: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const updateTimes = () => {
      const formatTime = (timeZone: string) => {
        return new Intl.DateTimeFormat('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
          timeZone
        }).format(new Date());
      };

      setLocalTimes({
        manila: formatTime('Asia/Manila'),
        siliconValley: formatTime('America/Los_Angeles'),
        london: formatTime('Europe/London'),
        singapore: formatTime('Asia/Singapore')
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyDPOEmail = () => {
    navigator.clipboard.writeText('dpo@cyberinfobro.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy', icon: Shield },
    { id: 'terms', label: 'Terms of Service', icon: FileText },
    { id: 'locations', label: 'Global Locations', icon: Globe },
    { id: 'sitemap', label: 'Sitemap', icon: ListCollapse }
  ] as const;

  const locationsData = {
    manila: {
      name: 'Manila, Philippines (APAC Headquarters)',
      city: 'Taguig City, Metro Manila',
      address: '28th Floor, Ore Central Tower, 31st Street corner 9th Avenue, Bonifacio Global City, Taguig, 1634 Metro Manila, Philippines',
      timezone: 'Asia/Manila',
      coordinates: '14.5547° N, 121.0494° E',
      phone: '+63 (2) 8888-4272 (IBS-APAC)',
      email: 'manila.office@ibssolutions.com',
      features: [
        'APAC Network Operations Center (NOC)',
        'Primary Security Operations Center (SOC)',
        'National Privacy Commission (NPC) Certified Compliance Team',
        'ISO/IEC 27001 audit hub'
      ],
      description: 'Serving as our primary operations center for Asia-Pacific, the BGC facility is home to our leading-edge threat intelligence team and houses a tier-3 fault-tolerant security operations laboratory.'
    },
    siliconValley: {
      name: 'Silicon Valley, USA (Technology Innovation)',
      city: 'Palo Alto, California',
      address: '420 University Avenue, Palo Alto, CA 94301, United States',
      timezone: 'America/Los_Angeles',
      coordinates: '37.4419° N, 122.1430° W',
      phone: '+1 (650) 555-0190',
      email: 'us.office@ibssolutions.com',
      features: [
        'Global Cloud R&D Division',
        'Executive Leadership Office',
        'Strategic Tech Partner Integrations',
        'Hyperscaler Research & Integration'
      ],
      description: 'Our Silicon Valley branch drives global technology research and maintains strategic development agreements with key hyperscale partners and enterprise software suppliers.'
    },
    london: {
      name: 'London, United Kingdom (EMEA Hub)',
      city: 'Canary Wharf, London',
      address: 'Level 39, One Canada Square, Canary Wharf, London E14 5AB, United Kingdom',
      timezone: 'Europe/London',
      coordinates: '51.5048° N, 0.0195° W',
      phone: '+44 (20) 7946 0192',
      email: 'emea.office@ibssolutions.com',
      features: [
        'GDPR Compliance Taskforce',
        'Financial Services IT Advisory Unit',
        'European Cyber Response Team (ECRT)',
        'E-ID & GovTech Research Lab'
      ],
      description: 'Positioned in the heart of London’s financial sector, our Canary Wharf offices support enterprise banking clients and govern European compliance operations.'
    },
    singapore: {
      name: 'Singapore (APAC Regional Node)',
      city: 'Marina Bay Sands District',
      address: '8 Marina Boulevard, Tower 1 Marina Bay Financial Centre, Singapore 018981',
      timezone: 'Asia/Singapore',
      coordinates: '1.2789° N, 103.8543° E',
      phone: '+65 6888 0199',
      email: 'sg.office@ibssolutions.com',
      features: [
        'South-East Asia Primary Datacenter Core',
        'Disaster Recovery Coordination Unit',
        'Cross-Border Digital Infrastructure Operations',
        'FinTech Sandbox Support Office'
      ],
      description: 'Our Singapore office handles regional high-frequency data routing, enterprise recovery solutions, and manages state-of-the-art secure routing pipelines.'
    }
  };

  return (
    <div className="bg-background-warm min-h-screen pt-28 pb-20 relative overflow-hidden text-left" id="footer-pages-view">
      {/* Background Decorative Mesh Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary-brand/5 to-transparent pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Navigation back and header banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-gray-200/80 mb-10">
          <div>
            <button 
              onClick={() => onClose()}
              className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-primary-brand hover:text-primary-orange transition-colors group mb-4 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </button>
            <h1 className="text-3xl md:text-4xl font-display font-extrabold text-primary-brand tracking-tight">
              Corporate & Legal Center
            </h1>
            <p className="text-gray-500 font-sans text-xs mt-1">
              InfoBro Business Solutions • Professional Corporate Standards & Frameworks
            </p>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="flex flex-wrap gap-2 bg-gray-100 p-1.5 rounded-xl border border-gray-200/50">
            {tabs.map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-display font-bold transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-primary-brand text-white shadow' 
                      : 'text-gray-600 hover:bg-gray-200 hover:text-primary-brand'
                  }`}
                >
                  <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-primary-orange' : ''}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENT ZONE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Area */}
          <div className="lg:col-span-9 bg-white border border-gray-200/60 rounded-2xl shadow-sm p-6 md:p-10 min-h-[500px]">
            
            {/* 1. PRIVACY POLICY */}
            {activeTab === 'privacy' && (
              <div className="space-y-8">
                <div className="border-b border-gray-100 pb-6">
                  <span className="bg-orange-50 text-primary-orange font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded border border-orange-200/50">
                    NPC RA 10173 COMPLIANT
                  </span>
                  <h2 className="text-2xl font-display font-extrabold text-primary-brand mt-4">
                    Philippines Data Privacy Act Compliance Policy
                  </h2>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    Last Updated: July 17, 2026 • Version 2.1 • Managed by IBS Legal & Governance Office
                  </p>
                </div>

                <div className="prose prose-sm text-gray-600 font-sans leading-relaxed space-y-6 text-xs md:text-sm">
                  <p>
                    <strong>InfoBro Business Solutions, Inc. (IBS)</strong>, also referenced as <em>Cyber InfoBro</em>, 
                    is deeply committed to protecting the fundamental human right to privacy of our clients, visitors, and partners. 
                    This Policy governs the collection, processing, security, and disposal of personal information by IBS in strict 
                    accordance with the <strong>Republic Act No. 10173</strong>, otherwise known as the 
                    <strong>Philippines Data Privacy Act of 2012 (DPA)</strong>, and its Implementing Rules and Regulations (IRR).
                  </p>

                  <div className="p-4 bg-orange-50/50 border-l-4 border-primary-orange rounded-r-xl space-y-2">
                    <h4 className="font-display font-bold text-xs text-primary-brand uppercase tracking-wider flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-primary-orange" />
                      Core Processing Principles
                    </h4>
                    <p className="text-xs text-gray-600">
                      We ensure that all personal, sensitive personal, or privileged information processed by IBS is managed with 
                      unwavering adherence to the three core tenets established by the National Privacy Commission (NPC):
                    </p>
                    <ul className="list-disc pl-5 text-xs text-gray-500 space-y-1">
                      <li><strong>Transparency:</strong> Making clear the intent, scope, and method of our processing.</li>
                      <li><strong>Legitimate Purpose:</strong> Standardizing processing exclusively for lawful business requirements.</li>
                      <li><strong>Proportionality:</strong> Restricting processing only to the minimal necessary data suited for the objective.</li>
                    </ul>
                  </div>

                  <h3 className="text-base font-display font-bold text-primary-brand border-b border-gray-100 pb-2 mt-8">
                    1. Information We Collect and Process
                  </h3>
                  <p>
                    To deliver our enterprise technology integrations, cybersecurity analysis, and managed services, we may collect and process:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Personal Details:</strong> Names, official business titles, affiliated corporations, and system responsibilities.</li>
                    <li><strong>Contact Metadata:</strong> Corporate email addresses, physical office routing directories, and telephone lines.</li>
                    <li><strong>Technical Device Logs:</strong> IP address indicators, secure session tokens, network telemetry, and cookie identifiers processed during remote system analysis.</li>
                    <li><strong>Consultation Inputs:</strong> Requirements inputted directly into our digital Cost Calculator or submitted during quote requests.</li>
                  </ul>

                  <h3 className="text-base font-display font-bold text-primary-brand border-b border-gray-100 pb-2 mt-8">
                    2. Data Subject Rights (Section 16 of RA 10173)
                  </h3>
                  <p>
                    Under the Philippine DPA, you are granted extensive data privacy rights. IBS respects and protects these entitlements:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="border border-gray-100 p-4 rounded-xl space-y-1.5 bg-gray-50/30">
                      <h4 className="font-display font-bold text-xs text-primary-brand">A. Right to be Informed & Access</h4>
                      <p className="text-[11px] text-gray-500 leading-normal">
                        You have the right to request access to and receive detailed briefings regarding the nature, collection schedule, processing reasons, and storage safeguards of your personal information.
                      </p>
                    </div>
                    <div className="border border-gray-100 p-4 rounded-xl space-y-1.5 bg-gray-50/30">
                      <h4 className="font-display font-bold text-xs text-primary-brand">B. Right to Rectification & Erasure</h4>
                      <p className="text-[11px] text-gray-500 leading-normal">
                        You are entitled to dispute any inaccuracy or error in your personal data and demand immediate correction, or request the erasure or blocking of your records from our active processing registries.
                      </p>
                    </div>
                    <div className="border border-gray-100 p-4 rounded-xl space-y-1.5 bg-gray-50/30">
                      <h4 className="font-display font-bold text-xs text-primary-brand">C. Right to Object & Portability</h4>
                      <p className="text-[11px] text-gray-500 leading-normal">
                        You have the right to refuse the processing of your data for marketing or profiling, and to obtain a copy of your personal data in a highly structured, machine-readable format.
                      </p>
                    </div>
                    <div className="border border-gray-100 p-4 rounded-xl space-y-1.5 bg-gray-50/30">
                      <h4 className="font-display font-bold text-xs text-primary-brand">D. Right to Damages & NPC Complaint</h4>
                      <p className="text-[11px] text-gray-500 leading-normal">
                        You may claim compensation for damages sustained due to inaccurate, incomplete, outdated, or unauthorized use of data, and file a formal case before the National Privacy Commission.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-base font-display font-bold text-primary-brand border-b border-gray-100 pb-2 mt-8">
                    3. Security Measures and Safeguards
                  </h3>
                  <p>
                    IBS implements state-of-the-art administrative, physical, and technical security controls to prevent data alteration, loss, unauthorized access, or processing leaks:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Encryption:</strong> AES-256 bit encryption applied to all personal data at rest and TLS 1.3 for data in transit.</li>
                    <li><strong>Access Control:</strong> Zero-Trust Network Architecture (ZTNA) restricts client metadata access strictly to authorized support personnel.</li>
                    <li><strong>Auditing:</strong> Bi-annual independent security penetration testing and ongoing automated threat assessment scans.</li>
                    <li><strong>Disposal Protocol:</strong> Strict physical shredding standards and cryptographic deletion schemes to completely wipe expired data.</li>
                  </ul>

                  <h3 className="text-base font-display font-bold text-primary-brand border-b border-gray-100 pb-2 mt-8">
                    4. Data Retention Limits
                  </h3>
                  <p>
                    We retain personal information only for the duration required to satisfy the original business objectives or to fulfill statutory audit obligations. 
                    Unless prescribed otherwise by law (such as tax audit timelines), active communication registries are securely deleted <strong>two (2) years</strong> 
                    after the termination of client engagement or inquiries.
                  </p>

                  <h3 className="text-base font-display font-bold text-primary-brand border-b border-gray-100 pb-2 mt-8">
                    5. Compliance Contact Details (Data Protection Officer)
                  </h3>
                  <p>
                    If you have questions, complaints, or seek to exercise your rights under the Philippine DPA, you may directly communicate with our corporate Data Protection Officer (DPO):
                  </p>

                  <div className="border border-gray-200/60 p-5 rounded-2xl bg-gray-50/40 space-y-3 max-w-xl">
                    <p className="font-display font-bold text-xs text-primary-brand uppercase tracking-wider">
                      IBS Data Protection & Governance Committee
                    </p>
                    <div className="space-y-1.5 text-xs text-gray-500">
                      <p className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-primary-orange shrink-0" />
                        <span><strong>Data Protection Officer:</strong> Atty. Maria Clara Santos, CIPP/E</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-primary-orange shrink-0" />
                        <span>Ore Central Tower, BGC, Taguig City, Metro Manila, Philippines</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-primary-orange shrink-0" />
                        <span>dpo@cyberinfobro.com</span>
                      </p>
                    </div>
                    <button
                      onClick={handleCopyDPOEmail}
                      className="px-4 py-2 bg-primary-brand text-white font-display text-[10px] font-bold uppercase tracking-wider rounded-lg hover:bg-primary-orange transition-colors cursor-pointer"
                    >
                      {copiedEmail ? 'Copied Contact Email!' : 'Copy DPO Contact Email'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 2. TERMS OF SERVICE */}
            {activeTab === 'terms' && (
              <div className="space-y-8">
                <div className="border-b border-gray-100 pb-6">
                  <span className="bg-orange-50 text-primary-orange font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded border border-orange-200/50">
                    SERVICE CHARTER & CONTRACT
                  </span>
                  <h2 className="text-2xl font-display font-extrabold text-primary-brand mt-4">
                    Master Terms of Service Agreement
                  </h2>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    Effective: July 17, 2026 • Version 4.0 • Authorized by Executive Counsel
                  </p>
                </div>

                <div className="prose prose-sm text-gray-600 font-sans leading-relaxed space-y-6 text-xs md:text-sm">
                  <p>
                    Welcome to the website and services of <strong>InfoBro Business Solutions, Inc.</strong> ("IBS" or "Company"). 
                    By accessing our web platforms, using our dynamic IT Cost Calculator, request portals, or engaging our consulting 
                    services, you agree to be bound by the following Master Terms of Service. Please review these covenants carefully.
                  </p>

                  <h3 className="text-base font-display font-bold text-primary-brand border-b border-gray-100 pb-2 mt-8">
                    1. Scope of Services
                  </h3>
                  <p>
                    IBS provides premium enterprise technology integration, cybersecurity assessments, managed system administration, 
                    and digital transformation advisory. The specific service deliverables, service level agreements (SLAs), and fees 
                    are structured separately under individualized Statements of Work (SOW) or Master Services Agreements (MSA).
                  </p>

                  <h3 className="text-base font-display font-bold text-primary-brand border-b border-gray-100 pb-2 mt-8">
                    2. Intellectual Property Rights
                  </h3>
                  <p>
                    All materials on this website and within our systems—including but not limited to design schemas, mathematical calculators, 
                    illustrations, codebases, and copywriting—are the exclusive intellectual property of IBS or its licensors. 
                    No portion of our proprietary assets may be duplicated, reverse-engineered, or distributed without written clearance.
                  </p>

                  <h3 className="text-base font-display font-bold text-primary-brand border-b border-gray-100 pb-2 mt-8">
                    3. Acceptable Use Policy
                  </h3>
                  <p>
                    Users are strictly prohibited from attempting to breach, degrade, or bypass the security of our application systems:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Unauthorized automated data scraping, vulnerability scanning, or penetration testing of our web platforms.</li>
                    <li>Using our consultation systems to feed mock datasets containing malicious code or deceptive entities.</li>
                    <li>Interfering with the servers, infrastructure, or routing networks supporting the delivery of our apps.</li>
                  </ul>

                  <h3 className="text-base font-display font-bold text-primary-brand border-b border-gray-100 pb-2 mt-8">
                    4. Limitation of Liability
                  </h3>
                  <p>
                    To the maximum extent permitted by the laws of the Republic of the Philippines, IBS and its executives shall not 
                    be liable for any indirect, incidental, special, punitive, or consequential damages arising out of your access 
                    to this website or our public digital services.
                  </p>

                  <div className="p-4 bg-gray-50 border-l-4 border-gray-400 rounded-r-xl">
                    <p className="text-[11px] text-gray-500 italic">
                      "IBS provides its digital calculator and demo estimates purely for informational purposes. They do not constitute 
                      a binding guarantee of final implementation fees or contract parameters, which remain exclusively subject to final 
                      technical scoping."
                    </p>
                  </div>

                  <h3 className="text-base font-display font-bold text-primary-brand border-b border-gray-100 pb-2 mt-8">
                    5. Governing Law and Arbitration
                  </h3>
                  <p>
                    These terms are governed by and construed in accordance with the laws of the **Republic of the Philippines**. 
                    Any legal dispute or claim arising under this contract that cannot be settled amicably shall be submitted to exclusive 
                    arbitration under the alternative dispute resolution rules in Metro Manila, Philippines.
                  </p>
                </div>
              </div>
            )}

            {/* 3. GLOBAL LOCATIONS */}
            {activeTab === 'locations' && (
              <div className="space-y-8">
                <div className="border-b border-gray-100 pb-6">
                  <span className="bg-orange-50 text-primary-orange font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded border border-orange-200/50">
                    GLOBAL FOOTPRINT
                  </span>
                  <h2 className="text-2xl font-display font-extrabold text-primary-brand mt-4">
                    International Infrastructure & Office Network
                  </h2>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    Operating 24/7/365 across critical technological hubs.
                  </p>
                </div>

                {/* Main office selection layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  {Object.entries(locationsData).map(([key, loc]) => {
                    const isActive = selectedLocation === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setSelectedLocation(key)}
                        className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                          isActive 
                            ? 'bg-primary-brand text-white border-primary-brand shadow-md shadow-primary-brand/10' 
                            : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700'
                        }`}
                      >
                        <Building2 className={`w-5 h-5 mb-2 ${isActive ? 'text-primary-orange' : 'text-gray-400'}`} />
                        <p className="font-display font-extrabold text-xs tracking-tight line-clamp-1">
                          {key === 'manila' ? 'Manila, PH' : key === 'siliconValley' ? 'Silicon Valley, US' : key === 'london' ? 'London, UK' : 'Singapore'}
                        </p>
                        <p className={`text-[10px] font-mono mt-1 ${isActive ? 'text-orange-200' : 'text-gray-400'}`}>
                          {localTimes[key as keyof typeof localTimes] || 'Loading...'}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Location Profile */}
                {(() => {
                  const loc = locationsData[selectedLocation as keyof typeof locationsData];
                  return (
                    <motion.div 
                      key={selectedLocation}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gray-50/50 border border-gray-200/50 rounded-2xl p-6 md:p-8 space-y-6"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-5">
                        <div>
                          <p className="text-xs font-mono text-primary-orange font-bold uppercase tracking-widest">
                            Active Facility Profile
                          </p>
                          <h3 className="text-lg md:text-xl font-display font-extrabold text-primary-brand">
                            {loc.name}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 text-xs">
                          <Clock className="w-4 h-4 text-primary-orange animate-spin-slow" />
                          <span className="font-mono font-bold text-gray-700">
                            Local Time: {localTimes[selectedLocation as keyof typeof localTimes] || 'Loading...'}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs md:text-sm text-gray-600 font-sans leading-relaxed">
                        {loc.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3.5">
                          <h4 className="font-display font-bold text-xs text-primary-brand uppercase tracking-wider">
                            Location Directory
                          </h4>
                          <ul className="space-y-2.5 text-xs text-gray-500 font-sans">
                            <li className="flex items-start gap-2">
                              <MapPin className="w-4 h-4 text-primary-orange shrink-0 mt-0.5" />
                              <span>{loc.address}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Globe className="w-4 h-4 text-primary-orange shrink-0" />
                              <span>Coordinates: <strong className="font-mono">{loc.coordinates}</strong></span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-primary-orange shrink-0" />
                              <span>{loc.phone}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-primary-orange shrink-0" />
                              <span>{loc.email}</span>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-3.5">
                          <h4 className="font-display font-bold text-xs text-primary-brand uppercase tracking-wider">
                            Operational Specializations
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {loc.features.map((feat, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-gray-600 bg-white p-2.5 rounded-lg border border-gray-100">
                                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                                <span className="font-sans font-medium">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}

                {/* Compliance Badge list */}
                <div className="p-4 bg-primary-brand text-white rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-primary-orange shrink-0" />
                    <div>
                      <p className="text-xs font-display font-extrabold uppercase tracking-wider text-orange-200">
                        Global Operational Standards
                      </p>
                      <p className="text-[10px] text-gray-300 font-sans">
                        All international branches operate under unified security governance.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[9px] font-mono text-gray-200 font-bold uppercase">
                    <span className="px-2 py-1 bg-white/10 rounded">ISO/IEC 27001</span>
                    <span className="px-2 py-1 bg-white/10 rounded">SOC 2 Type II</span>
                    <span className="px-2 py-1 bg-white/10 rounded">GDPR compliant</span>
                    <span className="px-2 py-1 bg-white/10 rounded">NPC registered</span>
                  </div>
                </div>
              </div>
            )}

            {/* 4. SITEMAP */}
            {activeTab === 'sitemap' && (
              <div className="space-y-8">
                <div className="border-b border-gray-100 pb-6">
                  <span className="bg-orange-50 text-primary-orange font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded border border-orange-200/50">
                    PLATFORM SCHEMA
                  </span>
                  <h2 className="text-2xl font-display font-extrabold text-primary-brand mt-4">
                    Interactive Directory Map
                  </h2>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    Quick navigation and access across Cyber InfoBro’s functional components.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Column 1: Core Portal Structure */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                      <div className="w-1.5 h-3 bg-primary-orange rounded-full" />
                      <h3 className="font-display font-extrabold text-xs text-primary-brand uppercase tracking-wider">
                        Core Main Sections
                      </h3>
                    </div>
                    <ul className="space-y-2 text-xs text-gray-500 font-sans">
                      <li>
                        <button onClick={() => onClose('home')} className="hover:text-primary-orange transition-colors flex items-center gap-1 cursor-pointer">
                          <ChevronRight className="w-3 h-3 text-primary-orange" /> Home Hero Landing
                        </button>
                      </li>
                      <li>
                        <button onClick={() => onClose('services')} className="hover:text-primary-orange transition-colors flex items-center gap-1 cursor-pointer">
                          <ChevronRight className="w-3 h-3 text-primary-orange" /> Managed IT Services Grid
                        </button>
                      </li>
                      <li>
                        <button onClick={() => onClose('solutions')} className="hover:text-primary-orange transition-colors flex items-center gap-1 cursor-pointer">
                          <ChevronRight className="w-3 h-3 text-primary-orange" /> Full-Spectrum Carousel
                        </button>
                      </li>
                      <li>
                        <button onClick={() => onClose('trust')} className="hover:text-primary-orange transition-colors flex items-center gap-1 cursor-pointer">
                          <ChevronRight className="w-3 h-3 text-primary-orange" /> Core Security & Trust Pillar
                        </button>
                      </li>
                      <li>
                        <button onClick={() => onClose('verticals')} className="hover:text-primary-orange transition-colors flex items-center gap-1 cursor-pointer">
                          <ChevronRight className="w-3 h-3 text-primary-orange" /> Industry Vertical Expertise
                        </button>
                      </li>
                      <li>
                        <button onClick={() => onClose('calculator')} className="hover:text-primary-orange transition-colors flex items-center gap-1 cursor-pointer">
                          <ChevronRight className="w-3 h-3 text-primary-orange" /> Scope Budget Calculator
                        </button>
                      </li>
                      <li>
                        <button onClick={() => onClose('testimonials')} className="hover:text-primary-orange transition-colors flex items-center gap-1 cursor-pointer">
                          <ChevronRight className="w-3 h-3 text-primary-orange" /> Client Success Metrics
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2: Specific Services pages */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                      <div className="w-1.5 h-3 bg-primary-orange rounded-full" />
                      <h3 className="font-display font-extrabold text-xs text-primary-brand uppercase tracking-wider">
                        Enterprise Solutions
                      </h3>
                    </div>
                    <ul className="space-y-2 text-xs text-gray-500 font-sans">
                      <li>
                        <button onClick={() => onSelectServicePage('cybersecurity')} className="hover:text-primary-orange transition-colors flex items-center gap-1 cursor-pointer">
                          <ChevronRight className="w-3 h-3 text-primary-orange" /> Cybersecurity Audits & SOC
                        </button>
                      </li>
                      <li>
                        <button onClick={() => onSelectServicePage('cloud')} className="hover:text-primary-orange transition-colors flex items-center gap-1 cursor-pointer">
                          <ChevronRight className="w-3 h-3 text-primary-orange" /> Multi-Cloud Migrations
                        </button>
                      </li>
                      <li>
                        <button onClick={() => onSelectServicePage('managed-it')} className="hover:text-primary-orange transition-colors flex items-center gap-1 cursor-pointer">
                          <ChevronRight className="w-3 h-3 text-primary-orange" /> 24/7 Managed IT Support
                        </button>
                      </li>
                      <li>
                        <button onClick={() => onSelectServicePage('network')} className="hover:text-primary-orange transition-colors flex items-center gap-1 cursor-pointer">
                          <ChevronRight className="w-3 h-3 text-primary-orange" /> Enterprise Network Optimization
                        </button>
                      </li>
                      <li>
                        <button onClick={() => onSelectServicePage('advisory')} className="hover:text-primary-orange transition-colors flex items-center gap-1 cursor-pointer">
                          <ChevronRight className="w-3 h-3 text-primary-orange" /> CIO Advisory & Strategy
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3: Corporate & Legal Information */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                      <div className="w-1.5 h-3 bg-primary-orange rounded-full" />
                      <h3 className="font-display font-extrabold text-xs text-primary-brand uppercase tracking-wider">
                        Corporate Governance
                      </h3>
                    </div>
                    <ul className="space-y-2 text-xs text-gray-500 font-sans">
                      <li>
                        <button onClick={() => onTabChange('privacy')} className="hover:text-primary-orange transition-colors flex items-center gap-1 cursor-pointer font-bold">
                          <ChevronRight className="w-3 h-3 text-primary-orange" /> Philippines DPA Policy
                        </button>
                      </li>
                      <li>
                        <button onClick={() => onTabChange('terms')} className="hover:text-primary-orange transition-colors flex items-center gap-1 cursor-pointer font-bold">
                          <ChevronRight className="w-3 h-3 text-primary-orange" /> Terms of Service Charter
                        </button>
                      </li>
                      <li>
                        <button onClick={() => onTabChange('locations')} className="hover:text-primary-orange transition-colors flex items-center gap-1 cursor-pointer font-bold">
                          <ChevronRight className="w-3 h-3 text-primary-orange" /> Global Offices Profile
                        </button>
                      </li>
                      <li className="text-gray-400 pl-4 text-[10px]">
                        • Manila, Philippines
                      </li>
                      <li className="text-gray-400 pl-4 text-[10px]">
                        • Silicon Valley, USA
                      </li>
                      <li className="text-gray-400 pl-4 text-[10px]">
                        • London, United Kingdom
                      </li>
                      <li className="text-gray-400 pl-4 text-[10px]">
                        • Singapore Node
                      </li>
                    </ul>
                  </div>

                </div>

                {/* Dynamic visual map guide */}
                <div className="border border-dashed border-gray-200 p-5 rounded-2xl bg-gray-50/50 space-y-3">
                  <h4 className="font-display font-bold text-xs text-primary-brand uppercase tracking-wider flex items-center gap-2">
                    <Database className="w-4 h-4 text-primary-orange" />
                    State Navigation Engine
                  </h4>
                  <p className="text-[11px] text-gray-500 font-sans leading-relaxed">
                    Our platform sitemap uses direct React status injections. Clicking any item above automatically triggers 
                    unmount transitions, resets viewport scrolling, and routes your view to the target component seamlessly.
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Area with Quick Actions & Corporate Values */}
          <div className="lg:col-span-3 space-y-6">
            
            <div className="bg-[#1b1c1c] text-white p-6 rounded-2xl border border-white/5 space-y-4">
              <h3 className="font-display font-extrabold text-xs text-orange-200 uppercase tracking-wider">
                Support Desk
              </h3>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                If you need custom integration files or detailed architectural blueprints, speak with our desk:
              </p>
              <div className="space-y-2.5 text-xs">
                <a href="tel:+18005550199" className="flex items-center gap-2 text-gray-300 hover:text-primary-orange transition-colors">
                  <Phone className="w-3.5 h-3.5 text-primary-orange" />
                  <span>+1 (800) 555-0199</span>
                </a>
                <a href="mailto:info@ibssolutions.com" className="flex items-center gap-2 text-gray-300 hover:text-primary-orange transition-colors">
                  <Mail className="w-3.5 h-3.5 text-primary-orange" />
                  <span>info@ibssolutions.com</span>
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200/60 p-6 rounded-2xl space-y-4">
              <h3 className="font-display font-extrabold text-xs text-primary-brand uppercase tracking-wider">
                Compliance Standards
              </h3>
              <div className="space-y-3 text-xs text-gray-500 font-sans">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-700 block">DPA 2012 Compliance</strong>
                    Full protection of data rights under Philippine National Privacy regulations.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-700 block">SOC 2 Verified</strong>
                    Continuous automated security profiling and infrastructure protection audits.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-700 block">GDPR Standardized</strong>
                    Honoring data erasure and portability protocols for European clients.
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
