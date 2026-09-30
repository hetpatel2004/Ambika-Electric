import React, { useState } from 'react';
import { Cpu, Sliders, Activity, Zap, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/servicesData';

export default function Services({ onSelectService }) {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);

  // Icon mapping
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-amber-400" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-amber-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      default:
        return <Zap className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            Industrial Solutions Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered For Zero Facility Downtime
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-grade materials, precision rewinding tooling, and standards-compliant panel manufacturing engineered to withstand severe industrial conditions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between glass-card-hover group border border-slate-800"
            >
              <div>
                {/* Header within Card */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-amber-500/40 group-hover:bg-amber-500/10 transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-900/90 text-amber-400 border border-slate-800">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Key Metrics / Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.metrics.map((m, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded text-xs bg-slate-900 text-slate-300 border border-slate-800/80 font-medium"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Bullet Points */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800/80 mb-6">
                  {service.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                >
                  <span>Inquire For This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[11px] text-slate-400">Guaranteed Workshop Quality</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
