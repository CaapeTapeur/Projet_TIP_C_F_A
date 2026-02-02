import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MonumentsFilter from './components/MonumentsFilter';
import MonumentsList from './components/MonumentsList';
import MonumentModal from './components/MonumentModal';
import Timeline from './components/Timeline';
import InteractiveMap from './components/InteractiveMap';
import { monuments } from './data/monuments';

const App = () => {
  const [selectedMonument, setSelectedMonument] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const filteredMonuments = monuments.filter(monument => {
    const matchesSearch = monument.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         monument.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPeriod = selectedPeriod === 'all' || monument.period === selectedPeriod;
    return matchesSearch && matchesPeriod;
  });

  const handleMonumentClick = (monument) => {
    setSelectedMonument(monument);
    setCurrentImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}

      {activeSection === 'monuments' && (
        <>
          <MonumentsFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedPeriod={selectedPeriod}
            setSelectedPeriod={setSelectedPeriod}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />
          <MonumentsList
            monuments={filteredMonuments}
            onMonumentClick={handleMonumentClick}
          />
        </>
      )}

      {activeSection === 'timeline' && <Timeline />}

      {activeSection === 'map' && (
        <InteractiveMap onMonumentClick={handleMonumentClick} />
      )}

      <MonumentModal
        monument={selectedMonument}
        onClose={() => setSelectedMonument(null)}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />

      <Footer setActiveSection={setActiveSection} />
    </div>
  );
};

export default App;
