
import React from 'react';

export const CONTACT_INFO = {
  phone: "+1 (555) 789-1234",
  email: "hello@daddytechsolutions.com",
  address: "452 Security Plaza, Tech Hub City, CA 94043",
  workingHours: "Mon - Sat: 8:00 AM - 6:00 PM"
};

export const SERVICES = [
  {
    id: 'cctv',
    title: 'Advanced CCTV Systems',
    description: 'High-definition 4K surveillance with AI-powered human detection and remote mobile viewing.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    image: "https://picsum.photos/seed/cctv/800/600"
  },
  {
    id: 'alarms',
    title: 'Smart Alarm Systems',
    description: 'Intelligent intrusion detection with immediate mobile notifications and silent alarm options.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    image: "https://picsum.photos/seed/alarm/800/600"
  },
  {
    id: 'monitoring',
    title: '24/7 Professional Monitoring',
    description: 'Round-the-clock remote monitoring by our expert security team for peace of mind.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    image: "https://picsum.photos/seed/monitoring/800/600"
  },
  {
    id: 'access',
    title: 'Access Control',
    description: 'Modern keyless entry, biometric scanning, and encrypted guest access management.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    image: "https://picsum.photos/seed/access/800/600"
  }
];
