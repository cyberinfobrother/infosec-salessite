import React, { useState } from 'react';
import { 
  ArrowLeft, Shield, ShieldAlert, Server, Network, Cpu, Layers, 
  Cloud, Database, RefreshCw, Users, HelpCircle, Check, 
  Clock, Zap, CheckCircle2, ChevronRight, Send, AlertTriangle,
  Settings, Lightbulb
} from 'lucide-react';
import { motion } from 'motion/react';

interface ServicePageProps {
  serviceId: string;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

interface ServiceData {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  bgImage: string;
  slaDefault: string;
  architectureDetails: string;
  deliverables: string[];
  techStack: string[];
  specs: { label: string; value: string }[];
  useCase: {
    title: string;
    challenge: string;
    solution: string;
    metric: string;
  };
}

const SERVICE_DETAILS_DATA: Record<string, ServiceData> = {
  cybersecurity: {
    id: 'cybersecurity',
    category: 'Security Operations',
    title: 'Cyber Defense & Active Perimeter Security',
    subtitle: 'ZERO-TRUST NETWORK SHIELD',
    description: 'Establish a fortress around your enterprise digital assets. We deploy multi-layered defensive frameworks including 24/7 Managed Detection and Response (MDR), absolute zero-trust endpoint containment, secure SSL decryption proxies, and next-gen hardware firewalls.',
    iconName: 'ShieldAlert',
    bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80',
    slaDefault: 'Immediate automated threat block with human incident containment within 10 minutes of breach detection.',
    architectureDetails: 'Multi-tiered Security Operations Center (SOC) telemetry feeds routed through SIEM cloud analytical engines, backed by active honeypots and device isolation proxies.',
    deliverables: [
      '24/7/365 active threat hunting and Managed Detection & Response (MDR)',
      'Zero-Trust network segmentation with isolated guest/IoT VLAN subnets',
      'Next-generation firewalls equipped with deep packet inspection filters',
      'Continuous compliance verification mapping to HIPAA, NIST, and SOC2 mandates',
      'Bi-weekly external penetration scans and security loophole remediation'
    ],
    techStack: ['CrowdStrike Falcon', 'Fortinet Next-Gen Firewalls', 'Splunk SIEM', 'Yubikey MFA'],
    specs: [
      { label: 'Defensive Integrity', value: 'Military-Grade WORM' },
      { label: 'Threat Isolation', value: '< 2.4 Seconds' },
      { label: 'Regulatory Scope', value: 'NIST, HIPAA, SOC2' },
      { label: 'Auditing Frequency', value: 'Continuous Real-Time' }
    ],
    useCase: {
      title: 'Global Financial Clearing Corporation',
      challenge: 'Unprecedented volume of sophisticated spear-phishing and credential harvesting attempts targeting administration departments.',
      solution: 'Deployed active host containment endpoints with hardware FIDO2 key mandates and multi-layer gateway decryption proxies.',
      metric: 'Zero successful intrusions recorded over 12 months, and 100% compliance audit pass rate achieved.'
    }
  },
  infrastructure: {
    id: 'infrastructure',
    category: 'Network Engineering',
    title: 'High-Availability Network Infrastructure',
    subtitle: 'SYSTEM CORE & CONNECTIVITY',
    description: 'We construct hyper-resilient optical fiber networks and structural server cabinets engineered to withstand high-volume processing demands. From high-density local Wi-Fi routing to SD-WAN software balancing, we build your technology on bedrock.',
    iconName: 'Server',
    bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    slaDefault: '99.999% network backbone uptime with automatic sub-second failover hardware routing paths.',
    architectureDetails: 'Structured Cat6A / Single-Mode optical rings mapped to top-of-rack redundancy switch stacks and pure-sine uninterruptible power reserves (UPS).',
    deliverables: [
      'Single-Mode optical fiber backbone layouts and multi-gigabit switches',
      'Software-Defined WAN (SD-WAN) implementation across branch sites',
      'Hot-swappable dual-power switch frames and primary/cellular uplinks',
      'Comprehensive workspace structural cabling with certified layout audits',
      'Climate-isolated rack enclosures with localized environmental warning telemetry'
    ],
    techStack: ['Cisco Catalyst Core', 'Juniper Networks SD-WAN', 'APC Smart-UPS', 'Panduit Cabling'],
    specs: [
      { label: 'Maximum Bandwidth', value: '100 Gbps Symmetric' },
      { label: 'Failover Latency', value: '< 150 Milliseconds' },
      { label: 'Power Backup', value: 'Dual-Path redundant UPS' },
      { label: 'Cabling Standards', value: 'EIA/TIA-568 Certified' }
    ],
    useCase: {
      title: 'Vanguard Industrial Distribution Center',
      challenge: 'Network dropouts on shipping bays during peak seasonal loads causing logistics backlogs and lost shipping schedules.',
      solution: 'Re-routed backbone fiber pathways on redundant loops and upgraded switches to modular enterprise chassis systems.',
      metric: '100% network availability achieved during Black Friday peaks, supporting over 85,000 hourly terminal requests.'
    }
  },
  virtualization: {
    id: 'virtualization',
    category: 'Compute Optimization',
    title: 'Clustered Hypervisor Virtualization',
    subtitle: 'OPTIMIZED COMPUTE & MEMORY',
    description: 'Maximize the value of your hardware. By consolidating physical server footprints into virtual resource pools, we lower operational expenditures, reduce power loads, and enable instantaneous resource scalability and hardware-independent disaster recovery.',
    iconName: 'Cpu',
    bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    slaDefault: 'Under 2-second hypervisor failover. Zero virtual machine (VM) state loss during standard hardware host rotations.',
    architectureDetails: 'Converged compute nodes utilizing enterprise VMware ESXi clusters, connected via redundant 10G iSCSI pipelines to solid-state SAN target frames.',
    deliverables: [
      'High-performance hypervisor host clustering with automated load balances',
      'Dynamic, live virtual machine migration between physical hosts without reboots',
      'Shared SAN/NAS storage array setup with dedicated NVMe fast-caching',
      'Resource pooling controls preventing single-container memory leaks',
      'Hourly hypervisor metadata state snapshots with automatic rollback points'
    ],
    techStack: ['VMware ESXi v8', 'Proxmox VE Cluster', 'HPE Nimble Storage SAN', 'Intel Xeon Scalable'],
    specs: [
      { label: 'Hypervisor Host Ratio', value: '16:1 Consolidation' },
      { label: 'RAM Allocate Speed', value: 'Instantaneous (On-The-Fly)' },
      { label: 'Storage Interface', value: '10GbE iSCSI Optical' },
      { label: 'Average Node Load', value: '65% Optimized Target' }
    ],
    useCase: {
      title: 'State Health Care Services Authority',
      challenge: 'Server farm sprawl consuming massive cooling budgets and requiring heavy maintenance hours for disparate legacy servers.',
      solution: 'Consolidated 72 individual physical rack servers into a hyper-converged array of 4 redundant high-density virtualization nodes.',
      metric: 'Reduced physical server hardware costs by 80%, lowered power utility bills by 62%, and boosted compute elasticity.'
    }
  },
  'cloud-hybrid': {
    id: 'cloud-hybrid',
    category: 'Cloud Engineering',
    title: 'Seamless Hybrid Cloud Integration',
    subtitle: 'ON-PREM TO HYBRID INTEGRATION',
    description: 'Bridging physical local server rooms with secure public cloud infrastructure. We engineer elegant hybrid environments that allow legacy mainframes and modern scalable containerized services to communicate seamlessly on a unified encrypted network.',
    iconName: 'Cloud',
    bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
    slaDefault: '99.99% network tunnel availability and continuous hybrid file directory replication.',
    architectureDetails: 'IPSec VPN dual-tunnels combined with dedicated Cloud Interconnect routes, sharing synchronized directory trees and global load balancing nodes.',
    deliverables: [
      'Secure site-to-site VPN tunnels with automated BGP routing failover pathways',
      'Hybrid identity directory trees with unified SSO across local and cloud apps',
      'Serverless computing pipelines scaling dynamically during peak service request times',
      'Unified hybrid monitoring dashboards measuring server performance and pipeline costs',
      'Automated workload replication models between local hypervisors and public clouds'
    ],
    techStack: ['AWS Direct Connect', 'Microsoft Azure Hybrid', 'Google Cloud Interconnect', 'Kubernetes GKE'],
    specs: [
      { label: 'Sync Replication', value: 'Near-Instantaneous' },
      { label: 'Tunnel Protocol', value: 'IPSec with IKEv2' },
      { label: 'Encryption Key', value: 'AES-256-GCM Ephemeral' },
      { label: 'Workload Portability', value: '100% Container-Native' }
    ],
    useCase: {
      title: 'National Retail & Omnichannel Network',
      challenge: 'Localized inventory updates not synchronizing fast enough with the cloud webstore, leading to accidental order cancellations.',
      solution: 'Deployed low-latency hybrid cloud tunnels with Kafka messaging brokers bridging local POS terminals and cloud databases.',
      metric: 'Workload synchronization latency slashed from 45 minutes to 1.2 seconds; zero inventory order cancels reported.'
    }
  },
  backups: {
    id: 'backups',
    category: 'Data Preservation',
    title: 'Immutable Standby Backup Arrays',
    subtitle: 'RANSOMWARE-PROOF REPOSITORIES',
    description: 'Secure absolute, unalterable preservation of your data. We construct write-once-read-many (WORM) storage vaults and off-site backup architectures that prevent ransomware software from encrypting or tampering with your secondary historical data.',
    iconName: 'Database',
    bgImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1600&q=80',
    slaDefault: 'Recovery Point Objective (RPO) < 15 minutes. Recovery Time Objective (RTO) < 2 hours.',
    architectureDetails: 'Air-gapped secure local backup appliances synchronized with cryptographic write-locked S3 storage buckets utilizing Object Lock safety compliance.',
    deliverables: [
      'Hour-by-hour block-level incremental snapshots with cryptographic hashes',
      'WORM-compliant secure cloud backup pools with unalterable object locking features',
      'Physical air-gapped system backups completely detached from standard domains',
      'Fully automated monthly restoration test scripts with comprehensive status logs',
      'SaaS system backup integration securing all corporate mail and file storage pools'
    ],
    techStack: ['Veeam Backup & Replication', 'AWS S3 Glacier WORM', 'Dell PowerProtect', 'Synology DSM Active'],
    specs: [
      { label: 'Unalterable Protocol', value: 'Strict Object Lock' },
      { label: 'RPO Target', value: '15 Minute Increments' },
      { label: 'RTO Target', value: 'Under 2 Hours Max' },
      { label: 'Encryption Standard', value: 'AES-256 Bit Cryptographic' }
    ],
    useCase: {
      title: 'City Municipal Public Records Department',
      challenge: 'Vulnerable to localized backup wiping or encryption locks in the event of administrative network credential compromises.',
      solution: 'Configured immutable local storage appliances coupled with cloud backup buckets protected by strict 30-day immutability rules.',
      metric: 'Successfully weathered a major network-wide ransomware test simulation with 100% data recovered within 90 minutes.'
    }
  },
  'end-user-support': {
    id: 'end-user-support',
    category: 'Workspace Operations',
    title: '24/7/365 Responsive Help Desk Support',
    subtitle: 'EMPOWERING WORKPLACE PRODUCTIVITY',
    description: 'Provide your personnel with rapid, expert technical assistance at any hour of the day. Our multi-tiered engineering help desk diagnoses issues, provisions client hardware profiles, manages active licenses, and audits workstation environments.',
    iconName: 'Users',
    bgImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80',
    slaDefault: 'Average response under 5 minutes with emergency technical triage dispatch within 15 minutes.',
    architectureDetails: 'Automated ticket routing pipelines combined with secure remote workspace viewing interfaces and hardware diagnostic sensors.',
    deliverables: [
      '24/7/365 direct hotlines for emergency workstation support diagnostics',
      'Automated operating system patching and license compliance inventories',
      'Secure remote terminal viewing software with strict agent consent logs',
      'New employee equipment deployment templates and software configurations',
      'Monthly workspace diagnostic reports tracking open issues and resolutions'
    ],
    techStack: ['ConnectWise ScreenConnect', 'Jira Service Management', 'Microsoft Intune MDM', 'Azure AD/Entra ID'],
    specs: [
      { label: 'Average Support Response', value: '3.4 Minutes Callback' },
      { label: 'Remote Access Consent', value: 'Double-Handshake Opt-In' },
      { label: 'First-Contact Resolve', value: '82% Industry Leading' },
      { label: 'Active Support SLA', value: 'Tier 1 to 3 Escalations' }
    ],
    useCase: {
      title: 'Starlight Media & Production Hub',
      challenge: 'Workstations dropping off central storage domains during off-hours, blocking video-rendering pipelines and delayed shipments.',
      solution: 'Integrated active MDM monitoring agents paired with 24/7 direct remote assistance hotlines.',
      metric: 'Reduced workstation downtime by 74%, resulting in a 100% on-time delivery rate for active media render schedules.'
    }
  },
  'managed-it': {
    id: 'managed-it',
    category: 'Workspace Operations',
    title: 'Enterprise Managed IT Operations',
    subtitle: 'PROACTIVE SYSTEMS MANAGEMENT',
    description: 'Scale your business without operational speedbumps. Our Managed IT suite delivers comprehensive, round-the-clock infrastructure oversight, proactive server monitoring, automatic patching, and deep systems optimization designed for high-trust enterprise performance.',
    iconName: 'Settings',
    bgImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80',
    slaDefault: '99.9% systems uptime and emergency callback response within 15 minutes.',
    architectureDetails: 'Centralized cloud-native IT service management integrated with localized NOC analytics pipelines and automatic telemetry warning sensors.',
    deliverables: [
      '24/7/365 active NOC monitoring and device telemetry analysis',
      'Automated operating system patch scheduling and licensing compliance controls',
      'Remote support desktop diagnostics with double-handshake user consent',
      'Comprehensive IT asset discovery, inventory tracking, and risk reports',
      'On-site dispatch engineer availability for critical physical repairs'
    ],
    techStack: ['ConnectWise ScreenConnect', 'Jira Service Management', 'Microsoft Intune', 'Active Directory'],
    specs: [
      { label: 'Uptime Commitment', value: '99.9% Uptime SLA' },
      { label: 'Response Time', value: '< 15 Minutes' },
      { label: 'Device Management', value: 'Automated MDM Profiles' },
      { label: 'Support Coverage', value: '24/7 Support Desk' }
    ],
    useCase: {
      title: 'Apex International Trading Group',
      challenge: 'Experiencing intermittent server offline times and slow laptop setup times during rapid corporate staff scaling.',
      solution: 'Configured automated Intune machine provisioning paired with 24/7 continuous NOC health alerts.',
      metric: 'Reduced physical device setup times from days to 25 minutes, with zero unexpected outages over 12 months.'
    }
  },
  'cloud-services': {
    id: 'cloud-services',
    category: 'Cloud Engineering',
    title: 'Enterprise Multi-Cloud Infrastructure',
    subtitle: 'ELASTIC WORKLOAD PORTABILITY',
    description: 'Accelerate migration and control your cloud spending. We engineer secure, highly available public and hybrid cloud environments across AWS, Azure, and Google Cloud, featuring automated container scaling, serverless microservices, and absolute disaster recovery architectures.',
    iconName: 'Cloud',
    bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
    slaDefault: '99.99% application container uptime and instant database replicas.',
    architectureDetails: 'Multi-region Kubernetes containerized clusters paired with content delivery networks (CDNs) and BGP-balanced cloud routing gateways.',
    deliverables: [
      'Seamless, zero-downtime database and file migrations to cloud providers',
      'Serverless API architectures with automated peak-demand elasticity',
      'Comprehensive FinOps cost monitoring to eliminate wasted idle cloud spend',
      'Automated dual-region live disaster replication configurations',
      'Infrastructure as Code (IaC) deployment pipelines ensuring rapid recovery'
    ],
    techStack: ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud', 'Terraform', 'Docker', 'Kubernetes'],
    specs: [
      { label: 'Cloud Providers', value: 'AWS, Azure, GCP' },
      { label: 'Deployment Mode', value: 'Terraform / IaC' },
      { label: 'Cluster Resilience', value: 'Multi-Region Active' },
      { label: 'FinOps Savings', value: 'Avg. 35% Cost Cut' }
    ],
    useCase: {
      title: 'OmniChannel Logistics Network',
      challenge: 'Server overload during seasonal promotional campaign peaks, stalling sales portals and inventory databases.',
      solution: 'Re-architected monolithic databases into high-availability Kubernetes microservices with autoscaling.',
      metric: 'Zero-downtime peak sales recorded with over 150,000 active sessions, lowering compute costs by 40%.'
    }
  },
  'networking': {
    id: 'networking',
    category: 'Network Engineering',
    title: 'Redundant Enterprise Networking',
    subtitle: 'HIGH-DENSITY CORE CONNECTIVITY',
    description: 'Construct an unshakeable connection foundation. We design and install high-density corporate wireless networks, redundant single-mode optical backbones, and Software-Defined WAN (SD-WAN) structures that route traffic dynamically and handle high-bandwidth enterprise processing.',
    iconName: 'Network',
    bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    slaDefault: '99.999% network backbone availability with rapid failover path routing.',
    architectureDetails: 'Structured Cat6A cabling combined with top-of-rack redundancy core switch stacks, fiber rings, and cellular wireless failover backup trunks.',
    deliverables: [
      'SD-WAN dynamic multi-branch network deployment and traffic balancing',
      'Enterprise gigabit wireless wireless mesh design with secure segregated visitor logins',
      'Network virtualization, secure VLAN partitions, and hardware routing configs',
      'Redundant fiber trunks with automatic secondary cellular backup routes',
      'On-site certified physical wiring runs and comprehensive patch-panel mapping'
    ],
    techStack: ['Cisco Catalyst', 'Juniper Networks', 'Fortinet Gateways', 'Aruba Wireless', 'Panduit'],
    specs: [
      { label: 'Bandwidth Potential', value: 'Up to 100 Gbps' },
      { label: 'Path Failover', value: '< 200ms Automatic' },
      { label: 'Cabling Standard', value: 'EIA/TIA-568 Certified' },
      { label: 'Wireless Protocol', value: 'Wi-Fi 6E Enterprise' }
    ],
    useCase: {
      title: 'Starlight Heavy Manufacturing Corp',
      challenge: 'Frequent network packet loss across industrial floor terminals, stalling assembly logs and assembly lines.',
      solution: 'Laid redundant single-mode fiber optic cables with industrial physical shields and modern core switches.',
      metric: 'Achieved 100% data transmission reliability across all terminals, preventing expensive downtime loops.'
    }
  },
  'business-continuity': {
    id: 'business-continuity',
    category: 'Data Preservation',
    title: 'Immutable Backup & Disaster Recovery',
    subtitle: 'RANSOMWARE-PROOF REPOSITORIES',
    description: 'Protect the absolute integrity of your business records. We configure write-once-read-many (WORM) cloud backup repositories, offline physical air-gaps, and hourly automatic recovery scripts that isolate backups from active network administration domains.',
    iconName: 'RefreshCw',
    bgImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1600&q=80',
    slaDefault: 'Recovery Point Objective (RPO) < 15 mins. Recovery Time Objective (RTO) < 2 hours.',
    architectureDetails: 'Hyper-converged local backup appliances continuously mirroring encrypted files to AWS Glacier vaults with strict 30-day write-locks.',
    deliverables: [
      'Hour-by-hour cryptographic checksum data snapshots',
      'WORM compliance configuration with absolute immutable object locks',
      'Completely disconnected air-gapped server configurations',
      'Hourly backup success verification scripts with instant alert alarms',
      'Detailed disaster recovery playbook drills and testing simulations'
    ],
    techStack: ['Veeam', 'AWS S3 Glacier', 'Dell PowerProtect', 'Synology Active Backup'],
    specs: [
      { label: 'Immutability Engine', value: 'Cryptographic Object Lock' },
      { label: 'RPO Frequency', value: 'Every 15 Minutes' },
      { label: 'RTO Commitment', value: '< 2 Hours Guarantee' },
      { label: 'Encryption Level', value: 'AES-256 Bit GCM' }
    ],
    useCase: {
      title: 'Metroview Public Administration Office',
      challenge: 'Ransomware threats targeting community land registrar files and local taxation directories.',
      solution: 'Configured unalterable Glacier backups with Object Lock rules alongside hourly local snapshots.',
      metric: 'Successfully weathered simulated server-wipe attacks, restoring all files completely in under 90 minutes.'
    }
  },
  'it-consulting': {
    id: 'it-consulting',
    category: 'Compute Optimization',
    title: 'Strategic Tech Roadmaps & CIO Advisory',
    subtitle: 'ALIGNED TECHNOLOGY ARCHITECTURES',
    description: 'Optimize your technology investment. Our Strategic IT Consulting and CIO-as-a-Service solutions audit your current technical landscape, identify security bottlenecks, negotiate software licensing agreements, and design clear modernization paths to align with long-term business growth.',
    iconName: 'Lightbulb',
    bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    slaDefault: 'Quarterly technology alignments and active compliance audits.',
    architectureDetails: 'Metric-driven IT framework mapping business key performance indicators (KPIs) directly to technical system configurations and multi-year budget models.',
    deliverables: [
      'CIO-as-a-Service executive leadership and systems gap audits',
      'Multi-year technology modernization plans with transparent cost outlines',
      'Third-party vendor management, SLA optimization, and procurement reviews',
      'Merger and acquisition technical audit diligence and application integration',
      'Comprehensive compliance checkups for NIST, HIPAA, and financial regulations'
    ],
    techStack: ['Microsoft Intune', 'Jira Service Management', 'Cisco Catalyst Core', 'Splunk SIEM'],
    specs: [
      { label: 'Consulting Cadence', value: 'Monthly Review Sessions' },
      { label: 'Modernization Scope', value: 'Full Tech Stack Audit' },
      { label: 'Compliance Mapping', value: 'NIST, HIPAA, SOC 2' },
      { label: 'Budget Accuracy', value: 'Within 5% Projections' }
    ],
    useCase: {
      title: 'Pacific Medical Ventures Hub',
      challenge: 'Fragmented software programs across 12 recently acquired clinical spaces causing data duplication and massive security concerns.',
      solution: 'Designed a standardized unified secure cloud environment with strict HIPAA compliance guidelines.',
      metric: 'Consolidated application licensing expenses by 38%, achieving immediate compliance across all acquisitions.'
    }
  }
};

export const ServicePage: React.FC<ServicePageProps> = ({ serviceId, onClose, onOpenQuoteModal }) => {
  const service = SERVICE_DETAILS_DATA[serviceId] || SERVICE_DETAILS_DATA['cybersecurity'];

  // SLA Calculator states
  const [coverageHours, setCoverageHours] = useState<'8x5' | '24x7'>('24x7');
  const [responseTime, setResponseTime] = useState<number>(15); // minutes
  const [dataReplication, setDataReplication] = useState<'hourly' | 'daily' | 'realtime'>('realtime');
  
  // Lead form states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');

  const getIcon = (name: string, className: string = "w-6 h-6") => {
    switch (name.toLowerCase()) {
      case 'shieldalert':
      case 'shield-alert':
        return <ShieldAlert className={className} />;
      case 'server':
        return <Server className={className} />;
      case 'cpu':
        return <Cpu className={className} />;
      case 'cloud':
        return <Cloud className={className} />;
      case 'database':
        return <Database className={className} />;
      case 'users':
        return <Users className={className} />;
      case 'settings':
        return <Settings className={className} />;
      case 'refreshcw':
      case 'refresh-cw':
        return <RefreshCw className={className} />;
      case 'lightbulb':
        return <Lightbulb className={className} />;
      case 'network':
        return <Network className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  // Dynamic SLA Calculator Score
  const calculateSlaScore = () => {
    let score = 95;
    if (coverageHours === '24x7') score += 3;
    if (responseTime < 15) score += 1.5;
    if (responseTime <= 5) score += 0.4;
    if (dataReplication === 'realtime') score += 0.09;
    if (dataReplication === 'hourly') score += 0.05;
    
    // Cap at 99.999
    return Math.min(score, 99.999).toFixed(3);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setFormSubmitted(true);
  };

  return (
    <div className="bg-background-warm min-h-screen text-gray-800 font-sans pb-24">
      {/* Dynamic Header Space to prevent layout overlap */}
      <div className="h-20" />

      {/* Hero Banner Section */}
      <section className="relative w-full h-[320px] md:h-[400px] flex items-end overflow-hidden">
        {/* Absolute Image Layer */}
        <div className="absolute inset-0 bg-slate-950 z-0">
          <img 
            src={service.bgImage} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-30"
          />
          {/* Darkening Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-r from-background-warm via-background-warm/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-warm via-transparent to-black/40 z-10" />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-6 w-full pb-10 relative z-20">
          <button 
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-display font-semibold tracking-wider text-primary-brand hover:text-primary-orange transition-colors mb-6 uppercase group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Solutions
          </button>

          <div className="max-w-3xl text-left">
            <span className="inline-block px-3 py-1 bg-accent-orange-soft text-primary-brand text-[10px] font-display font-bold uppercase tracking-widest rounded-full mb-3 border border-orange-200">
              {service.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 tracking-tight leading-tight uppercase mb-4">
              {service.title}
            </h1>
            <p className="text-gray-400 font-display text-sm tracking-widest font-bold uppercase">
              {service.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Split Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Details & Architecture */}
          <div className="lg:col-span-8 space-y-12 text-left">
            
            {/* Overview Card */}
            <div className="bg-white p-8 rounded-2xl border border-border-subtle shadow-sm">
              <h2 className="text-xl font-display font-bold text-gray-900 mb-4 flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-accent-orange-soft text-primary-brand flex items-center justify-center">
                  {getIcon(service.iconName, "w-4.5 h-4.5")}
                </span>
                Service Integration Scope
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm mb-8">
                {service.description}
              </p>

              {/* Core Deliverables List */}
              <h3 className="text-[11px] font-display font-bold text-gray-400 uppercase tracking-widest mb-4">
                Technical Deliverables Included:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-background-warm p-4 rounded-xl border border-border-subtle/40">
                    <CheckCircle2 className="w-5 h-5 text-primary-orange shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-700 leading-relaxed font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SLA Dynamic Interactive Tool */}
            <div className="bg-white p-8 rounded-2xl border border-border-subtle shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/5 rounded-full blur-3xl -mr-16 -mt-16" />
              
              <h2 className="text-xl font-display font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-orange" />
                SLA Configurator Engine
              </h2>
              <p className="text-xs text-gray-500 mb-6">
                Interactive simulator: Customize your required service thresholds and calculate target availability scores.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Option 1: Coverage Hours */}
                <div className="space-y-3">
                  <label className="text-[10px] font-display font-bold text-gray-400 uppercase tracking-wider block">
                    Support Window Hours
                  </label>
                  <div className="flex rounded-lg border border-border-subtle overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setCoverageHours('8x5')}
                      className={`flex-1 py-2 text-xs font-display font-bold transition-all cursor-pointer ${
                        coverageHours === '8x5' 
                          ? 'bg-primary-brand text-white' 
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      Business (8x5)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCoverageHours('24x7')}
                      className={`flex-1 py-2 text-xs font-display font-bold transition-all cursor-pointer ${
                        coverageHours === '24x7' 
                          ? 'bg-primary-brand text-white' 
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      Mission 24x7
                    </button>
                  </div>
                </div>

                {/* Option 2: Response Time */}
                <div className="space-y-3">
                  <label className="text-[10px] font-display font-bold text-gray-400 uppercase tracking-wider block">
                    Target Callback Limits ({responseTime} min)
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    step="5"
                    value={responseTime}
                    onChange={(e) => setResponseTime(Number(e.target.value))}
                    className="w-full accent-primary-orange h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                    <span>5m (Immediate)</span>
                    <span>60m (Standard)</span>
                  </div>
                </div>

                {/* Option 3: Replication */}
                <div className="space-y-3">
                  <label className="text-[10px] font-display font-bold text-gray-400 uppercase tracking-wider block">
                    Sync Replication Speed
                  </label>
                  <select
                    value={dataReplication}
                    onChange={(e) => setDataReplication(e.target.value as any)}
                    className="w-full bg-white border border-border-subtle rounded-lg px-3 py-2 text-xs text-gray-700 focus:outline-none focus:border-primary-orange"
                  >
                    <option value="daily">Daily Batch Sync</option>
                    <option value="hourly">Hourly Differential</option>
                    <option value="realtime">Real-Time Sync Replication</option>
                  </select>
                </div>
              </div>

              {/* Score Results Block */}
              <div className="bg-background-warm p-6 rounded-xl border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-xs font-display font-bold text-gray-900 uppercase tracking-wider">
                    Calculated SLA Performance Grade:
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Based on configuration, guaranteed by contract with automated penalty structures.
                  </p>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-3xl font-display font-extrabold text-primary-brand tracking-tight">
                    {calculateSlaScore()}%
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 mt-0.5 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <Zap className="w-3 h-3" /> High-Trust Target
                  </span>
                </div>
              </div>
            </div>

            {/* Architecture Design Specifications */}
            <div className="bg-white p-8 rounded-2xl border border-border-subtle shadow-sm">
              <h2 className="text-xl font-display font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary-orange" />
                Enterprise Architecture Topology
              </h2>
              <p className="text-xs text-gray-500 mb-6">
                Our deployments follow a strict multi-layer framework design ensuring isolation and stability.
              </p>

              {/* Topology Map Mock-SVG */}
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-left font-mono text-[10px] text-orange-200/80 mb-6 relative overflow-hidden">
                <div className="absolute top-3 right-3 text-[9px] text-slate-500 tracking-widest font-semibold">SECURE BLUEPRINT v4.2</div>
                <div className="space-y-1.5">
                  <div>[USER RACKS/WORKSPACES]</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼&nbsp;&nbsp;(Strict WPA3 Certificate / FIDO2 Authentication)</div>
                  <div className="text-white font-bold">&nbsp;&nbsp;[EDGE SECURITY ARCHITECTURE GATEWAY]</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼&nbsp;&nbsp;(Intrusion Containment &amp; SSL Decryption Audit)</div>
                  <div className="text-orange-400 font-bold">&nbsp;&nbsp;[CENTRAL CORE FABRIC SWITCHES]</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──────────────────────────────────┐</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼</div>
                  <div className="text-amber-100">&nbsp;&nbsp;[VIRTUAL HYPERVISOR COMPUTING] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[IMMUTABLE STORAGE ARRAYS]</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Lock-Sync)</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼&nbsp;&nbsp;(Active Sync Tunnel)</div>
                  <div className="text-cyan-400">&nbsp;&nbsp;[ENCRYPTED HYBRID CLOUD BACKBONE]</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-display font-bold text-gray-900 uppercase tracking-widest">
                  Integrated Technologies:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 font-display text-[10px] font-bold px-3 py-1.5 rounded-md border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 leading-relaxed pt-2">
                  <span className="font-bold text-gray-700">Deployment Note:</span> {service.architectureDetails}
                </p>
              </div>
            </div>

            {/* Case Study Block */}
            <div className="bg-slate-900 p-8 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-orange/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10 space-y-4">
                <span className="text-[9px] font-display font-extrabold uppercase bg-primary-orange/20 text-orange-300 px-2.5 py-1 rounded-full tracking-widest border border-primary-orange/30">
                  Proven Case Study
                </span>
                <h3 className="text-xl font-display font-bold tracking-tight">
                  {service.useCase.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs">
                  <div className="space-y-1.5">
                    <h4 className="font-display font-bold uppercase tracking-wider text-orange-300">The Challenge:</h4>
                    <p className="text-gray-300 leading-relaxed font-sans">{service.useCase.challenge}</p>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-display font-bold uppercase tracking-wider text-orange-300">The Solution:</h4>
                    <p className="text-gray-300 leading-relaxed font-sans">{service.useCase.solution}</p>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4 mt-2 flex justify-between items-center">
                  <span className="text-[10px] uppercase font-semibold text-gray-400">Verifiable Performance Record:</span>
                  <span className="font-display text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> {service.useCase.metric}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Specifications & Inquiry Form */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Quick Specs Card */}
            <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm text-left">
              <h3 className="text-xs font-display font-bold text-gray-400 uppercase tracking-widest mb-4">
                Technical Specifications
              </h3>
              <div className="space-y-3.5">
                {service.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center py-2.5 border-b border-gray-100 last:border-b-0">
                    <span className="text-xs font-semibold text-gray-500">{spec.label}</span>
                    <span className="text-xs font-display font-bold text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SLA Default Guarantee Card */}
            <div className="bg-accent-orange-soft/40 p-6 rounded-2xl border border-orange-200/50 text-left">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-primary-orange shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-display font-bold text-gray-900 uppercase tracking-wider">
                    Standard SLA Guarantee
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    {service.slaDefault}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Inquiry Form */}
            <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm text-left sticky top-24">
              <h3 className="text-sm font-display font-bold text-gray-900 mb-2">
                Request Tech Assessment
              </h3>
              <p className="text-xs text-gray-500 mb-5">
                Register your technical layout parameters and schedule a direct consultation with a Principal Systems Architect.
              </p>

              {!formSubmitted ? (
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div>
                    <label className="text-[9px] font-display font-bold text-gray-400 uppercase tracking-wider block mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-primary-orange"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-display font-bold text-gray-400 uppercase tracking-wider block mb-1">
                      Business Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="j.doe@company.com"
                      className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-primary-orange"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-display font-bold text-gray-400 uppercase tracking-wider block mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Enterprise Inc."
                      className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-primary-orange"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-display font-bold text-gray-400 uppercase tracking-wider block mb-1">
                      SLA or Architecture Notes
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Required response times, server rack locations..."
                      className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-primary-orange resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-orange hover:bg-orange-600 text-white font-display text-xs font-bold uppercase tracking-wider py-3.5 rounded-lg transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Submit Specifications <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-5 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <div>
                    <p className="text-xs font-bold text-gray-900">Inquiry Logged Securely!</p>
                    <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                      Thank you {name}. A systems architect will review your {company} layout guidelines and reach out to {email} with custom SLA templates shortly.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-[10px] font-bold text-primary-brand hover:underline block mx-auto pt-2"
                  >
                    Submit another inquiry
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
