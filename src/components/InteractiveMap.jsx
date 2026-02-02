import React from 'react';
import { MapPin } from 'lucide-react';
import { monuments, periodColors } from '../data/monuments';

const InteractiveMap = ({ onMonumentClick }) => {
  return (
    <section className="container mx-auto px-4 py-16 min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-center">Carte Interactive</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-[600px] rounded-lg flex items-center justify-center relative overflow-hidden border-2 border-gray-300">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200"
            alt="Berlin Map"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="text-center text-white bg-black/70 p-8 rounded-xl backdrop-blur-sm">
              <MapPin size={64} className="mx-auto mb-4" />
              <p className="text-2xl font-bold mb-2">Carte Interactive</p>
              <p className="text-sm mb-6">Explorez les 18 monuments historiques de Berlin</p>
            </div>
          </div>
          
          {monuments.slice(0, 10).map((monument, idx) => (
            <div
              key={monument.id}
              onClick={() => onMonumentClick(monument)}
              className="absolute w-10 h-10 bg-red-800 rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform flex items-center justify-center"
              style={{
                left: `${20 + idx * 8}%`,
                top: `${30 + (idx % 3) * 20}%`
              }}
              title={monument.name}
            >
              <span className="text-white text-xs font-bold">{idx + 1}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <div className="w-4 h-4 rounded-full" style={{backgroundColor: periodColors.preWar}}></div>
            <span className="text-sm font-medium">Avant-guerre</span>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <div className="w-4 h-4 rounded-full" style={{backgroundColor: periodColors.warTime}}></div>
            <span className="text-sm font-medium">Seconde Guerre mondiale</span>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <div className="w-4 h-4 rounded-full" style={{backgroundColor: periodColors.coldWar}}></div>
            <span className="text-sm font-medium">Guerre froide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
