import { ServiceItem, IndustryItem, TestimonialItem, BentoItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'managed-it',
    title: 'Managed IT',
    description: 'Proactive monitoring and maintenance to keep your business running smoothly without interruptions.',
    iconName: 'Settings',
    details: [
      '24/7/365 Network Operations Center (NOC) monitoring',
      'Patch management and automatic system upgrades',
      'Proactive remote support and on-site troubleshooting',
      'Vulnerability scanning and performance tuning'
    ],
    sla: '99.9% uptime and < 15 minute emergency response time',
    architecture: 'Centralized cloud-native IT service management agent integrated with global support hubs.'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Advanced threat protection, security audits, and risk management to protect your critical data assets.',
    iconName: 'Shield',
    details: [
      'Managed Detection and Response (MDR) with active threat hunting',
      'Enterprise-grade endpoint protection and next-gen firewalls',
      'Regular penetration testing and comprehensive compliance audits',
      'Employee cybersecurity awareness training programs'
    ],
    sla: 'Immediate incident containment within 10 minutes of breach detection',
    architecture: 'Multi-layer security information and event management (SIEM) stack paired with SOC expertise.'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Scalable cloud migrations, multi-cloud management, and infrastructure as a service (IaaS) solutions.',
    iconName: 'Cloud',
    details: [
      'Seamless workload migration (AWS, Microsoft Azure, Google Cloud)',
      'Serverless computing and custom microservices architecture',
      'Automated disaster recovery backups and snapshot schedules',
      'Cloud cost optimization and financial management (FinOps)'
    ],
    sla: 'Zero-downtime database migrations with automated fallback triggers',
    architecture: 'Highly available, load-balanced multi-region containerized clusters with real-time failovers.'
  },
  {
    id: 'networking',
    title: 'Networking',
    description: 'Design and implementation of robust local and wide area networks with enterprise reliability.',
    iconName: 'Network',
    details: [
      'Software-Defined Wide Area Networking (SD-WAN) setup',
      'Enterprise high-density Wi-Fi and safe client guest networks',
      'Network virtualization, VLAN isolation, and core switch configurations',
      'Redundant fiber optic uplink routes with secondary cell backup links'
    ],
    sla: '99.999% network backbone availability with rapid failover path switches',
    architecture: 'Software-defined core network fabric utilizing state-of-the-art secure gateway routing.'
  },
  {
    id: 'business-continuity',
    title: 'Business Continuity',
    description: 'Comprehensive disaster recovery planning to ensure your business remains operational during any crisis.',
    iconName: 'RefreshCw',
    details: [
      'Backup verification engine with hourly validation checksums',
      'Cold-site and hot-site standby server configurations',
      'Detailed emergency runbooks and active simulated drill testing',
      'SaaS data security (Microsoft 365, Google Workspace)'
    ],
    sla: 'Recovery Point Objective (RPO) < 1 hour; Recovery Time Objective (RTO) < 4 hours',
    architecture: 'Dual-layered hyper-converged snapshot systems mirrored to independent cloud datacenters.'
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description: 'Strategic technology roadmaps designed to align your IT investment with long-term business goals.',
    iconName: 'Lightbulb',
    details: [
      'CIO-as-a-Service strategic advisory and tech stack gap assessments',
      'IT modernization roadmap with precise multi-year budget forecasts',
      'Vendor management, SLA negotiations, and procurement guidance',
      'Merger and acquisition IT alignment and software integration diligence'
    ],
    sla: 'Quarterly strategic technology reviews and actionable compliance audits',
    architecture: 'Evidence-based IT alignment framework mapping technical capabilities to business KPIs.'
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'healthcare',
    title: 'HEALTHCARE',
    subtitle: 'HIPAA-Compliant Patient Tech',
    iconName: 'HeartPulse',
    description: 'Empower clinicians and staff with high-availability systems, ultra-secure patient charts, and zero-trust authentication matching the speed of modern medical workflows.',
    complianceStandards: ['HIPAA / HITECH', 'HITRUST CSF', 'NIST SP 800-66'],
    features: [
      'Encrypted ePHI database pipelines with continuous access audits',
      'High-speed medical imaging PACS storage in cloud hybrid setups',
      'Reliable hospital-grade secure guest Wi-Fi and clinical telemetry',
      'Single Sign-On (SSO) secure badges for nursing workstations'
    ],
    useCase: {
      title: 'St. Jude Regional Healthcare Center',
      description: 'Upgraded network core and storage databases to achieve seamless HIPAA audit compliance, resulting in 40% faster loading times for Electronic Medical Records (EMR) and 100% server uptime.'
    }
  },
  {
    id: 'government',
    title: 'GOVERNMENT',
    subtitle: 'Federal & Local Compliance',
    iconName: 'Building',
    description: 'Securing public utility networks, municipal services, and state operations with strict NIST cybersecurity alignments and hardened endpoint configurations.',
    complianceStandards: ['NIST SP 800-53', 'CMMC Level 2', 'CJIS Core Security'],
    features: [
      'Multi-factor authentication (MFA) with strict PIV/CAC card support',
      'Isolated community network segments for municipal offices and law enforcement',
      'Immutable daily cloud backups for civic records and real property indexes',
      'Hardened endpoint threat monitoring for remote administration staff'
    ],
    useCase: {
      title: 'City of Metroview Administration',
      description: 'Fortified city-wide network assets and implemented active endpoint response (MDR), successfully deflecting 3 targeted ransomware attempts with zero public service interruptions.'
    }
  },
  {
    id: 'education',
    title: 'EDUCATION',
    subtitle: 'Dynamic K-12 and Higher Ed Networks',
    iconName: 'GraduationCap',
    description: 'Scaling campus network backbones to handle high-density client surges during examinations, secure student information systems, and power virtual lecture halls.',
    complianceStandards: ['FERPA Privacy Rule', 'CIPA Web Filtering', 'SOC 2 Type II'],
    features: [
      'High-bandwidth student network throttling to prioritize academic applications',
      'Integrated CIPA-compliant content filters for safe primary campus browsing',
      'Elastic multi-cloud scale up for campus-wide learning management portals',
      'Automated IoT registration and network confinement for student devices'
    ],
    useCase: {
      title: 'Pacific Ridge University System',
      description: 'Designed a high-density SD-WAN multi-campus backbone that supports 25,000 active concurrent wireless devices with zero latency drop-offs during finals week.'
    }
  },
  {
    id: 'finance',
    title: 'FINANCE',
    subtitle: 'PCI-DSS and SEC Compliant Assets',
    iconName: 'DollarSign',
    description: 'Delivering microsecond transaction speeds, continuous data loss prevention (DLP), and resilient backup systems built to satisfy strict financial audits.',
    complianceStandards: ['PCI-DSS v4.0', 'GLBA Security Framework', 'SEC Rule 17a-4'],
    features: [
      'FIPS 140-2 hardware-encrypted storage repositories for customer accounts',
      'Continuous network activity micro-segmentation and tokenized transaction fields',
      'Strict Data Loss Prevention (DLP) filters on email gateway routes',
      'Redundant trading network path routing with instant hardware failover'
    ],
    useCase: {
      title: 'Apex Wealth Management Corp',
      description: 'Integrated dual-region live hot-standby cloud synchronization, achieving an audited RPO of under 5 seconds to comply with SEC backup validation mandates.'
    }
  },
  {
    id: 'retail',
    title: 'RETAIL',
    subtitle: 'Unified Omnichannel Reliability',
    iconName: 'ShoppingBag',
    description: 'Securing payment terminals, back-office inventory managers, and supply chain applications against card skimming, store network dropouts, and server load spikes.',
    complianceStandards: ['PCI-DSS Level 1', 'GDPR Privacy Mandates', 'SOC 1 Type II'],
    features: [
      'Zero-trust edge networks for Point of Sale (POS) computers and credit card readers',
      'Predictive SD-WAN balancing to ensure inventory software functions during peak sales',
      'GDPR-compliant customer mailing list cloud architectures with automated data erasure',
      'Surveillance video secure storage vaults with high-speed remote cloud retrieval'
    ],
    useCase: {
      title: 'Vanguard Fashion Outlets (50+ locations)',
      description: 'Upgraded all outlets to robust SD-WAN secure cellular backup links, maintaining 100% card-processing capabilities during major localized fiber cuts.'
    }
  },
  {
    id: 'manufacturing',
    title: 'MANUFACTURING',
    subtitle: 'Continuous Operations & OT Security',
    iconName: 'Factory',
    description: 'Hardening Operational Technology (OT) and SCADA systems against cyber attacks while maintaining highly resilient localized wireless mesh systems for automated assembly lines.',
    complianceStandards: ['NIST CSF', 'IEC 62443 Security Standard', 'ISO/IEC 27001'],
    features: [
      'Air-gapped network firewalls separating shop floor SCADA machinery from corporate emails',
      'Ultra-low-latency local Wi-Fi mesh systems for automated guided vehicles (AGVs)',
      'Vibration and temperature telemetry cloud pipelines for predictive machinery maintenance',
      'Rapid server restoration templates to recover shop floor management databases'
    ],
    useCase: {
      title: 'Titan Heavy Machinery Inc',
      description: 'Re-architected the shop floor network to isolate IoT operational equipment, ensuring zero line stoppages and satisfying all defense-supply cybersecurity requirements.'
    }
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'james-wilson',
    quote: 'IBS transformed our chaotic IT infrastructure into a streamlined, secure environment. Their 24/7 support team is genuinely responsive and professional.',
    author: 'James Wilson',
    role: 'CTO',
    company: 'Healthcare Group',
    rating: 5,
    category: 'healthcare'
  },
  {
    id: 'sarah-chen',
    quote: 'Their cybersecurity audit identified critical vulnerabilities we didn\'t even know existed. We feel much more protected now with IBS managing our defenses.',
    author: 'Sarah Chen',
    role: 'Ops Director',
    company: 'Fintech Corp',
    rating: 5,
    category: 'finance'
  },
  {
    id: 'robert-lang',
    quote: 'The cloud migration was flawless. Zero downtime for our users and a noticeable performance boost across all our enterprise applications.',
    author: 'Robert Lang',
    role: 'VP',
    company: 'Manufacturing Global',
    rating: 5,
    category: 'manufacturing'
  }
];

export const BENTO_SOLUTIONS: BentoItem[] = [
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    description: 'Future-proof foundations for high-availability operations.',
    iconName: 'Network',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    gridSpan: 'md:col-span-8 md:row-span-2',
    type: 'large'
  },
  {
    id: 'cloud-hybrid',
    title: 'Cloud Hybrid',
    description: 'Hybrid integration workflows.',
    iconName: 'Cloud',
    gridSpan: 'md:col-span-4 md:row-span-1',
    type: 'small'
  },
  {
    id: 'cybersecurity-bento',
    title: 'Cybersecurity',
    description: 'Active perimeter defense shields.',
    iconName: 'ShieldAlert',
    gridSpan: 'md:col-span-4 md:row-span-1',
    type: 'small'
  },
  {
    id: 'virtualization',
    title: 'Virtualization',
    description: 'Optimizing hardware utilization through advanced hypervisors.',
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    gridSpan: 'md:col-span-8 md:row-span-2',
    type: 'large'
  },
  {
    id: 'backup-bento',
    title: 'Backup',
    description: 'Immutable safety snapshots.',
    iconName: 'Database',
    gridSpan: 'md:col-span-4 md:row-span-1',
    type: 'small'
  },
  {
    id: 'wireless-bento',
    title: 'Wireless',
    description: 'Enterprise gigabit coverage.',
    iconName: 'Wifi',
    gridSpan: 'md:col-span-4 md:row-span-1',
    type: 'small'
  }
];

export const PARTNERS = [
  { name: 'Microsoft', role: 'Gold Cloud Partner' },
  { name: 'Cisco', role: 'Premier Integrator' },
  { name: 'Fortinet', role: 'Certified Security Specialist' },
  { name: 'VMware', role: 'Enterprise Solution Provider' },
  { name: 'Dell', role: 'Preferred Hardware Partner' },
  { name: 'HP', role: 'Authorized Business Partner' },
  { name: 'Trend Micro', role: 'Platinum Managed Partner' }
];
