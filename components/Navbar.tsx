import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Equipa', path: '/equipa' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contactos', path: '/contactos' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 pt-4 md:pt-6">
      <nav className={`mx-auto max-w-5xl transition-all duration-500 ease-in-out ${
        scrolled || isOpen
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
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'bg-clarity-accent text-clarity-primary' 
                      : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pl-2">
                <Link
                  to="/contactos"
                  className="bg-clarity-primary hover:bg-clarity-primaryLight text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Marcar Consulta
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
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
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                    location.pathname === link.path 
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
                  Marcar Consulta
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