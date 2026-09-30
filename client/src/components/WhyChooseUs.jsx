import React from 'react';
import { ShieldAlert, Award, Clock, Cpu, CheckCircle2, Factory, Settings, Zap, ArrowRight } from 'lucide-react';
import { TARGET_CLIENTS } from '../data/servicesData';

export default function WhyChooseUs({ onOpenQuoteModal }) {
  const highlights = [
    {
      icon: Clock,
      title: 'Minimized Facility Downtime',
      desc: 'Plant breakdown costs thousands per hour. Our rapid motor rewinding overhaul and emergency repair services prioritize bringing your production lines back online immediately.',
    },
    {
      icon: Award,
      title: 'Certified Rewind Quality',
      desc: 'Every rewind utilizes Class H & F dual-coat enameled copper conductor, precision slot insulation, vacuum impregnation varnish, and dynamic balancing for prolonged lifespan.',
    },
    {
      icon: Settings,
      title: 'Tailored Control Panel Fabrication',
      desc: 'We engineer modular MCC, PCC, and APFC panels custom-configured to your plant floor footprint, motor duty cycles, and industrial safety compliance standards.',
    },
    {
      icon: ShieldAlert,
      title: 'Comprehensive Fault Diagnostics',
      desc: 'Instead of merely fixing symptoms, we investigate winding burn-out root causes (single phasing, voltage spikes, thermal overload) and propose preventive protections.',
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Industrial Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Gujarat Industries Trust Ambika Electric
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From Sardar Industrial Estate, Kadadra, we deliver engineering expertise built specifically for heavy manufacturing facilities, textile mills, chemical units, and continuous production machinery.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Engineering Spotlight Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
          {/* Visual 1: Stator Coil Photo Spotlight */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 group shadow-xl">
            <div className="aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src="/images/motor_winding.jpg"
                alt="Precision Class H Copper Winding"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-2.5 py-1 rounded bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                Workshop Standard
              </span>
              <h4 className="text-xl font-bold text-white">Class H/F High-Temperature Winding</h4>
              <p className="text-xs text-slate-300 mt-1 max-w-md">
                Using 99.9% oxygen-free copper wire, nomex slot insulation, and multi-dip thermal resin baking.
              </p>
            </div>
          </div>

          {/* Visual 2: Custom Control Panel Spotlight */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 group shadow-xl">
            <div className="aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src="/images/custom_control_panel.jpg"
                alt="Engineered Industrial Control Panel"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-2.5 py-1 rounded bg-cyan-500 text-slate-950 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                Panel Fabrication
              </span>
              <h4 className="text-xl font-bold text-white">Precision Wire Ducting & Heavy Busbars</h4>
              <p className="text-xs text-slate-300 mt-1 max-w-md">
                Built to withstand continuous heavy vibration, heat dissipation, and sudden motor inrush currents.
              </p>
            </div>
          </div>
        </div>

        {/* Industries & Sectors Served Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                <Factory className="w-4 h-4" /> Tailored For Industrial Operators
              </span>
              <h3 className="text-2xl font-bold text-white">Serving Critical Industrial Sectors</h3>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
                Whether you operate an automated packaging line, heavy rolling mills, water pumping infrastructure, or CNC machinery, we provide custom electrical support.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 lg:max-w-md">
              {TARGET_CLIENTS.map((client, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-700/80 text-xs font-semibold text-slate-200 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
