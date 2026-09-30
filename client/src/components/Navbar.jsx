import React, { useState, useEffect } from 'react';
import { Zap, Phone, Menu, X, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Load & Panel Estimator', href: '#estimator', highlight: true },
    { name: 'Workshop Gallery', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Strip */}
      <div className="bg-slate-900/90 text-slate-300 text-xs border-b border-slate-800/80 px-4 py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-amber-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Industrial Breakdown Support
            </span>
            <span className="text-slate-500">|</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Sardar Industrial Estate, Kadadra, Gujarat
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Proprietor: <strong className="text-slate-200">{COMPANY_INFO.proprietor}</strong></span>
            <span className="text-slate-500">|</span>
            <a
              href={`tel:${COMPANY_INFO.phone1Raw}`}
              className="text-amber-400 hover:text-amber-300 font-semibold tracking-wide flex items-center gap-1"
            >
              <Phone className="w-3 h-3" /> {COMPANY_INFO.phone1}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-xl'
            : 'bg-slate-950/70 backdrop-blur-sm border-b border-slate-800/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 p-0.5 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Zap className="w-6 h-6 text-amber-400 fill-amber-400/20 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider text-white uppercase flex items-center gap-1">
                  Ambika <span className="text-amber-400">Electric</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                  Industrial Electrical Engineering
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    link.highlight
                      ? 'text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Direct Contact & CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone1Raw}`}
                className="hidden xl:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700/80 rounded-lg hover:border-amber-500/50 hover:text-amber-400 transition"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call: {COMPANY_INFO.phone1}</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="px-4 py-2.5 rounded-lg text-xs md:text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
              >
                <span>Request Quote</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-2 pb-6 space-y-3 backdrop-blur-xl">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                    link.highlight
                      ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <a
                href={`tel:${COMPANY_INFO.phone1Raw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-amber-400 font-semibold text-sm"
              >
                <Phone className="w-4 h-4" /> Call {COMPANY_INFO.phone1}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md flex items-center justify-center gap-1"
              >
                Request Custom Panel Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
