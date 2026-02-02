import React from 'react';
import { Link } from 'react-router-dom';
import { team } from '../data';
import { ArrowRight } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen bg-clarity-bg pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 fade-in-up">
          <span className="text-clarity-primary font-medium tracking-widest uppercase text-sm mb-4 block">Corpo Clínico</span>
          <h1 className="font-serif text-4xl md:text-6xl text-stone-800 mb-6">A Nossa Equipa</h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            Conheça os profissionais que fazem do "1º Andar" um lugar de acolhimento e escuta. 
            Uma equipa multidisciplinar unida pela ética e dedicação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <Link to={`/equipa/${member.id}`} key={member.id} className="group flex flex-col h-full">
              <div className="bg-white rounded-[2.5rem] p-4 pb-8 transition-all duration-500 hover:shadow-xl border border-stone-100 h-full flex flex-col">
                <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-100 mb-6 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                    <ArrowRight size={20} className="text-clarity-primary" />
                  </div>
                </div>
                
                <div className="px-2 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl font-medium text-stone-800 mb-1">{member.name}</h3>
                  <p className="text-clarity-primary text-sm font-medium mb-4">{member.role}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {member.specializations.slice(0, 3).map((spec, idx) => (
                      <span key={idx} className="text-[10px] uppercase tracking-wide bg-clarity-accent text-stone-600 px-2 py-1 rounded-md">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;