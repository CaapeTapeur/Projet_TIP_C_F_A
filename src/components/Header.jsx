import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ 
  activeSection, 
  setActiveSection, 
  mobileMenuOpen, 
  setMobileMenuOpen 
}) => {
  return (
    <header className="bg-black text-white shadow-2xl sticky top-0 z-50 border-b-4 border-red-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo et titre */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-black via-red-800 to-yellow-600 rounded-lg flex items-center justify-center font-bold text-xl">
              BH
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Berlin Historique</h1>
              <p className="text-xs text-gray-400 hidden md:block">Découvrez l'histoire fascinante de Berlin</p>
            </div>
          </div>
          
          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => setActiveSection('home')}
              className={`px-6 py-2 rounded-lg transition-all font-medium ${
                activeSection === 'home' 
                  ? 'bg-red-800 text-white shadow-lg' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              Accueil
            </button>
            <button
              onClick={() => setActiveSection('monuments')}
              className={`px-6 py-2 rounded-lg transition-all font-medium ${
                activeSection === 'monuments' 
                  ? 'bg-red-800 text-white shadow-lg' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              Monuments
            </button>
            <button
              onClick={() => setActiveSection('timeline')}
              className={`px-6 py-2 rounded-lg transition-all font-medium ${
                activeSection === 'timeline' 
                  ? 'bg-red-800 text-white shadow-lg' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              Chronologie
            </button>
            <button
              onClick={() => setActiveSection('map')}
              className={`px-6 py-2 rounded-lg transition-all font-medium ${
                activeSection === 'map' 
                  ? 'bg-red-800 text-white shadow-lg' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              Carte Interactive
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            {/* Language Selector (désactivé) */}
            <div className="flex bg-gray-800 rounded-lg p-1 border border-gray-700 opacity-50 cursor-not-allowed">
              <button
                disabled
                className="px-4 py-2 rounded-md bg-red-800 text-white shadow-lg font-semibold"
              >
                🇫🇷 FR
              </button>
              <button
                disabled
                className="px-4 py-2 rounded-md text-gray-400 font-semibold"
              >
                🇩🇪 DE
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Navigation Mobile */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-2 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  setActiveSection('home');
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-lg text-left transition-all font-medium ${
                  activeSection === 'home' 
                    ? 'bg-red-800 text-white' 
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                Accueil
              </button>
              <button
                onClick={() => {
                  setActiveSection('monuments');
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-lg text-left transition-all font-medium ${
                  activeSection === 'monuments' 
                    ? 'bg-red-800 text-white' 
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                Monuments
              </button>
              <button
                onClick={() => {
                  setActiveSection('timeline');
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-lg text-left transition-all font-medium ${
                  activeSection === 'timeline' 
                    ? 'bg-red-800 text-white' 
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                Chronologie
              </button>
              <button
                onClick={() => {
                  setActiveSection('map');
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-lg text-left transition-all font-medium ${
                  activeSection === 'map' 
                    ? 'bg-red-800 text-white' 
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                Carte Interactive
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
