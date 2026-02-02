import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Hero = ({ setActiveSection }) => {
  return (
    <>
      <section className="relative h-screen bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=1920&q=80" 
            alt="Berlin Wall"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="max-w-4xl">
            <div className="mb-6 inline-block px-6 py-2 bg-red-800/80 backdrop-blur-sm rounded-full text-sm font-semibold uppercase tracking-wider">
              1933 - 1989
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Berlin - 1933-1989
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Sur les traces de l'histoire : de la Seconde Guerre mondiale à la Guerre froide
            </p>
            <button
              onClick={() => setActiveSection('monuments')}
              className="group px-8 py-4 bg-red-800 hover:bg-red-700 text-white text-lg font-semibold rounded-lg shadow-2xl transition-all transform hover:scale-105 hover:shadow-red-800/50"
            >
              Découvrir les monuments
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
              <h3 className="text-xl font-bold mb-2">Monuments historiques</h3>
              <p className="text-gray-600">Sites emblématiques de la Seconde Guerre mondiale et de la Guerre froide</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">56 ans d'histoire</h3>
              <p className="text-gray-600">De 1933 à 1989, une période qui a transformé Berlin</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Carte interactive</h3>
              <p className="text-gray-600">Explorez Berlin et localisez chaque monument historique</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
