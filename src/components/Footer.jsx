import React from 'react';
import { periodColors } from '../data/monuments';
import { useTranslation } from '../App';

const Footer = ({ setActiveSection }) => {
  const { t } = useTranslation();

  return (
      <footer className="bg-black text-white py-12 mt-auto border-t-4 border-red-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo et description */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-black via-red-800 to-yellow-600 rounded-lg flex items-center justify-center font-bold text-xl">
                  BH
                </div>
                <h3 className="text-xl font-bold">{t('common.siteTitle')}</h3>
              </div>
              <p className="text-gray-400 text-sm">
                {t('ui.navigation.footer.about')}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold mb-4 text-lg">{t('ui.navigation.navigation') || "Navigation"}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                      onClick={() => setActiveSection('home')}
                      className="hover:text-white transition-colors"
                  >
                    {t('ui.navigation.home')}
                  </button>
                </li>
                <li>
                  <button
                      onClick={() => setActiveSection('monuments')}
                      className="hover:text-white transition-colors"
                  >
                    {t('ui.navigation.monuments')}
                  </button>
                </li>
                <li>
                  <button
                      onClick={() => setActiveSection('timeline')}
                      className="hover:text-white transition-colors"
                  >
                    {t('ui.navigation.timeline')}
                  </button>
                </li>
                <li>
                  <button
                      onClick={() => setActiveSection('map')}
                      className="hover:text-white transition-colors"
                  >
                    {t('ui.navigation.map')}
                  </button>
                </li>
              </ul>
            </div>

            {/* Périodes historiques */}
            <div>
              <h4 className="font-bold mb-4 text-lg">{t('common.periods.title') || "Périodes"}</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: periodColors.preWar}}></div>
                  <span>{t('common.periods.preWar')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: periodColors.warTime}}></div>
                  <span>{t('common.periods.warTime')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: periodColors.coldWar}}></div>
                  <span>{t('common.periods.coldWar')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: periodColors.modern}}></div>
                  <span>{t('common.periods.modern')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              {t('ui.navigation.footer.copyright')}
            </p>
            <p className="text-gray-500 text-xs mt-2">
              {t('ui.navigation.footer.tagline')}
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;