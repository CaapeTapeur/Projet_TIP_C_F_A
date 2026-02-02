import React from 'react';
import MonumentCard from './MonumentCard';

const MonumentsList = ({ monuments, onMonumentClick }) => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Monuments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {monuments.map(monument => (
          <MonumentCard 
            key={monument.id} 
            monument={monument} 
            onClick={onMonumentClick}
          />
        ))}
      </div>
    </section>
  );
};

export default MonumentsList;
