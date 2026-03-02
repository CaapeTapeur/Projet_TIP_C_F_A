import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { monuments, periodColors } from '../data/monuments';
import { useTranslation } from '../App';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
      'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl:
      'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl:
      'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const berlinCenter = [52.5069, 13.3747];

const berlinBounds = [
  [52.4383, 13.1883],
  [52.5755, 13.5611],
];

const InteractiveMap = ({ onMonumentClick }) => {
  const { t } = useTranslation();

  return (
      <section className="container mx-auto px-4 py-12 min-h-screen relative z-0">
        <h2 className="text-4xl font-bold mb-8 text-center">
          {t('ui.navigation.map')}
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <MapContainer
              center={berlinCenter}
              zoom={13}
              minZoom={11}
              maxZoom={18}
              maxBounds={berlinBounds}
              maxBoundsViscosity={1.0}
              className="h-[600px] w-full rounded-lg z-0"
          >
            <TileLayer
                attribution={t('map.attribution')}
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {monuments.map((monument, idx) => {
              const color = periodColors[monument.period];

              const customIcon = new L.DivIcon({
                className: '',
                html: `
                  <div style="
                    background:${color};
                    width:24px;
                    height:24px;
                    border-radius:50%;
                    border:3px solid white;
                    box-shadow:0 0 6px rgba(0,0,0,0.4);
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    font-size:12px;
                    font-weight:bold;
                    color:white;
                  ">
                    ${idx + 1}
                  </div>
                `,
                iconSize: [24, 24],
                iconAnchor: [12, 12], // center the number
              });

              return (
                  <Marker
                      key={monument.id}
                      position={monument.coordinates}
                      icon={customIcon}
                      eventHandlers={{
                        click: () => onMonumentClick(monument),
                      }}
                  />
              );
            })}
          </MapContainer>

          {/* Legend */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: periodColors.preWar }}
              />
              <span className="text-sm font-medium">
              {t('common.periods.preWar')}
            </span>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: periodColors.warTime }}
              />
              <span className="text-sm font-medium">
              {t('common.periods.warTime')}
            </span>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: periodColors.coldWar }}
              />
              <span className="text-sm font-medium">
              {t('common.periods.coldWar')}
            </span>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: periodColors.modern }}
              />
              <span className="text-sm font-medium">
              {t('common.periods.modern')}
            </span>
            </div>
          </div>
        </div>
      </section>
  );
};

export default InteractiveMap;