import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/servicos' },
    { name: t('nav.team'), path: '/equipa' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.contact'), path: '/contactos' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 pt-4 md:pt-6">
      <nav className={`mx-auto max-w-6xl transition-all duration-500 ease-in-out ${scrolled || isOpen
          ? 'bg-clarity-surface/90 backdrop-blur-md shadow-lg border border-white/50 py-3 rounded-full'
          : 'bg-transparent py-4'
        }`}>
        <div className="px-6 md:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-clarity-primary text-white p-1.5 rounded-full transition-transform group-hover:scale-110">
                <Heart size={18} fill="currentColor" />
              </div>
              <span className={`font-serif text-lg font-medium tracking-tight ${scrolled ? 'text-clarity-text' : 'text-clarity-primary'} md:text-stone-800`}>
                Psicologia do 1º Andar
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 lg:px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${location.pathname === link.path
                      ? 'bg-clarity-accent text-clarity-primary'
                      : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                    }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Language Switcher */}
              <div className="flex items-center ml-2 mr-4 bg-stone-100/50 rounded-full p-1 border border-stone-200/50">
                <button
                  onClick={() => setLanguage('pt')}
                  className={`px-2 py-1 text-[10px] font-bold rounded-full transition-all ${language === 'pt' ? 'bg-clarity-primary text-white shadow-sm' : 'text-stone-400 hover:text-stone-600'
                    }`}
                >
                  PT
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 text-[10px] font-bold rounded-full transition-all ${language === 'en' ? 'bg-clarity-primary text-white shadow-sm' : 'text-stone-400 hover:text-stone-600'
                    }`}
                >
                  EN
                </button>
              </div>

              <div className="pl-0">
                <Link
                  to="/contactos"
                  className="bg-clarity-primary hover:bg-clarity-primaryLight text-white px-5 lg:px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  {t('nav.button')}
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button + Language */}
            <div className="md:hidden flex items-center gap-4">
              <div className="flex items-center bg-stone-100/50 rounded-full p-1 border border-stone-200/50">
                <button
                  onClick={() => setLanguage('pt')}
                  className={`px-2 py-1 text-[10px] font-bold rounded-full transition-all ${language === 'pt' ? 'bg-clarity-primary text-white shadow-sm' : 'text-stone-400 hover:text-stone-600'
                    }`}
                >
                  PT
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 text-[10px] font-bold rounded-full transition-all ${language === 'en' ? 'bg-clarity-primary text-white shadow-sm' : 'text-stone-400 hover:text-stone-600'
                    }`}
                >
                  EN
                </button>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-stone-600 hover:text-stone-900 focus:outline-none p-1"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-2 bg-white rounded-3xl shadow-xl border border-stone-100 p-4 fade-in overflow-hidden">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-2xl text-base font-medium transition-colors ${location.pathname === link.path
                      ? 'bg-clarity-accent text-clarity-primary'
                      : 'text-stone-600 hover:bg-stone-50'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  to="/contactos"
                  className="block w-full text-center bg-clarity-primary text-white px-4 py-3.5 rounded-2xl font-medium shadow-sm active:scale-95 transition-transform"
                >
                  {t('nav.button')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;