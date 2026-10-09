export const services = [
  {
    id: 'general-consultation',
    name: 'General consultation',
    category: 'General care',
    triage: 'Routine',
    description: 'Routine health consultations, assessments and referrals for common health concerns.',
    practitioners: [
      { name: 'Dr. Lerato Maseko', days: 'Monday and Wednesday', times: '09:00–15:00' },
      { name: 'Nurse Ayanda Dlamini', days: 'Tuesday and Thursday', times: '08:00–14:00' }
    ]
  },
  {
    id: 'child-health',
    name: 'Child health',
    category: 'Child health',
    triage: 'Soon',
    description: 'Child wellness checks, growth monitoring and general child health support.',
    practitioners: [
      { name: 'Dr. Sipho Ndlovu', days: 'Tuesday and Friday', times: '09:00–13:00' }
    ]
  },
  {
    id: 'preventative-care',
    name: 'Preventative care',
    category: 'Preventative care',
    triage: 'Routine',
    description: 'Health screening, wellness guidance and preventative care consultations.',
    practitioners: [
      { name: 'Nurse Thuli Khumalo', days: 'Monday, Thursday and Friday', times: '08:30–14:30' }
    ]
  },
  {
    id: 'maternal-support',
    name: 'Maternal support',
    category: 'Family care',
    triage: 'Soon',
    description: 'Routine maternal health support and appointment-based clinic services.',
    practitioners: [
      { name: 'Midwife Naledi Mokoena', days: 'Wednesday and Friday', times: '08:00–13:00' }
    ]
  },
  {
    id: 'chronic-care',
    name: 'Chronic care review',
    category: 'General care',
    triage: 'Routine',
    description: 'Scheduled reviews and support for ongoing health management.',
    practitioners: [
      { name: 'Dr. Kabelo Dube', days: 'Monday and Thursday', times: '10:00–16:00' }
    ]
  },
  {
    id: 'urgent-assessment',
    name: 'Urgent assessment',
    category: 'General care',
    triage: 'Urgent',
    description: 'Same-day clinic assessment for concerns that require prompt attention. This prototype is not an emergency service.',
    practitioners: [
      { name: 'Dr. Lerato Maseko', days: 'Monday to Friday', times: '08:00–16:00' }
    ]
  }
]

export const categories = ['All', ...new Set(services.map((service) => service.category))]
export const triageOptions = ['All', 'Routine', 'Soon', 'Urgent']
