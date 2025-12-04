import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'Dokumentasi', href: '#docs' },
  { label: 'Tech Stack', href: '#features' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Kontak', href: 'https://github.com/dhiyo7/heimdall' },
];

export const QuickLinks: React.FC = () => {
  return (
    <div className="border-b-4 border-black bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-y-0 md:divide-y-0 divide-black">
          {quickLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="group flex items-center justify-between p-4 md:p-6 hover:bg-gray-100 transition-colors cursor-pointer border-b-2 md:border-b-0 border-black last:border-b-0"
            >
              <span className="font-mono font-bold uppercase">{link.label}</span>
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};