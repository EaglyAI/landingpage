export type IndustryPageData = {
  industryName: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  problems: string[];
  workflowSteps: string[];
};

const helpBlocks = [
  {
    title: 'AI Receptionist',
    description: 'Answers every call and text 24/7, captures customer details, and qualifies service requests instantly.',
  },
  {
    title: 'Automatic Booking',
    description: 'Books jobs into your calendar in real time based on technician availability and service zones.',
  },
  {
    title: 'Invoices & Payments',
    description: 'Sends invoices automatically, follows up on unpaid balances, and reduces time spent chasing payments.',
  },
  {
    title: 'Customer Follow-Ups',
    description: 'Triggers reminders, review requests, and rebooking campaigns so customers keep coming back.',
  },
] as const;

export const industryPageData: Record<string, IndustryPageData> = {
  cleaning: {
    industryName: 'cleaning',
    slug: 'cleaning',
    seoTitle: 'AI for Cleaning Businesses | Eagly',
    seoDescription: 'Eagly helps cleaning businesses answer leads, auto-book appointments, collect payments, and automate follow-ups.',
    problems: [
      'Missed calls become missed recurring clients.',
      'Scheduling changes and reschedules create daily chaos.',
      'Invoices and payment reminders eat up admin time.',
      'Low review volume limits referral growth.',
    ],
    workflowSteps: [
      'Lead calls or texts after seeing your service online.',
      'Eagly responds instantly, captures job details, and confirms pricing.',
      'The job is booked on your calendar and customer receives confirmation.',
      'After completion, Eagly sends invoice, payment link, and review request.',
    ],
  },
  landscaping: {
    industryName: 'landscaping',
    slug: 'landscaping',
    seoTitle: 'AI for Landscaping Companies | Eagly',
    seoDescription: 'Eagly helps landscaping teams automate lead response, job booking, billing, and repeat service follow-ups.',
    problems: [
      'New leads wait too long for call-backs during field work.',
      'Route planning and scheduling are hard to keep synchronized.',
      'Manual invoicing slows cash flow after completed jobs.',
      'Seasonal customers forget to rebook maintenance plans.',
    ],
    workflowSteps: [
      'A homeowner requests a quote for mowing or yard cleanup.',
      'Eagly asks qualifying questions and offers available visit windows.',
      'The appointment is booked and your crew calendar updates automatically.',
      'Post-service invoices and seasonal follow-up messages are sent automatically.',
    ],
  },
  plumbing: {
    industryName: 'plumbing',
    slug: 'plumbing',
    seoTitle: 'AI for Plumbing Businesses | Eagly',
    seoDescription: 'Eagly helps plumbing businesses manage urgent calls, automate scheduling, speed up payments, and retain customers.',
    problems: [
      'Emergency calls come in after-hours when no one can answer.',
      'Dispatch coordination is difficult across multiple technicians.',
      'Unpaid invoices delay revenue and require manual follow-up.',
      'One-time customers are rarely nurtured into repeat clients.',
    ],
    workflowSteps: [
      'A customer reports a leak and requests immediate service.',
      'Eagly triages urgency, collects details, and proposes nearest available slot.',
      'The assigned technician receives booking details instantly.',
      'After the job, Eagly sends invoice, payment reminders, and maintenance follow-up.',
    ],
  },
  'pest-control': {
    industryName: 'pest control',
    slug: 'pest-control',
    seoTitle: 'AI for Pest Control Businesses | Eagly',
    seoDescription: 'Eagly helps pest control companies automate lead handling, route-ready booking, billing, and treatment follow-ups.',
    problems: [
      'Inbound calls spike during infestations and overwhelm staff.',
      'Technician schedules and treatment windows shift constantly.',
      'Billing for one-off and recurring plans is manually intensive.',
      'Missed follow-ups reduce retention on recurring treatment plans.',
    ],
    workflowSteps: [
      'A customer reports an infestation through call or web form.',
      'Eagly captures pest type, property details, and urgency automatically.',
      'The appropriate service visit is booked and reminders are sent.',
      'Eagly handles invoice delivery and next-treatment follow-up outreach.',
    ],
  },
  hvac: {
    industryName: 'HVAC',
    slug: 'hvac',
    seoTitle: 'AI for HVAC Companies | Eagly',
    seoDescription: 'Eagly helps HVAC businesses capture service calls, automate booking, accelerate payments, and increase recurring maintenance.',
    problems: [
      'Peak-season call volume causes long response delays.',
      'Service windows and technician assignments change throughout the day.',
      'Manual invoice processing slows down payment collection.',
      'Maintenance plan renewals are easy to miss without automation.',
    ],
    workflowSteps: [
      'A homeowner calls for emergency cooling or heating service.',
      'Eagly qualifies the issue and books the fastest available appointment.',
      'Technicians and customers receive automated reminders and updates.',
      'Eagly sends invoice, payment reminders, and annual tune-up follow-up.',
    ],
  },
  electricians: {
    industryName: 'electrician',
    slug: 'electricians',
    seoTitle: 'AI for Electricians | Eagly',
    seoDescription: 'Eagly helps electricians automate incoming calls, booking, invoicing, and follow-ups so every lead is captured.',
    problems: [
      'High-priority service calls are missed while on active jobs.',
      'Scheduling estimate visits and installations is time-consuming.',
      'Invoice sending and payment collection are often delayed.',
      'Past customers are not consistently re-engaged for new projects.',
    ],
    workflowSteps: [
      'A property owner requests service for an electrical issue or upgrade.',
      'Eagly gathers job details and books an estimate or service slot.',
      'Appointment confirmations and reminders reduce no-shows.',
      'After completion, Eagly sends invoice and targeted follow-up campaigns.',
    ],
  },
};

export const howEaglyHelps = helpBlocks;

export const industryRoutePrefix = '/industries/';

export const getIndustryByPath = (pathname: string) => {
  if (!pathname.startsWith(industryRoutePrefix)) {
    return null;
  }

  const slug = pathname.slice(industryRoutePrefix.length).replace(/\/$/, '');
  return industryPageData[slug] ?? null;
};
