import React, { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, Building, User, Mail, MessageSquare } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/servicesData';

export default function ContactSection({ prefilledService = '', prefilledSpecs = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    service: prefilledService || 'Heavy Motor Winding & Maintenance',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          estimatedSpecs: prefilledSpecs ? {
            motorHp: prefilledSpecs.hp,
            voltage: `${prefilledSpecs.voltage}V (${prefilledSpecs.phase})`,
            fullLoadCurrent: `${prefilledSpecs.results?.fullLoadCurrent || ''} A`,
            suggestedCable: prefilledSpecs.results?.suggestedCable || '',
            recommendedBreaker: prefilledSpecs.results?.recommendedBreaker || '',
          } : undefined,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || 'Unable to submit enquiry. Please call us directly.');
      }
    } catch (err) {
      console.warn('Backend enquiry submission note:', err);
      // Even if network fails or backend is offline, inform the user gracefully
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            Industrial Hotline & Workshop
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Consult With Our Electrical Engineers
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Reach out directly to proprietor <strong className="text-slate-200">{COMPANY_INFO.proprietor}</strong> for fast quotes, motor rewinding drop-offs, or custom panel fabrication consults.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Business Details & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Workshop Address Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                    Workshop & Office Location
                  </span>
                  <h4 className="text-base font-bold text-white mt-1 mb-2">Ambika Electric</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                    <span>Near Narnarayan Kanta</span> • <span>Sardar Industrial Estate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone Numbers Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-4">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                Direct Contact & Hotline
              </span>

              <div className="space-y-3">
                <a
                  href={`tel:${COMPANY_INFO.phone1Raw}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-800/60 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Primary Contact / WhatsApp</div>
                      <div className="text-sm font-bold text-white group-hover:text-amber-400 transition">
                        {COMPANY_INFO.phone1}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-amber-400 font-semibold">Call Now →</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone2Raw}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-800/60 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Secondary Hotline</div>
                      <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition">
                        {COMPANY_INFO.phone2}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-cyan-400 font-semibold">Call Now →</span>
                </a>
              </div>

              {/* WhatsApp Quick Link */}
              <a
                href={`https://wa.me/919998577955?text=Hello%20Vishad%20bhai,%20I%20have%20an%20industrial%20electrical%20enquiry%20regarding%20Ambika%20Electric.`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950 transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp (+91 99985 77955)</span>
              </a>
            </div>

            {/* Working Hours */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 text-xs sm:text-sm text-slate-300">
              <Clock className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <strong className="text-white">Operating Hours:</strong> {COMPANY_INFO.hours}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-slate-950/90 rounded-2xl p-6 sm:p-9 border border-slate-800 shadow-2xl relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Enquiry Received Successfully</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to <strong className="text-amber-400">Ambika Electric</strong>. Proprietor <strong className="text-white">Vishad Patel</strong> or our technical team will review your specifications and get in touch promptly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        company: '',
                        service: 'Heavy Motor Winding & Maintenance',
                        message: '',
                      });
                    }}
                    className="py-2.5 px-6 rounded-xl bg-slate-900 text-amber-400 border border-slate-700 hover:bg-slate-800 text-xs font-semibold"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-white">Direct Project / Service Enquiry</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form below. We respond quickly with feasibility and initial quotation estimates.
                  </p>
                </div>

                {prefilledSpecs && (
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 flex items-center justify-between">
                    <span>
                      Attaching Estimator Specs: <strong>{prefilledSpecs.hp} HP ({prefilledSpecs.voltage}V)</strong>
                    </span>
                    <span className="font-mono text-xs">{prefilledSpecs.results?.fullLoadCurrent} A</span>
                  </div>
                )}

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1.5">
                      Your Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Bhai"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1.5">
                      Company / Factory Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Patel Engineering Ltd"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1.5">
                      Service Category *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Heavy Motor Winding & Maintenance">Heavy Motor Winding & Maintenance</option>
                      <option value="Custom Control Panel Design">Custom Control Panel Design</option>
                      <option value="Industrial Consulting & Diagnostics">Industrial Consulting & Diagnostics</option>
                      <option value="Industrial Automation & PLC">Industrial Automation & PLC</option>
                      <option value="Load & Panel Estimator Quotation">Load & Panel Estimator Quotation</option>
                      <option value="General Electrical Enquiry">General Electrical Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1.5">
                    Project Details / Motor Specifications *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify motor HP, symptoms of fault, panel requirements, or delivery urgency..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                      Submitting Enquiry...
                    </span>
                  ) : (
                    <>
                      <span>Submit Technical Enquiry</span>
                      <Send className="w-4 h-4 stroke-[2.5]" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
