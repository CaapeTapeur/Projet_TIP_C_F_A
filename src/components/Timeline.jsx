import React from 'react';
import { Calendar } from 'lucide-react';
import { timeline } from '../data/timeline';

const Timeline = () => {
  return (
    <section className="bg-gray-100 py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Chronologie</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gray-900 via-red-900 to-gray-900"></div>
          {timeline.map((item, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12"></div>
              <div className="z-20 flex items-center justify-center w-12 h-12 bg-red-800 rounded-full shadow-lg ring-4 ring-white">
                <Calendar size={24} className="text-white" />
              </div>
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-red-900 mb-2">{item.year}</h3>
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
