import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useTranslation } from '../App';

const Hero = ({ setActiveSection }) => {
  const { t } = useTranslation();

  return (
      <>
        <section className="relative h-screen bg-black overflow-hidden">
          <div className="absolute inset-0">
            {/* Base image */}
            <img
                src="/src/img/berlin_old.jpg"
                alt="Berlin Old"
                className="w-full h-full object-cover overlay-fade"
            />
            {/* Overlay image with fading effect */}
            <img
                src="/src/img/berlin_new.jpg"
                alt="Berlin New"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          </div>

          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <div className="max-w-4xl">
              <div className="mb-6 inline-block px-6 py-2 bg-red-800/80 backdrop-blur-sm rounded-full text-sm font-semibold uppercase tracking-wider">
                1933 - 1989
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {t('common.siteTitle')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                {t('common.welcome')}
              </p>
              <button
                  onClick={() => setActiveSection('monuments')}
                  className="group px-8 py-4 bg-red-800 hover:bg-red-700 text-white text-lg font-semibold rounded-lg shadow-2xl transition-all transform hover:scale-105 hover:shadow-red-800/50"
              >
                {t('common.actions.discover')}
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">18</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{t('common.stats.monumentsCount')}</h3>
                <p className="text-gray-600">{t('common.stats.monumentsDesc')}</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('common.stats.years')}</h3>
                <p className="text-gray-600">{t('common.stats.yearsDesc')}</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('common.stats.map')}</h3>
                <p className="text-gray-600">{t('common.stats.mapDesc')}</p>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default Hero;