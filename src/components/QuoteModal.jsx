import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export default function QuoteModal({ isOpen, onClose, initialSpecs = null, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    service: initialService || (initialSpecs ? 'Load & Panel Estimator Quotation' : 'Custom Control Panel Design'),
    message: initialSpecs
      ? `Quotation requested for Motor Power: ${initialSpecs.hp} HP (${initialSpecs.voltage}V, ${initialSpecs.phase}). Calculated FLA: ${initialSpecs.results?.fullLoadCurrent} A, Cable: ${initialSpecs.results?.suggestedCable}, Breaker: ${initialSpecs.results?.recommendedBreaker}.`
      : '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync state if initialSpecs changes
  useEffect(() => {
    if (initialSpecs) {
      setFormData((prev) => ({
        ...prev,
        service: 'Load & Panel Estimator Quotation',
        message: `Quotation requested for Motor Power: ${initialSpecs.hp} HP (${initialSpecs.voltage}V, ${initialSpecs.phase}). Calculated FLA: ${initialSpecs.results?.fullLoadCurrent} A, Cable: ${initialSpecs.results?.suggestedCable}, Breaker: ${initialSpecs.results?.recommendedBreaker}.`,
      }));
    } else if (initialService) {
      setFormData((prev) => ({
        ...prev,
        service: initialService,
      }));
    }
  }, [initialSpecs, initialService]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const ref = 'QP-' + Math.floor(1000 + Math.random() * 9000);

    const newQuote = {
      id: ref,
      ...formData,
      specs: initialSpecs,
      date: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('ambika_quotes') || '[]');
      localStorage.setItem('ambika_quotes', JSON.stringify([newQuote, ...existing]));
    } catch (err) {
      console.warn('LocalStorage save note:', err);
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 300);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Quotation Request Logged!</h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              We have received your specifications. Vishad Patel or our engineering desk will review them promptly.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href={`https://wa.me/919998577955?text=${encodeURIComponent(
                  `Hello Vishad bhai, I requested a quote for:\n${formData.message}\nContact: ${formData.name} (${formData.phone})`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow"
              >
                <span>Send to WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="py-2 px-5 rounded-xl bg-slate-800 text-slate-300 hover:text-white font-medium text-xs"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4" /> Ambika Electric Quote Desk
            </div>

            <h3 className="text-xl font-bold text-white">
              {initialSpecs ? 'Request Electrical Panel Sizing Quote' : 'Request Engineering Quote'}
            </h3>

            {initialSpecs && (
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-400">Spec:</span>
                  <span className="font-bold text-amber-400">{initialSpecs.hp} HP ({initialSpecs.voltage}V)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Calculated Current:</span>
                  <span className="font-mono text-slate-200">{initialSpecs.results?.fullLoadCurrent} A</span>
                </div>
              </div>
            )}

            <div>
              <label className="text-xs text-slate-400 font-semibold block mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rajesh Shah"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-400 font-semibold block mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 94084 99942"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 font-semibold block mb-1">Company / Facility</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Factory name"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-400 font-semibold block mb-1">Project Requirements *</label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
            >
              {loading ? 'Submitting...' : 'Send Quote Request'}
            </button>

            <div className="pt-2 text-center">
              <span className="text-[11px] text-slate-400">
                Or call Vishad Patel directly:{' '}
                <a href={`tel:${COMPANY_INFO.phone1Raw}`} className="text-amber-400 font-semibold hover:underline">
                  {COMPANY_INFO.phone1}
                </a>
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
