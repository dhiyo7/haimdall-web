import React from 'react';
import { Navbar } from './modules/layout/Navbar';
import { Hero } from './modules/landing/Hero';

import { AboutSection } from './modules/landing/AboutSection';
import { Features } from './modules/landing/Features';
import { DocumentationSection } from './modules/landing/DocumentationSection';
import { VisualIntelligenceSection } from './modules/landing/VisualIntelligenceSection';
import { Roadmap } from './modules/landing/Roadmap';
import { Footer } from './modules/layout/Footer';
import { ScrollToTop } from './components/ui/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />

        <AboutSection />
        <Features />
        <DocumentationSection />
        <VisualIntelligenceSection />
        <Roadmap />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;