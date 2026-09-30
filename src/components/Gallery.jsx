import React, { useState } from 'react';
import { Camera, ZoomIn, ArrowRight, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/servicesData';

export default function Gallery({ onOpenQuoteModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['All', 'Motor Winding', 'Control Panels', 'Diagnostics', 'Automation', 'Workshop'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-900/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" /> Workshop & Engineering Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Work in Action
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Take a look inside our Sardar Industrial Estate facility and review our completed heavy motor rewinds, control panel builds, and on-site testing projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 cursor-pointer shadow-lg hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>

              {/* Top Badge */}
              <div className="absolute top-3.5 left-3.5">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-950/80 backdrop-blur-md text-amber-400 border border-slate-700/80">
                  {item.category}
                </span>
              </div>

              {/* Zoom Icon Button on Hover */}
              <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-slate-950/80 border border-slate-700/80 flex items-center justify-center text-slate-300 group-hover:text-amber-400 group-hover:scale-110 transition-all">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-bold text-base group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-300 text-xs mt-1 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Need custom engineering or an emergency motor rewind?</h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Bring your motor to Sardar Industrial Estate, Kadadra, or consult our engineering desk today.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition shrink-0 flex items-center gap-2"
          >
            <span>Request Quotation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  {activeImage.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">{activeImage.title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">{activeImage.description}</p>
              </div>
              <button
                onClick={() => {
                  setActiveImage(null);
                  onOpenQuoteModal();
                }}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0"
              >
                Inquire For This
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
