import React from 'react';
import { metricas } from '../data';

const Metrics = () => {
  return (
    <section className="py-12 border-t border-cardBorder/50 bg-background/50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metricas.map((metrica) => (
          <div key={metrica.id} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{metrica.valor}</div>
            <div className="text-muted text-sm md:text-base font-medium">{metrica.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Metrics;
