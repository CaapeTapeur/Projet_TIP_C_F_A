import React, { useState, createContext, useContext, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MonumentsFilter from './components/MonumentsFilter';
import MonumentsList from './components/MonumentsList';
import MonumentModal from './components/MonumentModal';
import Timeline from './components/Timeline';
import InteractiveMap from './components/InteractiveMap';
import { monuments } from './data/monuments';
import { periodLabels, periodColors } from './data/monuments';

import { t as translate, setLanguage as setAppLanguage, getLanguage as getAppLanguage } from './i18n';

export const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [currentLang, setCurrentLang] = useState('fr');

    useEffect(() => {
        const savedLang = localStorage.getItem('berlin-historic-lang') || 'fr';
        setCurrentLang(savedLang);
        setAppLanguage(savedLang);
    }, []);

    const changeLanguage = (lang) => {
        if (['fr', 'de'].includes(lang)) {
            setCurrentLang(lang);
            setAppLanguage(lang);
            localStorage.setItem('berlin-historic-lang', lang);
            window.dispatchEvent(new Event('languageChanged'));
        }
    };

    return (
        <LanguageContext.Provider value={{ currentLang, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useTranslation = () => {
    const { currentLang } = useLanguage();
    const [, forceUpdate] = useState({});

    useEffect(() => {
        const handleLanguageChange = () => {
            forceUpdate({});
        };
        window.addEventListener('languageChanged', handleLanguageChange);
        return () => window.removeEventListener('languageChanged', handleLanguageChange);
    }, []);

    const t = (path) => translate(path, currentLang);

    return { t, currentLang };
};

const App = () => {
    const { t, currentLang } = useTranslation();
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

    const getLocalizedPeriodLabels = () => {
        return {
            preWar: t('periods.preWar'),
            warTime: t('periods.warTime'),
            coldWar: t('periods.coldWar'),
            modern: t('periods.modern')
        };
    };

    const handleMonumentClick = (monument) => {
        setSelectedMonument(monument);
        setCurrentImageIndex(0);
    };

    const stats = [
        {
            count: "18",
            title: t('stats.monumentsCount'),
            description: t('common.stats.monumentsDesc')
        },
        {
            icon: "calendar",
            title: t('stats.years'),
            description: t('common.stats.yearsDesc')
        },
        {
            icon: "mapPin",
            title: t('stats.map'),
            description: t('common.stats.mapDesc')
        }
    ];

    const handleSectionChange = (section) => {
        setActiveSection(section);
        setMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <Header
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            {/* Section Accueil */}
            {activeSection === 'home' && (
                <Hero
                    onExploreClick={() => handleSectionChange('monuments')}
                    title={t('common.welcomeTitle')}
                    subtitle={t('common.welcome')}
                    stats={stats}
                    currentLang={currentLang}
                />
            )}

            {/* Section Monuments */}
            {activeSection === 'monuments' && (
                <>
                    <MonumentsFilter
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        selectedPeriod={selectedPeriod}
                        setSelectedPeriod={setSelectedPeriod}
                        showFilters={showFilters}
                        setShowFilters={setShowFilters}
                        periodColors={periodColors}
                        periodLabels={getLocalizedPeriodLabels()}
                        t={t}
                    />
                    <MonumentsList
                        monuments={filteredMonuments}
                        onMonumentClick={handleMonumentClick}
                        periodColors={periodColors}
                        periodLabels={getLocalizedPeriodLabels()}
                        t={t}
                    />
                </>
            )}

            {/* Section Chronologie */}
            {activeSection === 'timeline' && (
                <Timeline/>
            )}

            {/* Section Carte Interactive */}
            {activeSection === 'map' && (
                <InteractiveMap
                    monuments={monuments}
                    onMonumentClick={handleMonumentClick}
                    periodColors={periodColors}
                    periodLabels={getLocalizedPeriodLabels()}
                    t={t}
                />
            )}

            {/* Modal Monument */}
            <MonumentModal
                monument={selectedMonument}
                onClose={() => setSelectedMonument(null)}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
                periodColors={periodColors}
                periodLabels={getLocalizedPeriodLabels()}
                t={t}
            />

            {/* Footer */}
            <Footer
                onSectionChange={handleSectionChange}
                periodColors={periodColors}
                periodLabels={getLocalizedPeriodLabels()}
                t={t}
                currentLang={currentLang}
            />
        </div>
    );
};

const AppWithLanguage = () => (
    <LanguageProvider>
        <App />
    </LanguageProvider>
);

export default AppWithLanguage;