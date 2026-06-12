import React from 'react';
import { salesforceSkills } from '../data';

const Salesforce = () => {
  return (
    <section id="salesforce" className="py-20 border-t border-cardBorder/50">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Experiência <span className="text-gradient">Salesforce</span>
        </h2>
        <p className="text-muted text-base md:text-lg max-w-2xl">
          Especialista em automação e desenvolvimento na plataforma CRM líder do mercado, com foco em Apex e fluxos complexos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {salesforceSkills.map((skill) => (
          <div 
            key={skill.id} 
            className="bg-card border border-cardBorder p-6 rounded-2xl flex flex-col justify-between hover:border-secondary/50 transition-colors"
          >
            <h3 className="text-white font-semibold text-lg mb-4">{skill.nome}</h3>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Nível</span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-bold">
                {skill.nivel}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-8 bg-card border border-cardBorder rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
        <h3 className="text-xl font-bold text-white mb-4 relative z-10">Diferencial Estratégico</h3>
        <p className="text-muted leading-relaxed relative z-10">
          Minha experiência com Salesforce me permite não apenas desenvolver código, mas entender processos de negócios complexos, migrar automações legadas (Process Builder/Workflow) para Flows modernos e otimizar a eficiência operacional de grandes organizações.
        </p>
      </div>
    </section>
  );
};

export default Salesforce;
