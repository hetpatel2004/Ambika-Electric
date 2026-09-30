export const COMPANY_INFO = {
  name: 'Ambika Electric',
  tagline: 'Precision Electrical Engineering & Industrial Solutions',
  subheading:
    'Specialized in Heavy Motor Winding, Custom Control Panel Design, Industrial Automation & Expert Electrical Consulting.',
  proprietor: 'Vishad Patel',
  category: 'Industrial Electrical Engineering',
  establishedNote: 'Serving Gujarat Industrial Corridor',
  website: 'https://ambikaelectric.netlify.app/',
  phone1: '+91 99985 77955',
  phone1Raw: '+919998577955',
  phone2: '+91 94084 99942',
  phone2Raw: '+919408499942',
  address: 'Shop No. 22, Sardar Industrial Estate, Near Narnarayan Kanta, Kadadra, Gujarat – 382305, India',
  city: 'Kadadra, Gujarat',
  pincode: '382305',
  hours: 'Mon - Sat: 8:30 AM - 8:00 PM | Emergency Breakdown Support Available',
};

export const SERVICES = [
  {
    id: 'motor-winding',
    title: 'Heavy Motor Winding & Maintenance',
    shortDesc:
      'Industrial AC & DC motor rewinding, heavy induction machinery overhauls, and transformer maintenance designed to minimize plant downtime.',
    fullDesc:
      'We provide high-precision rewinding for single and three-phase AC induction motors, DC motors, slip-ring motors, and heavy-duty transformers. Using Class H/F insulation copper wiring, rigorous varnishing, dynamic balancing, and surge testing, we restore maximum torque and energy efficiency while drastically reducing facility downtime.',
    icon: 'Cpu',
    tag: 'Core Specialty',
    metrics: ['Class H/F Insulation', 'Dynamic Balancing', '24/7 Breakdown Care'],
    keyPoints: [
      'AC & DC Industrial Motor Rewinding',
      'High Voltage & Heavy-Duty Transformer Maintenance',
      'Stator & Rotor Core Re-insulation',
      'Submersible & Slip-Ring Induction Motors',
      'Precision Surge & Insulation Resistance Testing',
    ],
  },
  {
    id: 'control-panels',
    title: 'Custom Control Panel Design',
    shortDesc:
      'Engineered industrial control panels, MCC, PCC, APFC, and starter panels tailored to specific factory workflows and stringent safety standards.',
    fullDesc:
      'From conceptual single-line diagrams to fully wired, busbar-fitted enclosures, we fabricate turnkey electrical control panels. We integrate certified breakers, contactors, overloads, and metering gear to streamline plant operations, enhance operator safety, and ensure compliance with industrial codes.',
    icon: 'Sliders',
    tag: 'Turnkey Engineering',
    metrics: ['IS Standard Compliance', 'Clean Busbar Layouts', 'Custom Form Factors'],
    keyPoints: [
      'Motor Control Centers (MCC) & Power Control Centers (PCC)',
      'Automatic Power Factor Correction (APFC) Panels',
      'Star-Delta, DOL & Soft Starter Enclosures',
      'Factory Floor Automated Distribution Boards',
      'Complete Wiring Schematics & Labelled Terminations',
    ],
  },
  {
    id: 'industrial-consulting',
    title: 'Industrial Electrical Consulting',
    shortDesc:
      'Comprehensive diagnostic assessments, electrical safety audits, thermal/load profiling, and preventive maintenance strategies.',
    fullDesc:
      'Our consulting services help industrial plant managers prevent catastrophic machinery failure before it happens. We perform on-site electrical load audits, harmonic and power factor analysis, insulation degradation tests, and create structured preventive maintenance schedules for continuous plant uptime.',
    icon: 'Activity',
    tag: 'Diagnostic & Safety',
    metrics: ['Preventive Audits', 'Load Profiling', 'Safety Verification'],
    keyPoints: [
      'Industrial Electrical Safety & Hazard Inspections',
      'Facility Load Profiling & Transformer Optimization',
      'Harmonics & Power Quality Investigations',
      'Preventive Maintenance (PM) Framework Setup',
      'Root-cause Failure Analysis on Burnt Motors',
    ],
  },
  {
    id: 'industrial-automation',
    title: 'Industrial Automation & PLC Integration',
    shortDesc:
      'Modern automation architecture, sensor & drive integration, VFD installations, and automated process sequence controls.',
    fullDesc:
      'Elevate manufacturing throughput with automated electrical sequences. We engineer VFD control systems, sensor-driven interlocks, relay logic, and PLC system interfaces that streamline complex production lines and protect critical motors against thermal overloads and phase reversals.',
    icon: 'Zap',
    tag: 'Modern Tech',
    metrics: ['VFD Efficiency', 'Sensor Interlocks', 'Production Stability'],
    keyPoints: [
      'Variable Frequency Drive (VFD) Setup & Tuning',
      'Automated Interlocks & Emergency E-Stop Loops',
      'Sensor & Limit Switch Integration',
      'PLC Panel Wiring & Field Instrument Interfacing',
      'Energy Saving Variable Speed Pump & Fan Systems',
    ],
  },
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Diagnostic & Load Audit',
    desc: 'On-site or workshop inspection using megohmmeters, surge testers, and visual phase analysis to diagnose root failure causes.',
  },
  {
    step: '02',
    title: 'Precision Engineering',
    desc: 'High-grade copper strip/wire winding, dual-coat varnishing, or custom panel CAD layout with thermal clearances.',
  },
  {
    step: '03',
    title: 'Multi-Point Quality Testing',
    desc: 'Full-load bench testing, insulation resistance validation, no-load current checks, and trip simulation.',
  },
  {
    step: '04',
    title: 'Delivery & Commissioning',
    desc: 'Safe on-site installation, termination check, phase alignment, and operator handover with service logs.',
  },
];

export const TARGET_CLIENTS = [
  { name: 'Manufacturing Facilities', role: 'Continuous production units requiring high reliability' },
  { name: 'Industrial Machinery Operators', role: 'Heavy duty presses, mixers, extruders & CNC plants' },
  { name: 'Factories Needing Control Panels', role: 'Custom automation, MCC/PCC & starter boards' },
  { name: 'Industrial Maintenance Teams', role: 'Fast turnaround rewind and replacement partner' },
  { name: 'Engineering Contractors', role: 'Subcontract electrical infrastructure & panel execution' },
];
