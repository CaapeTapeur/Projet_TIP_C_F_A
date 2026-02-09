import React from 'react';
import { MapPin } from 'lucide-react';
import { periodColors } from '../data/monuments';
import { useTranslation } from '../App';

const MonumentCard = ({ monument, onClick }) => {
  const { t } = useTranslation();

  return (
      <div
          onClick={() => onClick(monument)}
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
      >
        <div className="relative h-48 bg-gray-200">
          <img
              src={monument.images[0]}
              alt={monument.name}
              className="w-full h-full object-cover"
          />
          <div
              className="absolute top-2 right-2 px-3 py-1 rounded-full text-white text-sm font-semibold"
              style={{backgroundColor: periodColors[monument.period]}}
          >
            {t(`common.periods.${monument.period}`)}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2">
            {t(`monuments.monuments.${monument.id}.name`)}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3">
            {t(`monuments.monuments.${monument.id}.description`)}
          </p>
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center">
            <MapPin size={16} className="mr-1" />
            Berlin
          </span>
            <span className="text-red-800 font-semibold hover:text-red-900">
            {t('common.actions.learnMore')}
          </span>
          </div>
        </div>
      </div>
  );
};

export default MonumentCard;