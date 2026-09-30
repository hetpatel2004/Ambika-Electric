import React, { useState, useMemo } from 'react';
import { Calculator, Zap, Gauge, Shield, Cpu, Copy, Check, ArrowRight, Info, Sliders } from 'lucide-react';
import { calculateMotorSpecs } from '../utils/electricalCalc';

export default function Estimator({ onSendSpecsToQuote }) {
  const [hp, setHp] = useState(10);
  const [voltage, setVoltage] = useState(415);
  const [powerFactor, setPowerFactor] = useState(0.85);
  const [phase, setPhase] = useState('3-Phase');
  const [copied, setCopied] = useState(false);

  // Quick preset sizes common in industrial manufacturing
  const presets = [3, 5, 7.5, 10, 15, 20, 30, 50];

  const results = useMemo(() => {
    return calculateMotorSpecs({
      hp,
      voltage,
      powerFactor,
      phase,
    });
  }, [hp, voltage, powerFactor, phase]);

  const handleCopySpecs = () => {
    const text = `--- AMBIKA ELECTRIC MOTOR & PANEL ESTIMATION ---
Motor Power: ${hp} HP (${results.kW} kW)
System Voltage: ${voltage}V (${phase})
Power Factor: ${powerFactor}
Full-Load Current: ${results.fullLoadCurrent} A
Suggested Cable: ${results.suggestedCable}
Recommended Breaker: ${results.recommendedBreaker}
Recommended Starter: ${results.starterType}
Calculated by: Ambika Electric Industrial Estimator (Kadadra, Gujarat)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="estimator" className="py-20 lg:py-28 bg-slate-900/50 border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" /> Interactive Industrial Tool
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Industrial Load & Panel Estimator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Input your machinery parameters to immediately evaluate preliminary full-load electrical current, copper cable requirements, and breaker ratings.
          </p>
        </div>

        {/* Estimator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Inputs & Controls */}
          <div className="lg:col-span-6 bg-slate-950/90 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-amber-400" />
                <span>Machinery Parameters</span>
              </h3>
              <span className="text-xs text-amber-400 font-medium bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                Live Calculation
              </span>
            </div>

            {/* Quick Presets */}
            <div>
              <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                Common Industrial Motor Ratings (HP)
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {presets.map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setHp(val)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                      hp === val
                        ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                    }`}
                  >
                    {val} HP
                  </button>
                ))}
              </div>
            </div>

            {/* Motor Power Input & Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-white">
                  Motor Power: <span className="text-amber-400 font-bold">{hp} HP</span> ({results.kW} kW)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0.5"
                    max="500"
                    step="0.5"
                    value={hp}
                    onChange={(e) => setHp(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
                    className="w-20 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-sm font-mono text-amber-400 text-right focus:outline-none focus:border-amber-500"
                  />
                  <span className="text-xs text-slate-400">HP</span>
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                step="0.5"
                value={hp <= 100 ? hp : 100}
                onChange={(e) => setHp(parseFloat(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>1 HP</span>
                <span>25 HP</span>
                <span>50 HP</span>
                <span>100 HP</span>
              </div>
            </div>

            {/* System Phase & Voltage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                  Phase Architecture
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setPhase('3-Phase');
                      setVoltage(415);
                    }}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition ${
                      phase === '3-Phase'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    3-Phase (415V)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPhase('1-Phase');
                      setVoltage(230);
                    }}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition ${
                      phase === '1-Phase'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    1-Phase (230V)
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                  Operating Voltage (V)
                </label>
                <select
                  value={voltage}
                  onChange={(e) => setVoltage(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-amber-500"
                >
                  {phase === '3-Phase' ? (
                    <>
                      <option value={415}>415 V (Standard Industrial 3-Phase)</option>
                      <option value={400}>400 V (European Std)</option>
                      <option value={380}>380 V (Export Spec)</option>
                      <option value={440}>440 V (Heavy Duty Grid)</option>
                    </>
                  ) : (
                    <>
                      <option value={230}>230 V (Single Phase Standard)</option>
                      <option value={220}>220 V (Domestic Grid)</option>
                      <option value={240}>240 V (Upper Utility Range)</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            {/* Power Factor (cos φ) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Power Factor (cos φ): <strong className="text-amber-400 font-bold">{powerFactor}</strong>
                </label>
                <span className="text-[11px] text-slate-400">Standard Industrial ~ 0.85</span>
              </div>
              <input
                type="range"
                min="0.70"
                max="0.98"
                step="0.01"
                value={powerFactor}
                onChange={(e) => setPowerFactor(parseFloat(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>0.70 (Inductive)</span>
                <span>0.85 (Nominal)</span>
                <span>0.98 (APFC Corrected)</span>
              </div>
            </div>

          </div>

          {/* Right Panel: Live Electrical Outputs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Primary Metrics Display */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-amber-500/30 relative overflow-hidden electric-glow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold block">
                    Calculated Output
                  </span>
                  <h4 className="text-white font-bold text-lg">Electrical Load Specification</h4>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Motor Rating</span>
                  <span className="text-sm font-bold text-slate-200">{hp} HP / {results.kW} kW</span>
                </div>
              </div>

              {/* 3 Main Result Cards matching Document */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                
                {/* 1. Full-Load Current */}
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-400 font-medium">Full-Load Current</span>
                    <Gauge className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                    {results.fullLoadCurrent} <span className="text-sm font-bold text-slate-400">A</span>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-2 block">Continuous operating load</span>
                </div>

                {/* 2. Suggested Cable Size */}
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-400 font-medium">Suggested Cable</span>
                    <Zap className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">
                    {results.suggestedCable}
                  </div>
                  <span className="text-[11px] text-slate-400 mt-2 block">Multi-strand copper armoured</span>
                </div>

                {/* 3. Recommended Breaker */}
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-400 font-medium">MCB / MCCB Rating</span>
                    <Shield className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                    {results.recommendedBreaker}
                  </div>
                  <span className="text-[11px] text-slate-400 mt-2 block">Inrush trip coordinated</span>
                </div>

              </div>

              {/* Starter Recommendation */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                    Recommended Starter Architecture
                  </span>
                  <div className="text-sm font-bold text-white mt-0.5">{results.starterType}</div>
                  <p className="text-xs text-slate-400 mt-1">{results.starterDesc}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onSendSpecsToQuote({ hp, voltage, powerFactor, phase, results })}
                  className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2"
                >
                  <span>Request Custom Panel Quote for this Spec</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <button
                  type="button"
                  onClick={handleCopySpecs}
                  className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold transition flex items-center gap-2"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Specs Copied!' : 'Copy Specs'}</span>
                </button>
              </div>
            </div>

            {/* Engineering Disclaimer Card (as noted in document section 5) */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-400 text-xs flex items-start gap-3 leading-relaxed">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-300">Engineering Notice:</strong> These displayed estimator values provide preliminary sizing based on standard motor tables (e.g. 10 HP ≈ 13.1 A at 415V with 2.5 sq mm cable & 20 A breaker). Final equipment and busbar sizing require application ambient temperature review, run length voltage drop calculation, and verification by qualified electrical professionals at Ambika Electric.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
