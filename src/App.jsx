import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Estimator from './components/Estimator';
import WhyChooseUs from './components/WhyChooseUs';
import Workflow from './components/Workflow';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteSpecs, setQuoteSpecs] = useState(null);
  const [selectedService, setSelectedService] = useState('');

  // Handle service selection from Services section
  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle quote modal trigger from Estimator with calculated specs
  const handleSendSpecsToQuote = (specsData) => {
    setQuoteSpecs(specsData);
    setIsQuoteOpen(true);
  };

  // Handle general quote modal open
  const handleOpenGeneralQuote = () => {
    setQuoteSpecs(null);
    setSelectedService('Custom Control Panel Design');
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Navigation */}
      <Navbar onOpenQuoteModal={handleOpenGeneralQuote} />

      {/* Main Landing Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenQuoteModal={handleOpenGeneralQuote} />

        {/* Services & Core Specialties */}
        <Services onSelectService={handleSelectService} />

        {/* Interactive Industrial Load & Panel Estimator */}
        <Estimator onSendSpecsToQuote={handleSendSpecsToQuote} />

        {/* Quality Assurance & Why Choose Us */}
        <WhyChooseUs onOpenQuoteModal={handleOpenGeneralQuote} />

        {/* 4-Step Engineering Protocol */}
        <Workflow />

        {/* Real-World Workshop & Engineering Gallery */}
        <Gallery onOpenQuoteModal={handleOpenGeneralQuote} />

        {/* Direct Contact & Enquiry Section */}
        <ContactSection
          prefilledService={selectedService}
          prefilledSpecs={quoteSpecs}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Quotation Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialSpecs={quoteSpecs}
        initialService={selectedService}
      />
    </div>
  );
}
