export type PageRoute = '/' | '/services' | '/tools' | '/pricing' | '/contact' | '/auth';

export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  organization?: string;
  areaOfInterest: 'Workflow Optimization' | 'AI Literacy' | 'Work Placement' | 'General Inquiry';
  message: string;
}

export interface ContactMessageRecord extends ContactFormData {
  id: string;
  createdAt: string;
  status: 'new' | 'reviewed' | 'contacted';
}

export interface ServiceOffering {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  tag: string;
}

export interface ToolCard {
  id: string;
  name: string;
  role: string;
  description: string;
  iconName: string;
}

export interface PricingPackage {
  id: string;
  title: string;
  price: string;
  badge?: string;
  description: string;
  deliverables: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface SystemItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TransformationRow {
  before: string;
  after: string;
}
