import React from 'react';
import { Zap, Phone, MapPin, Globe, Shield, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold tracking-wider text-white uppercase block">
                  Ambika <span className="text-amber-400">Electric</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                  Industrial Electrical Engineering
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Providing heavy motor rewinding, custom control panel fabrication, plant automation, and preventive electrical engineering services to factories across Gujarat.
            </p>

            <div className="pt-2 text-xs text-slate-300">
              <span>Proprietor: <strong className="text-white">{COMPANY_INFO.proprietor}</strong></span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition">Heavy Motor Winding</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition">Custom Control Panel Design</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition">Industrial Automation & PLC</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition">Industrial Diagnostics & Consulting</a>
              </li>
              <li>
                <a href="#estimator" className="text-amber-400 font-medium hover:underline">
                  Load & Panel Estimator Tool
                </a>
              </li>
            </ul>
          </div>

          {/* Workshop & Direct Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">Workshop & Hotline</h4>
            
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone1Raw}`} className="hover:text-amber-400 font-semibold">
                  {COMPANY_INFO.phone1}
                </a>
                <span>/</span>
                <a href={`tel:${COMPANY_INFO.phone2Raw}`} className="hover:text-amber-400">
                  {COMPANY_INFO.phone2}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <Globe className="w-4 h-4 text-slate-400" />
                <a
                  href={COMPANY_INFO.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <span>ambikaelectric.netlify.app</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with 2026 Copyright matching document */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Ambika Electric. All rights reserved. Industrial Electrical Engineering.
          </div>
          <div className="flex items-center gap-4">
            <span>Kadadra, Gujarat – 382305</span>
            <span>•</span>
            <span>Shop No. 22, Sardar Industrial Estate</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
