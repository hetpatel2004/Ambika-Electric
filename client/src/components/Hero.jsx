import React from 'react';
import { Zap, ShieldCheck, Cpu, ArrowRight, Calculator, CheckCircle2, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 mesh-pattern">
      {/* Ambient Radial Gradient Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-medium shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>Industrial Electrical Engineering • Kadadra, Gujarat</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Precision Electrical <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500 bg-clip-text text-transparent">
                Engineering Solutions
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
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Heavy AC/DC Motors</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Custom MCC & PCC Panels</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
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
                href="#services"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-slate-600 transition flex items-center gap-2"
              >
                <span>View All Services</span>
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

          {/* Right Column: Industrial Live Spec Card */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 sm:p-7 relative border border-slate-700/60 shadow-2xl overflow-hidden group">
              {/* Corner industrial accent mark */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/20 to-transparent pointer-events-none"></div>

              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
                    <Cpu className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm tracking-wide">WORKSHOP CAPABILITY</h3>
                    <p className="text-[11px] text-slate-400">Class H/F Coil Winding & Testing</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  Certified Standards
                </span>
              </div>

              {/* Engineering Highlights */}
              <div className="space-y-4 py-5 text-sm">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-amber-400 font-bold text-xs">
                    01
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xs sm:text-sm">High-Temp Motor Rewinding</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Heavy industrial induction, HT/LT motors, slip-ring, and brake motors up to 500+ HP.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-cyan-400 font-bold text-xs">
                    02
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xs sm:text-sm">Tailored Automation & Panels</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Custom busbar routing, contactor logic, APFC capacitor banks, and VFD speed control.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-amber-400 font-bold text-xs">
                    03
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xs sm:text-sm">Diagnostics & Preventive Testing</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Surge comparison testing, insulation megger checks, and complete load profiling.</p>
                  </div>
                </div>
              </div>

              {/* Direct Workshop Banner */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Proprietor Contact</span>
                  <span className="text-sm font-bold text-white">{COMPANY_INFO.proprietor}</span>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phone1Raw}`}
                  className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.phone1}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
