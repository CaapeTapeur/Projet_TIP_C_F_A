import React from 'react';
import { periodColors } from '../data/monuments';

const Footer = ({ setActiveSection }) => {
  return (
    <footer className="bg-black text-white py-12 mt-auto border-t-4 border-red-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-black via-red-800 to-yellow-600 rounded-lg flex items-center justify-center font-bold text-xl">
                BH
              </div>
              <h3 className="text-xl font-bold">Berlin Historique</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Explorez l'histoire fascinante de Berlin à travers ses monuments emblématiques.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => setActiveSection('home')} className="hover:text-white transition-colors">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => setActiveSection('monuments')} className="hover:text-white transition-colors">
                  Monuments
                </button>
              </li>
              <li>
                <button onClick={() => setActiveSection('timeline')} className="hover:text-white transition-colors">
                  Chronologie
                </button>
              </li>
              <li>
                <button onClick={() => setActiveSection('map')} className="hover:text-white transition-colors">
                  Carte Interactive
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Périodes</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{backgroundColor: periodColors.preWar}}></div>
                <span>Avant-guerre</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{backgroundColor: periodColors.warTime}}></div>
                <span>Seconde Guerre mondiale</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{backgroundColor: periodColors.coldWar}}></div>
                <span>Guerre froide</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Berlin Historique - Tous droits réservés
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Un voyage à travers l'histoire de Berlin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
