import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CursorFollower from '@/components/CursorFollower';
import Navigation from '@/components/Navigation';
import MobileNav from '@/components/MobileNav';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import portfolioData from '@/data/portfolio.json';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection data={portfolioData} onNavigate={handleNavigate} />;
      case 'about':
        return <AboutSection data={portfolioData} />;
      case 'skills':
        return <SkillsSection data={portfolioData} />;
      case 'projects':
        return <ProjectsSection data={portfolioData} />;
      case 'contact':
        return <ContactSection data={portfolioData} />;
      default:
        return <HomeSection data={portfolioData} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-soft">
      {/* Cursor follower - hidden on mobile */}
      <div className="hidden lg:block">
        <CursorFollower />
      </div>

      {/* Background gradient orbs */}
      <div className="pointer-events-none fixed inset-0">
        <motion.div 
          className="absolute left-1/4 top-1/4 h-96 w-96 animate-float rounded-full blur-3xl"
          animate={{
            background: [
              'hsl(200 100% 70% / 0.2)',
              'hsl(280 80% 70% / 0.2)',
              'hsl(340 85% 70% / 0.2)',
              'hsl(200 100% 70% / 0.2)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-blob rounded-full blur-3xl"
          animate={{
            background: [
              'hsl(280 80% 70% / 0.2)',
              'hsl(160 70% 60% / 0.2)',
              'hsl(200 100% 70% / 0.2)',
              'hsl(280 80% 70% / 0.2)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute left-1/2 top-1/2 h-80 w-80 animate-float rounded-full blur-3xl"
          animate={{
            background: [
              'hsl(340 85% 70% / 0.15)',
              'hsl(200 100% 70% / 0.15)',
              'hsl(160 70% 60% / 0.15)',
              'hsl(340 85% 70% / 0.15)',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      <MobileNav activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main content */}
      <main className="relative z-10 pb-20 lg:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
