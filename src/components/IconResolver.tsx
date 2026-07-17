import React from 'react';
import { 
  Settings, Shield, Cloud, Network, RefreshCw, Lightbulb, 
  HeartPulse, Building, GraduationCap, DollarSign, ShoppingBag, Factory,
  Cpu, Database, Wifi, ShieldAlert, Star, ArrowRight, Menu, X, 
  Check, CheckCircle2, Users, Server, Globe, Phone, Mail, Lock, 
  Linkedin, Twitter, HelpCircle, FileText, ChevronDown, Landmark
} from 'lucide-react';

interface IconResolverProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconResolver: React.FC<IconResolverProps> = ({ name, className = '', size }) => {
  const props = { className, size };
  
  switch (name.toLowerCase()) {
    case 'settings':
      return <Settings {...props} />;
    case 'shield':
      return <Shield {...props} />;
    case 'cloud':
      return <Cloud {...props} />;
    case 'network':
      return <Network {...props} />;
    case 'refreshcw':
    case 'refresh-cw':
      return <RefreshCw {...props} />;
    case 'lightbulb':
      return <Lightbulb {...props} />;
    case 'heartpulse':
    case 'heart-pulse':
      return <HeartPulse {...props} />;
    case 'building':
      return <Building {...props} />;
    case 'graduationcap':
    case 'graduation-cap':
      return <GraduationCap {...props} />;
    case 'dollarsign':
    case 'dollar-sign':
      return <DollarSign {...props} />;
    case 'shoppingbag':
    case 'shopping-bag':
      return <ShoppingBag {...props} />;
    case 'factory':
      return <Factory {...props} />;
    case 'cpu':
      return <Cpu {...props} />;
    case 'database':
      return <Database {...props} />;
    case 'wifi':
      return <Wifi {...props} />;
    case 'shieldalert':
    case 'shield-alert':
      return <ShieldAlert {...props} />;
    case 'star':
      return <Star {...props} />;
    case 'arrowright':
    case 'arrow-right':
      return <ArrowRight {...props} />;
    case 'menu':
      return <Menu {...props} />;
    case 'x':
      return <X {...props} />;
    case 'check':
      return <Check {...props} />;
    case 'checkcircle2':
    case 'check-circle':
      return <CheckCircle2 {...props} />;
    case 'users':
      return <Users {...props} />;
    case 'server':
      return <Server {...props} />;
    case 'globe':
      return <Globe {...props} />;
    case 'phone':
      return <Phone {...props} />;
    case 'mail':
      return <Mail {...props} />;
    case 'lock':
      return <Lock {...props} />;
    case 'linkedin':
      return <Linkedin {...props} />;
    case 'twitter':
      return <Twitter {...props} />;
    case 'helpcircle':
      return <HelpCircle {...props} />;
    case 'filetext':
      return <FileText {...props} />;
    case 'chevrondown':
      return <ChevronDown {...props} />;
    case 'landmark':
      return <Landmark {...props} />;
    default:
      return <Settings {...props} />;
  }
};
