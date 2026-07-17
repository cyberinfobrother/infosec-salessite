import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
  sla: string;
  architecture: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  complianceStandards: string[];
  features: string[];
  useCase: {
    title: string;
    description: string;
  };
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  category: 'healthcare' | 'finance' | 'manufacturing' | 'general';
}

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image?: string;
  gridSpan: string;
  type: 'large' | 'small';
}
