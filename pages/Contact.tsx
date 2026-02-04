import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { contactInfo as allContactInfo } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const { language, t } = useLanguage();
  const contactInfo = allContactInfo[language];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);

    // Add Web3Forms Access Key
    // USER: Replace this key with your own from https://web3forms.com/
    formData.append("access_key", "6ed4e6a7-df19-40e5-8b8e-dd42f8c49e7a");
    formData.append("subject", `Novo Pedido de Consulta: ${formData.get('name')}`);
    formData.append("from_name", "Psicologia 1º Andar - Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
      } else {
        console.error("Error", data);
        alert(language === 'pt' ? "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente." : "An error occurred while sending the message. Please try again.");
        setFormStatus('idle');
      }
    } catch (err) {
      console.error("Error", err);
      alert(language === 'pt' ? "Erro de conexão. Verifique a sua internet." : "Connection error. Check your internet.");
      setFormStatus('idle');
    }
  };

  // Google Maps URL encoded address
  const mapAddress = encodeURIComponent(contactInfo.address);
  const mapSrc = `https://maps.google.com/maps?q=${mapAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="pt-32 pb-20 min-h-screen bg-clarity-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Centered & Full Width for Alignment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-clarity-primary font-medium tracking-widest uppercase text-sm mb-4 block">
            {t('nav.contact')}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-stone-800 mb-6">
            {language === 'pt' ? 'Estamos à sua espera.' : "We're waiting for you."}
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            {language === 'pt' ? 'Um espaço pensado para acolher, escutar e estar.' : 'A space designed to welcome, listen, and be.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Info Side - Wider (7 cols) for better phone number display */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Address Card */}
            <div className="bg-white p-8 rounded-[2rem] border border-stone-100 flex items-start gap-5 hover:shadow-lg transition-shadow duration-300 group">
              <div className="bg-clarity-accent p-3 rounded-xl text-clarity-primary shrink-0 group-hover:bg-clarity-primary group-hover:text-white transition-colors">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-stone-800 mb-2">{t('contact.info.address')}</h3>
                <p className="text-stone-600 whitespace-pre-line leading-relaxed">{contactInfo.address}</p>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-stone-400 text-sm italic">
                    {language === 'pt' ? 'No coração de Viseu.' : 'In the heart of Viseu.'}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-clarity-primary text-sm font-medium hover:underline ml-2"
                  >
                    {language === 'pt' ? 'Abrir no Maps' : 'Open in Maps'} →
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card - Full Width */}
            <div className="bg-white p-8 rounded-[2rem] border border-stone-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-5 mb-6">
                <div className="bg-clarity-accent p-3 rounded-xl text-clarity-primary shrink-0">
                  <Phone size={24} />
                </div>
                <h3 className="font-serif text-xl text-stone-800">{language === 'pt' ? 'Telefones' : 'Phones'}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.phone.split(' / ').map((line, idx) => {
                  const [name, number] = line.includes(':') ? line.split(':') : [line, ''];
                  const cleanNumber = number ? number.trim() : '';

                  return (
                    <a
                      key={idx}
                      href={`tel:${cleanNumber}`}
                      className="flex flex-col p-4 rounded-2xl bg-stone-50 hover:bg-clarity-accent/30 transition-all duration-300 group cursor-pointer border border-transparent hover:border-clarity-accent"
                    >
                      <span className="font-medium text-stone-800 text-sm mb-1 group-hover:text-clarity-primary transition-colors">{name}</span>
                      <span className="text-stone-600 font-mono text-sm group-hover:text-stone-800 transition-colors">{cleanNumber}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Grid for Email & Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[2rem] border border-stone-100 hover:shadow-lg transition-shadow duration-300 flex flex-col group">
                <div className="bg-clarity-accent p-3 rounded-xl text-clarity-primary w-fit mb-4 group-hover:bg-clarity-primary group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <h3 className="font-medium text-stone-800 mb-2">Email</h3>
                <p className="text-stone-600 text-sm break-all">{contactInfo.email}</p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] border border-stone-100 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="bg-clarity-accent p-3 rounded-xl text-clarity-primary w-fit mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="font-medium text-stone-800 mb-2">{t('contact.info.hours')}</h3>
                {contactInfo.hours.map((hour, idx) => (
                  <p key={idx} className="text-stone-600 text-sm">{hour}</p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Side - Compact (5 cols) aligned to top */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 bg-white p-6 md:p-8 rounded-[2.5rem] shadow-xl border border-stone-100 sticky top-32"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mb-6">{t('nav.button')}</h2>

            {formStatus === 'success' ? (
              <div className="text-center py-12 bg-clarity-accent/30 rounded-[2rem]">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-clarity-primary shadow-sm">
                  <Send size={24} />
                </div>
                <h3 className="text-xl font-serif text-stone-800 mb-2">
                  {language === 'pt' ? 'Mensagem Enviada' : 'Message Sent'}
                </h3>
                <p className="text-stone-600 text-sm px-4 mb-6">
                  {language === 'pt' ? 'Entraremos em contacto brevemente.' : 'We will get in touch shortly.'}
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="px-5 py-2 rounded-full border border-clarity-primary text-clarity-primary hover:bg-clarity-primary hover:text-white transition-colors text-xs font-medium"
                >
                  {language === 'pt' ? 'Enviar nova mensagem' : 'Send new message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-stone-700 ml-1 uppercase tracking-wide">{t('contact.form.name')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-clarity-primary focus:ring-1 focus:ring-clarity-primary outline-none transition-all bg-stone-50 focus:bg-white text-sm"
                      placeholder={language === 'pt' ? "Nome completo" : "Full name"}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-stone-700 ml-1 uppercase tracking-wide">{t('contact.form.phone')}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-clarity-primary focus:ring-1 focus:ring-clarity-primary outline-none transition-all bg-stone-50 focus:bg-white text-sm"
                      placeholder="910 000 000"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-stone-700 ml-1 uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-clarity-primary focus:ring-1 focus:ring-clarity-primary outline-none transition-all bg-stone-50 focus:bg-white text-sm"
                    placeholder="exemplo@email.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="service" className="text-xs font-bold text-stone-700 ml-1 uppercase tracking-wide">{language === 'pt' ? 'Serviço' : 'Service'}</label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-clarity-primary focus:ring-1 focus:ring-clarity-primary outline-none transition-all bg-stone-50 focus:bg-white appearance-none text-sm"
                    >
                      <option value="">{language === 'pt' ? 'Selecione o motivo...' : 'Select the reason...'}</option>
                      <option value="individual">{language === 'pt' ? 'Terapia Individual' : 'Individual Therapy'}</option>
                      <option value="casal">{language === 'pt' ? 'Terapia de Casal' : 'Couples Therapy'}</option>
                      <option value="infantil">{language === 'pt' ? 'Terapia Infantojuvenil' : 'Child/Adolescent Therapy'}</option>
                      <option value="musicoterapia">{language === 'pt' ? 'Musicoterapia' : 'Music Therapy'}</option>
                      <option value="avaliacao">{language === 'pt' ? 'Avaliação Psicológica' : 'Psychological Assessment'}</option>
                      <option value="outro">{language === 'pt' ? 'Outro / Dúvida' : 'Other / Question'}</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                      <Clock size={16} />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-stone-700 ml-1 uppercase tracking-wide">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-clarity-primary focus:ring-1 focus:ring-clarity-primary outline-none transition-all bg-stone-50 focus:bg-white resize-none text-sm"
                    placeholder={language === 'pt' ? "Como podemos ajudar?" : "How can we help?"}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-3 bg-clarity-primary text-white font-bold rounded-xl hover:bg-clarity-primaryLight transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-2 text-sm"
                >
                  {formStatus === 'submitting' ? (language === 'pt' ? 'A enviar...' : 'Sending...') : (language === 'pt' ? 'Enviar Pedido' : 'Send Request')}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 w-full h-[500px] bg-white rounded-[3rem] overflow-hidden relative shadow-2xl border-8 border-white group"
        >
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-in-out"
          ></iframe>

          {/* Overlay info */}
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl max-w-xs border border-white hidden md:block group-hover:translate-y-[-10px] transition-transform duration-500">
            <h4 className="font-serif text-xl text-stone-800 mb-1">
              {language === 'pt' ? 'Estamos aqui' : 'We are here'}.
            </h4>
            <p className="text-stone-600 text-sm mb-4 leading-relaxed">
              {language === 'pt' ? 'Edificio Capitólio, 1º Andar.' : 'Capitol Building, 1st Floor.'}<br />
              {language === 'pt' ? 'Visite-nos em Viseu.' : 'Visit us in Viseu.'}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-clarity-primary text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-clarity-primaryLight transition-colors"
            >
              {language === 'pt' ? 'Obter Direções' : 'Get Directions'}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;