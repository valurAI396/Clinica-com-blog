import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { team } from '../data';
import { ChevronLeft, Award, BookOpen, Mail, GraduationCap, Globe, Phone } from 'lucide-react';

const TeamMember: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const member = team.find(m => m.id === id);

  useEffect(() => {
    if (!member) {
      navigate('/equipa');
    }
    window.scrollTo(0, 0);
  }, [member, navigate]);

  if (!member) return null;

  return (
    <div className="pt-32 pb-20 bg-clarity-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/equipa" className="inline-flex items-center text-stone-500 hover:text-clarity-primary mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-stone-100">
          <ChevronLeft size={18} />
          <span className="ml-1 text-sm font-medium">Voltar à equipa</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar / Photo */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-6">
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/5] bg-stone-200">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100 space-y-6">
                <div>
                  <h3 className="font-medium text-stone-800 flex items-center gap-2 mb-3">
                    <Award size={18} className="text-clarity-primary" />
                    Especializações
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {member.specializations.map((spec, i) => (
                      <span key={i} className="bg-clarity-accent px-3 py-1.5 rounded-lg text-sm text-stone-700">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Contact Info if available */}
                {(member.email || member.phone || member.website) && (
                  <div className="border-t border-stone-100 pt-6">
                    <h3 className="font-medium text-stone-800 flex items-center gap-2 mb-3">
                      <Mail size={18} className="text-clarity-primary" />
                      Contactos Diretos
                    </h3>
                    <div className="space-y-4 text-sm text-stone-600">
                      {member.email && (
                        <div className="flex flex-col">
                          <span className="text-xs text-stone-400 uppercase tracking-wider mb-0.5">Email</span>
                          <a href={`mailto:${member.email}`} className="font-medium hover:text-clarity-primary break-all">{member.email}</a>
                        </div>
                      )}
                      {member.phone && (
                        <div className="flex flex-col">
                           <span className="text-xs text-stone-400 uppercase tracking-wider mb-1">Telefone</span>
                           <div className="flex flex-wrap items-center gap-3">
                              <a href={`tel:${member.phone}`} className="font-medium hover:text-clarity-primary whitespace-nowrap">{member.phone}</a>
                              <a 
                                href={`tel:${member.phone}`}
                                className="inline-flex items-center gap-1.5 bg-clarity-primary text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-clarity-primaryLight transition-colors shadow-sm"
                              >
                                <Phone size={12} fill="currentColor" />
                                Ligar Agora
                              </a>
                           </div>
                        </div>
                      )}
                      {member.website && (
                        <div className="flex flex-col">
                           <span className="text-xs text-stone-400 uppercase tracking-wider mb-0.5">Website / Projeto</span>
                           <a 
                            href={member.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-medium hover:text-clarity-primary flex items-center gap-1"
                          >
                             pra-semana.pt <Globe size={14} />
                           </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 fade-in-up delay-100">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-stone-100 mb-8">
              <span className="inline-block px-3 py-1 bg-clarity-accent text-clarity-primary rounded-full text-xs font-bold tracking-wide uppercase mb-4">{member.role}</span>
              <h1 className="font-serif text-4xl md:text-5xl text-stone-800 mb-8">{member.name}</h1>
              <div className="prose prose-stone prose-lg text-stone-600 leading-relaxed whitespace-pre-wrap mb-10">
                {member.bio}
              </div>

              <div className="grid gap-8">
                <div className="p-6 bg-clarity-bg rounded-3xl">
                   <h3 className="font-serif text-xl text-stone-800 mb-3 flex items-center gap-2">
                    <BookOpen size={20} className="text-clarity-primary" />
                    Abordagem Terapêutica
                  </h3>
                  <p className="text-stone-700">{member.approach}</p>
                </div>

                <div className="p-6 bg-clarity-bg rounded-3xl">
                   <h3 className="font-serif text-xl text-stone-800 mb-3 flex items-center gap-2">
                    <GraduationCap size={20} className="text-clarity-primary" />
                    Percurso Académico
                  </h3>
                   <ul className="space-y-2">
                    {member.academic.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-stone-600 text-sm md:text-base">
                        <span className="mt-2 w-1.5 h-1.5 bg-clarity-primary rounded-full shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-clarity-primary text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <h4 className="text-2xl font-serif mb-2">Agendar Consulta</h4>
                <p className="text-white/80 text-sm">Verifique a disponibilidade de {member.name.split(' ')[0]}.</p>
              </div>
              <Link 
                to="/contactos" 
                className="bg-white text-clarity-primary px-8 py-4 rounded-full font-bold hover:bg-stone-100 transition-colors whitespace-nowrap shadow-sm"
              >
                Solicitar Marcação
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;