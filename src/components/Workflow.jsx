import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/servicesData';

export default function Workflow() {
  return (
    <section id="workflow" className="py-20 lg:py-28 bg-slate-900/40 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            Quality Assurance Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our 4-Step Engineering Protocol
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Every motor rewinding and control panel assembly adheres to structured testing protocols to prevent recurring faults.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 relative hover:border-amber-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-amber-400/80 font-mono">
                    {step.step}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-bold text-slate-400">
                    Step {idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-900 flex items-center text-xs text-amber-400/90 font-semibold gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Inspection</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
