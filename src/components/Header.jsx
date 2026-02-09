import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { useLanguage, useTranslation } from '../App';

const Header = ({
                  activeSection,
                  onSectionChange,
                  mobileMenuOpen,
                  setMobileMenuOpen
                }) => {
  const { currentLang, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
      <header className="bg-black text-white shadow-2xl sticky top-0 z-50 border-b-4 border-red-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-black via-red-800 to-yellow-600 rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                {currentLang === 'fr' ? 'BH' : 'HB'}
              </div>
              <div className="flex flex-col min-w-0">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight truncate">
                  {t('common.siteTitle')}
                </h1>
                <p className="text-xs text-gray-400 hidden md:block truncate">
                  {t('common.siteSubtitle')}
                </p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-1">
              <button
                  onClick={() => onSectionChange('home')}
                  className={`px-6 py-2 rounded-lg transition-all font-medium ${
                      activeSection === 'home'
                          ? 'bg-red-800 text-white shadow-lg'
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
              >
                {t('ui.navigation.home')}
              </button>
              <button
                  onClick={() => onSectionChange('monuments')}
                  className={`px-6 py-2 rounded-lg transition-all font-medium ${
                      activeSection === 'monuments'
                          ? 'bg-red-800 text-white shadow-lg'
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
              >
                {t('ui.navigation.monuments')}
              </button>
              <button
                  onClick={() => onSectionChange('timeline')}
                  className={`px-6 py-2 rounded-lg transition-all font-medium ${
                      activeSection === 'timeline'
                          ? 'bg-red-800 text-white shadow-lg'
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
              >
                {t('ui.navigation.timeline')}
              </button>
              <button
                  onClick={() => onSectionChange('map')}
                  className={`px-6 py-2 rounded-lg transition-all font-medium ${
                      activeSection === 'map'
                          ? 'bg-red-800 text-white shadow-lg'
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
              >
                {t('ui.navigation.map')}
              </button>
            </nav>

            <div className="flex items-center space-x-3">
              <div className="flex bg-gray-800 rounded-lg p-1 border border-gray-700 shadow-lg">
                <button
                    onClick={() => changeLanguage('fr')}
                    className={`px-4 py-2 rounded-md font-semibold transition-all hover:transform hover:-translate-y-0.5 ${
                        currentLang === 'fr'
                            ? 'bg-gradient-to-r from-red-800 to-red-900 text-white shadow-md'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                >
                  🇫🇷 FR
                </button>
                <button
                    onClick={() => changeLanguage('de')}
                    className={`px-4 py-2 rounded-md font-semibold transition-all hover:transform hover:-translate-y-0.5 ${
                        currentLang === 'de'
                            ? 'bg-gradient-to-r from-red-800 to-red-900 text-white shadow-md' // Même dégradé rouge que FR
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                >
                  🇩🇪 DE
                </button>
              </div>

              <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
              <nav className="lg:hidden mt-4 pb-2 border-t border-gray-800 pt-4">
                <div className="flex flex-col space-y-2">
                  <button
                      onClick={() => {
                        onSectionChange('home');
                        setMobileMenuOpen(false);
                      }}
                      className={`px-4 py-3 rounded-lg text-left transition-all font-medium ${
                          activeSection === 'home'
                              ? 'bg-red-800 text-white'
                              : 'text-gray-300 hover:bg-gray-800'
                      }`}
                  >
                    {t('ui.navigation.home')}
                  </button>
                  <button
                      onClick={() => {
                        onSectionChange('monuments');
                        setMobileMenuOpen(false);
                      }}
                      className={`px-4 py-3 rounded-lg text-left transition-all font-medium ${
                          activeSection === 'monuments'
                              ? 'bg-red-800 text-white'
                              : 'text-gray-300 hover:bg-gray-800'
                      }`}
                  >
                    {t('ui.navigation.monuments')}
                  </button>
                  <button
                      onClick={() => {
                        onSectionChange('timeline');
                        setMobileMenuOpen(false);
                      }}
                      className={`px-4 py-3 rounded-lg text-left transition-all font-medium ${
                          activeSection === 'timeline'
                              ? 'bg-red-800 text-white'
                              : 'text-gray-300 hover:bg-gray-800'
                      }`}
                  >
                    {t('ui.navigation.timeline')}
                  </button>
                  <button
                      onClick={() => {
                        onSectionChange('map');
                        setMobileMenuOpen(false);
                      }}
                      className={`px-4 py-3 rounded-lg text-left transition-all font-medium ${
                          activeSection === 'map'
                              ? 'bg-red-800 text-white'
                              : 'text-gray-300 hover:bg-gray-800'
                      }`}
                  >
                    {t('ui.navigation.map')}
                  </button>
                </div>
              </nav>
          )}
        </div>
      </header>
  );
};

export default Header;