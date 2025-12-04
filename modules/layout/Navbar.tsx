import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../../types';

const links: NavLink[] = [
  { label: 'Tentang', href: '#about' },
  { label: 'Fitur', href: '#features' },
  { label: 'Dokumentasi', href: '#docs' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Clone Repo', href: 'https://github.com/dhiyo7/heimdall' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b-4 border-black bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-black border-2 border-black flex items-center justify-center">
              <span className="text-white font-mono font-bold text-lg">H</span>
            </div>
            <span className="font-sans font-black text-xl tracking-tighter">HEIMDALL</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-sm font-bold uppercase hover:underline decoration-2 underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-black bg-gray-100 p-4">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-lg font-bold uppercase border-b-2 border-black pb-2 hover:pl-2 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};