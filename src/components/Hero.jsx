import React, { useState, useEffect } from 'react';
import { Zap, ArrowRight, Calculator, CheckCircle2, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

// Continuous letter-by-letter typewriter animation phrases
const PHRASES = [
  'Engineering Solutions',
  'Heavy Motor Winding',
  'Custom Control Panels',
  'Industrial Automation',
  'Safety & Diagnostics',
];

export default function Hero({ onOpenQuoteModal }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Finished typing current phrase -> pause before deleting
    if (subIndex === PHRASES[phraseIndex].length + 1 && !isDeleting) {
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimeout);
    }

    // Finished deleting -> pause briefly then move to next phrase
    if (subIndex === 0 && isDeleting) {
      const switchTimeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }, 250);
      return () => clearTimeout(switchTimeout);
    }

    // Typing and deleting cadence
    const speed = isDeleting ? 40 : 85;
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, phraseIndex]);

  const currentTypedText = PHRASES[phraseIndex].substring(0, subIndex);

  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28 mesh-pattern">
      {/* Ambient Radial Gradient Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-medium shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>Industrial Electrical Engineering • Kadadra, Gujarat</span>
            </div>

            {/* Unique Animated Letter-by-Letter Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14]">
              <span className="block text-slate-100 mb-1">
                Precision Electrical
              </span>
              <span className="inline-flex items-center min-h-[1.25em] flex-wrap">
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(245,158,11,0.25)]">
                  {currentTypedText}
                </span>
                {/* Continuous Electric Blinking Cursor */}
                <span className="inline-block w-1 sm:w-1.5 h-[0.9em] bg-amber-400 ml-2 rounded-sm animate-pulse shadow-[0_0_12px_#f59e0b] -translate-y-0.5"></span>
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Empowering factories and heavy manufacturing with high-reliability{' '}
              <strong className="text-white font-semibold">Heavy Motor Winding</strong>,{' '}
              <strong className="text-white font-semibold">Custom Control Panel Fabrication</strong>, and{' '}
              <strong className="text-white font-semibold">Industrial Plant Consulting</strong> designed to eliminate costly production downtime.
            </p>

            {/* Key Assurance Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Heavy AC/DC Motors</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Custom MCC & PCC Panels</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Minimal Plant Downtime</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#estimator"
                className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Calculator className="w-5 h-5 text-slate-950" />
                <span>Launch Load Estimator</span>
              </a>

              <a
                href="#gallery"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-slate-600 transition flex items-center gap-2"
              >
                <span>View Workshop Photos</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Direct Enquiry</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Workshop Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              
              {/* Workshop Real-World Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src="/images/hero_workshop.jpg"
                  alt="Ambika Electric Industrial Workshop in Kadadra, Gujarat"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient vignette for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-xs font-semibold text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Kadadra Workshop Active</span>
                </div>

                {/* Floating Tech Pill */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-amber-500/90 text-slate-950 text-xs font-black tracking-wide shadow-lg">
                  Heavy 415V Systems
                </div>

                {/* Bottom Floating Stats Inside Image */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <div className="p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/90 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                        Core Facility Bay
                      </span>
                      <h3 className="text-white font-bold text-sm">Industrial Motor & Panel Bay</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-amber-400 font-bold block">Proprietor</span>
                      <span className="text-xs font-bold text-white">{COMPANY_INFO.proprietor}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Bar */}
              <div className="bg-slate-950 p-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Class H/F Dual-Varnish Coils</span>
                <a
                  href={`tel:${COMPANY_INFO.phone1Raw}`}
                  className="text-amber-400 font-bold hover:underline flex items-center gap-1"
                >
                  <Zap className="w-3.5 h-3.5" /> Call: {COMPANY_INFO.phone1}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
