import {
  ServiceOffering,
  ToolCard,
  PricingPackage,
  SystemItem,
  TransformationRow
} from '../types';

export const PROBLEM_CARDS = [
  {
    id: 'prob-1',
    title: 'Leads Slipping Away',
    description: 'Inquiries arrive from forms, email, and DMs and some slip through the cracks.',
    iconName: 'InboxX'
  },
  {
    id: 'prob-2',
    title: 'Inconsistent Follow-up',
    description: 'Follow-up is inconsistent and depends on someone remembering to do it.',
    iconName: 'ClockAlert'
  },
  {
    id: 'prob-3',
    title: 'Scattered Tools',
    description: 'Client work lives across scattered tools with no single source of truth.',
    iconName: 'FolderKanban'
  },
  {
    id: 'prob-4',
    title: 'Admin Overload',
    description: 'Repetitive admin tasks like onboarding, reminders and reporting that eats into billable time.',
    iconName: 'FileText'
  }
];

export const TRANSFORMATIONS: TransformationRow[] = [
  {
    before: 'Missed inquiries and slow, manual follow-up',
    after: 'A centralized intake system that captures every request automatically'
  },
  {
    before: 'Scattered emails, DMs, and forms',
    after: 'One workflow that routes every lead and task to the right place'
  },
  {
    before: 'Time-consuming onboarding and admin',
    after: 'Automated confirmations, reminders, summaries, and next steps'
  },
  {
    before: '"We should use AI" confusion',
    after: 'A clear workflow roadmap with practical tools and implementation steps'
  }
];

export const SYSTEMS_LIST: SystemItem[] = [
  {
    id: 'sys-1',
    title: 'Lead intake & routing',
    description: 'Capture form, email, or DM inquiries, organize them in one place, trigger instant confirmations, and assign follow-up automatically.',
    iconName: 'UserCheck'
  },
  {
    id: 'sys-2',
    title: 'Client onboarding pipeline',
    description: 'Automate welcome emails, collect intake details, send contracts and invoices, and spin up internal task checklists.',
    iconName: 'Workflow'
  },
  {
    id: 'sys-3',
    title: 'Booking & communication workflow',
    description: 'Connect inquiry forms, scheduling, reminders, and post-call follow-up so prospects never drop off.',
    iconName: 'CalendarSync'
  },
  {
    id: 'sys-4',
    title: 'Internal request system',
    description: 'Standardize how your team submits requests, approvals, and updates instead of relying on scattered messages.',
    iconName: 'Layers'
  },
  {
    id: 'sys-5',
    title: 'Reporting & visibility dashboard',
    description: 'Centralize workflow status and business activity into one view and cut out manual reporting.',
    iconName: 'BarChart3'
  }
];

export const SERVICES_LIST: ServiceOffering[] = [
  {
    id: 'srv-1',
    tag: 'CORE OFFERING',
    title: 'Workflow Optimization through AI Automation & Integration',
    subtitle: 'Streamline repetitive tasks into intelligent, connected systems.',
    description: 'We map the work you do today and identify where AI can remove friction automating repetitive tasks and integrating intelligent tools directly into the systems your team already relies on.',
    benefits: [
      'Reduce manual work',
      'Faster turnaround times',
      'Fewer human errors',
      'Better use of existing software'
    ]
  },
  {
    id: 'srv-2',
    tag: 'CAPABILITY BUILDING',
    title: 'AI Literacy Programs',
    subtitle: 'Empower your workforce with responsible, practical AI skills.',
    description: 'Equip your teams, staff, and communities with practical, easy-to-understand AI skills they can actually use responsibly.',
    benefits: [
      'Build confident adopters',
      'Reduce fear of technological change',
      'Improve team decision-making'
    ]
  },
  {
    id: 'srv-3',
    tag: 'TALENT PIPELINE',
    title: 'Work Placement Programs',
    subtitle: 'Bridge the talent gap with pre-trained AI-native specialists.',
    description: 'Access emerging talent trained in real-world AI applications while delivering immediate value to your organization a pipeline of capable people, ready to contribute from day one.',
    benefits: [
      'Immediate project support',
      'Fresh AI-native perspective',
      'Low-risk talent pipeline'
    ]
  }
];

export const TOOLS_LIST: ToolCard[] = [
  {
    id: 'tool-hubspot',
    name: 'HubSpot',
    role: 'CRM & Lead Management',
    description: 'Lead capture, contact management, follow-up, and CRM workflows.',
    iconName: 'Target'
  },
  {
    id: 'tool-airtable',
    name: 'Airtable',
    role: 'Structured Operational Databases',
    description: 'Structured workflow tracking, internal operations, and custom business systems.',
    iconName: 'Database'
  },
  {
    id: 'tool-softr',
    name: 'Softr',
    role: 'Client Portals & Internal Tools',
    description: 'Client portals, internal dashboards, onboarding experiences, and request forms.',
    iconName: 'Layout'
  },
  {
    id: 'tool-zapier',
    name: 'Zapier or Make',
    role: 'Integration & Automation Engine',
    description: 'Connecting your apps and automating repetitive tasks between systems.',
    iconName: 'Zap'
  },
  {
    id: 'tool-wave',
    name: 'Wave / Invoicing Tools',
    role: 'Billing & Proposal Workflows',
    description: 'Proposals, invoices, and client payment steps when needed.',
    iconName: 'CreditCard'
  }
];

export const REAL_WORLD_SYSTEMS = [
  {
    title: 'Lead Capture Workflows',
    description: 'Instant lead ingestion from forms, socials, and email directly into CRM with automated personalized responses.'
  },
  {
    title: 'Onboarding Pipelines',
    description: 'Automated client intake packets, e-signatures, file uploads, and team assignment checklists.'
  },
  {
    title: 'Internal Request Tracking',
    description: 'Structured intake forms for internal approvals, creative assets, or tech support with status updates.'
  },
  {
    title: 'Client Portals',
    description: 'Dedicated client hubs for tracking deliverable milestones, sharing files, and submitting updates.'
  },
  {
    title: 'Integrated Workflows',
    description: 'Seamless cross-app triggers syncing client data across billing, calendar, and task management.'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'starter',
    title: 'Workflow Starter',
    price: 'From $1,500',
    description: 'Perfect for small teams needing an immediate operational baseline and automated lead intake.',
    deliverables: [
      'A workflow audit of your current intake and follow-up',
      'One core system built and integrated (intake, onboarding, or requests)',
      'Automated confirmations, reminders, and next steps',
      'A clear roadmap for what to automate next'
    ],
    ctaText: 'Start with a workflow audit',
    isPopular: true
  },
  {
    id: 'literacy',
    title: 'AI Literacy Workshop',
    price: 'From $2,500',
    description: 'Hands-on team training to transform your staff into confident, ethical AI practitioners.',
    deliverables: [
      'Custom training tailored for your specific team',
      'Practical use cases mapped directly to your daily work',
      'Hands-on exercises with the tools you already use',
      'Follow-up resource guide and prompt templates'
    ],
    ctaText: 'Book team workshop'
  },
  {
    id: 'placement',
    title: 'Work Placement Program',
    price: 'From $5,000',
    description: 'Inject AI-native talent into your operations with structured ongoing mentorship and oversight.',
    deliverables: [
      'Matched emerging talent trained in real-world AI applications',
      'Real project support and immediate operational execution',
      'Supervised placement with expert oversight',
      'Option to hire into your permanent team pipeline'
    ],
    ctaText: 'Inquire about placement'
  }
];
