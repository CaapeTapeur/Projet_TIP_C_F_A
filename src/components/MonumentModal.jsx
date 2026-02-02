import React from 'react';
import { X, ChevronLeft, ChevronRight, Clock, Euro, MapPin } from 'lucide-react';
import { periodColors, periodLabels } from '../data/monuments';

const MonumentModal = ({ 
  monument, 
  onClose, 
  currentImageIndex, 
  setCurrentImageIndex 
}) => {
  if (!monument) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-4xl w-full my-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-red-800 text-white rounded-full hover:bg-red-900 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="relative h-96 bg-gray-200">
          <img
            src={monument.images[currentImageIndex]}
            alt={monument.name}
            className="w-full h-full object-cover"
          />
          {monument.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((currentImageIndex - 1 + monument.images.length) % monument.images.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((currentImageIndex + 1) % monument.images.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
          <div
            className="absolute top-4 left-4 px-4 py-2 rounded-full text-white font-semibold"
            style={{backgroundColor: periodColors[monument.period]}}
          >
            {periodLabels[monument.period]}
          </div>
        </div>

        <div className="p-8 max-h-96 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-4">{monument.name}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-start space-x-2">
              <Clock className="text-red-800 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold">Horaires</p>
                <p className="text-sm text-gray-600">{monument.hours}</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Euro className="text-red-800 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold">Prix</p>
                <p className="text-sm text-gray-600">{monument.price}</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="text-red-800 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold">Accès</p>
                <p className="text-sm text-gray-600">{monument.access}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-red-900">Histoire</h3>
              <p className="text-gray-700 leading-relaxed">{monument.history}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-red-900">Anecdotes</h3>
              <p className="text-gray-700 leading-relaxed">{monument.facts}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonumentModal;
