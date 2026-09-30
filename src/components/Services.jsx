import React from 'react';
import { Cpu, Sliders, Activity, Zap, CheckCircle, ArrowRight, Eye } from 'lucide-react';
import { SERVICES } from '../data/servicesData';

export default function Services({ onSelectService, onOpenImageModal }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5 text-amber-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      default:
        return <Zap className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            Industrial Solutions Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered For Zero Facility Downtime
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-grade materials, precision rewinding tooling, and standards-compliant panel manufacturing engineered to withstand severe industrial conditions.
          </p>
        </div>

        {/* Services Grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between glass-card-hover group border border-slate-800"
            >
              {/* Service Visual Photo Banner */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-900 cursor-pointer" onClick={() => onOpenImageModal && onOpenImageModal(service.image, service.title)}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/80 flex items-center justify-center">
                    {getIcon(service.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-950/85 backdrop-blur-md text-amber-400 border border-slate-700/80">
                    {service.tag}
                  </span>
                </div>

                {/* View Photo Prompt on Hover */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/90 text-slate-200 text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-slate-700">
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>Inspect Spec</span>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-7 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
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
                  <div className="space-y-2.5 pt-3 border-t border-slate-800/80 mb-6">
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
                  <span className="text-[11px] text-slate-500 font-medium">Guaranteed Workshop Quality</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
