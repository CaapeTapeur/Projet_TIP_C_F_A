import React from 'react';
import { Search, Filter } from 'lucide-react';
import { periodColors } from '../data/monuments';
import { useTranslation } from '../App';

const MonumentsFilter = ({
                           searchTerm,
                           setSearchTerm,
                           selectedPeriod,
                           setSelectedPeriod,
                           showFilters,
                           setShowFilters
                         }) => {
  const { t } = useTranslation();

  return (
      <section className="container mx-auto px-4 py-8 mt-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                  type="text"
                  placeholder={t('common.actions.search')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
              />
            </div>
            <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center space-x-2 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Filter size={20} />
              <span>{t('common.actions.filters')}</span>
            </button>
          </div>

          {showFilters && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-3">
                  <button
                      onClick={() => setSelectedPeriod('all')}
                      className={`px-4 py-2 rounded-lg transition-all ${selectedPeriod === 'all' ? 'bg-gray-900 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                  >
                    {t('common.actions.allPeriods')}
                  </button>
                  {['preWar', 'warTime', 'coldWar', 'modern'].map(period => (
                      <button
                          key={period}
                          onClick={() => setSelectedPeriod(period)}
                          className={`px-4 py-2 rounded-lg transition-all ${selectedPeriod === period ? 'text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                          style={selectedPeriod === period ? {backgroundColor: periodColors[period]} : {}}
                      >
                        {t(`common.periods.${period}`)}
                      </button>
                  ))}
                </div>
              </div>
          )}
        </div>
      </section>
  );
};

export default MonumentsFilter;