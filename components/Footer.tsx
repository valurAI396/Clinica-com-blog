import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { contactInfo } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 rounded-t-[3rem] -mt-10 relative z-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-clarity-primary">
               <div className="bg-clarity-primary text-white p-1 rounded-full">
                <Heart size={16} fill="currentColor" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-800">Psicologia do 1º Andar</h3>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              Um espaço de saúde mental em Viseu dedicado à escuta. 
              Cuidamos com empatia e profissionalismo.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:bg-clarity-primary hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:bg-clarity-primary hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:bg-clarity-primary hover:text-white transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-stone-800 mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-stone-500 hover:text-clarity-primary text-sm transition-colors">Início</Link></li>
              <li><Link to="/servicos" className="text-stone-500 hover:text-clarity-primary text-sm transition-colors">Serviços Clínicos</Link></li>
              <li><Link to="/equipa" className="text-stone-500 hover:text-clarity-primary text-sm transition-colors">Corpo Clínico</Link></li>
              <li><Link to="/blog" className="text-stone-500 hover:text-clarity-primary text-sm transition-colors">Blog</Link></li>
              <li><Link to="/contactos" className="text-stone-500 hover:text-clarity-primary text-sm transition-colors">Marcações</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-stone-800 mb-6">Visite-nos</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-stone-500 text-sm">
                  <MapPin size={18} className="shrink-0 text-clarity-primary mt-0.5" />
                  <span className="whitespace-pre-line">{contactInfo.address}</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-stone-500 text-sm">
                  <Phone size={18} className="shrink-0 text-clarity-primary mt-0.5" />
                  <div className="flex flex-col gap-1">
                    {contactInfo.phone.split(' / ').map((line, idx) => (
                      <span key={idx} className="block">{line}</span>
                    ))}
                  </div>
                </li>
                <li className="flex items-center gap-3 text-stone-500 text-sm">
                  <Mail size={18} className="shrink-0 text-clarity-primary" />
                  <span>{contactInfo.email}</span>
                </li>
                <li className="flex items-start gap-3 text-stone-500 text-sm mt-2">
                   <div className="bg-clarity-accent px-3 py-1 rounded-md text-clarity-primary text-xs font-medium">
                     {contactInfo.hours[0]}
                   </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 text-xs">
            &copy; {new Date().getFullYear()} Psicologia do 1º Andar. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-stone-400 hover:text-stone-600 text-xs">Política de Privacidade</Link>
            <Link to="#" className="text-stone-400 hover:text-stone-600 text-xs">Livro de Reclamações</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;