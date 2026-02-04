import React from 'react';
import { Link } from 'react-router-dom';
import { services as allServices } from '../data';
import { User, Users, Baby, ClipboardList, Brain, Network, ArrowRight, Disc3 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Icon mapping helper
const IconMap: Record<string, React.FC<any>> = {
  User, Users, Baby, ClipboardList, Brain, Network, Disc3
};

const Services: React.FC = () => {
  const { language, t } = useLanguage();
  const services = allServices[language];

  return (
    <div className="pt-32 min-h-screen bg-clarity-bg pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 fade-in-up">
          <span className="text-clarity-primary font-medium tracking-widest uppercase text-sm mb-4 block">
            {t('home.services.badge')}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-clarity-text mb-6">
            {t('services.title')}
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = IconMap[service.iconName] || User;

            return (
              <div
                key={service.id}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] hover:shadow-xl transition-all duration-300 border border-stone-100 group flex flex-col"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 bg-clarity-accent rounded-2xl text-clarity-primary group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-bold text-stone-300">0{index + 1}</span>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl text-clarity-text mb-4">{service.title}</h2>
                <p className="text-stone-600 leading-relaxed mb-6 text-base flex-grow">
                  {service.fullDescription}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
                      {t('services.recommended')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.recommendedFor.map((rec, i) => (
                        <span key={i} className="px-3 py-1.5 bg-stone-50 text-stone-600 rounded-lg text-xs font-medium border border-stone-100">
                          {rec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100">
                    <Link
                      to="/contactos"
                      className="inline-flex items-center text-clarity-primary font-medium hover:text-clarity-primaryLight transition-colors"
                    >
                      {t('home.hero.cta.primary')} <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-clarity-primary text-white rounded-[2rem] p-10 md:p-16 max-w-4xl mx-auto relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-serif text-3xl mb-4">
                {language === 'pt' ? 'Tem dúvidas sobre qual a melhor terapia?' : 'Have questions about which therapy is best?'}
              </h3>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                {language === 'pt'
                  ? 'Entre em contacto. Encaminharemos o seu caso para o serviço mais adequado.'
                  : 'Get in touch. We will refer your case to the most appropriate service.'}
              </p>
              <Link
                to="/contactos"
                className="inline-block bg-white text-clarity-primary px-8 py-3 rounded-full font-bold hover:bg-stone-100 transition-colors"
              >
                {t('footer.contact')}
              </Link>
            </div>
            {/* Abstract circle decoration */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;