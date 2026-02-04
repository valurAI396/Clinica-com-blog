import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    pt: {
        'nav.home': 'Início',
        'nav.services': 'Serviços',
        'nav.team': 'Equipa',
        'nav.blog': 'Blog',
        'nav.contact': 'Contactos',
        'nav.button': 'Marcar Consulta',
        'footer.description': 'Um espaço dedicado ao seu bem-estar emocional e crescimento pessoal.',
        'footer.quickLinks': 'Links Rápidos',
        'footer.contact': 'Contactos',
        'footer.followUs': 'Siga-nos',
        'footer.rights': 'Todos os direitos reservados.',
        'contact.title': 'Entre em Contacto',
        'contact.subtitle': 'Estamos aqui para ajudar. Pode contactar-nos através do formulário ou dos nossos contactos diretos.',
        'contact.form.name': 'Nome',
        'contact.form.email': 'Email',
        'contact.form.phone': 'Telefone',
        'contact.form.subject': 'Assunto',
        'contact.form.message': 'Mensagem',
        'contact.form.send': 'Enviar Mensagem',
        'contact.info.address': 'Morada',
        'contact.info.hours': 'Horário',
        'home.hero.badge': 'Saúde Mental & Bem-estar',
        'home.hero.title': 'Há experiências que pedem <span class="italic text-clarity-primary">escuta</span>.',
        'home.hero.description': 'Na Psicologia do 1º Andar, oferecemos um espaço de encontro, escuta e reflexão no coração de Viseu. A mudança começa quando aquilo que foi vivido pode finalmente ser compreendido - em relação, em palavras, em tempo.',
        'home.hero.cta.primary': 'Agendar Sessão',
        'home.hero.cta.secondary': 'Nossos Serviços',
        'home.hero.teamBadge': 'Equipa de Excelência',
        'home.hero.quote': 'Um espaço onde se sente em casa.',
        'home.intro.title': 'Uma abordagem humana',
        'home.intro.description': 'Mais do que intervir sobre problemas, criamos espaço para compreender o que se vive com empatia e rigor científico.',
        'home.intro.card1.title': 'Lugar de Empatia',
        'home.intro.card1.desc': 'Cada história é sagrada. Ouvimos sem julgamento, criando um laço de confiança essencial.',
        'home.intro.card2.title': 'Espaço Seguro',
        'home.intro.card2.desc': 'A confidencialidade orienta a nossa prática. O espaço foi pensado para oferecer privacidade e conforto.',
        'home.intro.card3.title': 'Formação Contínua',
        'home.intro.card3.desc': 'A nossa equipa mantém-se em constante formação para lhe oferecer as melhores práticas.',
        'home.services.badge': 'Áreas de Atuação',
        'home.services.title': 'Como podemos ajudar',
        'home.services.all': 'Ver todos os serviços',
        'home.team.title': 'Quem somos',
        'home.team.description': 'Profissionais dedicados, unidos pela paixão de ajudar o outro.',
        'home.blog.badge': 'Blog',
        'home.blog.title': 'Últimas do 1º Andar',
        'home.blog.all': 'Ler todos os artigos',
        'home.blog.loading': 'A carregar artigos...',
        'home.blog.empty': 'Novos artigos em breve.',
        'home.cta.title': 'Comece hoje a sua mudança.',
        'home.cta.button': 'Marcar Primeira Consulta',
        'services.title': 'Nossos Serviços',
        'services.subtitle': 'Oferecemos diversas abordagens terapêuticas adaptadas às suas necessidades específicas.',
        'services.recommended': 'Recomendado para:',
        'services.benefits': 'Principais Benefícios',
        'team.title': 'Nossa Equipa',
        'team.subtitle': 'Conheça os profissionais que o acompanharão no seu percurso.',
        'team.specializations': 'Especializações',
        'team.approach': 'Abordagem',
        'team.academic': 'Percurso Académico',
        'team.contact': 'Contactar diretamente',
        'blog.title': 'Blog & Reflexões',
        'blog.subtitle': 'Textos e ideias sobre saúde mental, relações e bem-estar.',
        'blog.readMore': 'Ler mais',
        'blog.author': 'Por',
        'blog.back': 'Voltar ao blog'
    },
    en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.team': 'Team',
        'nav.blog': 'Blog',
        'nav.contact': 'Contacts',
        'nav.button': 'Book Appointment',
        'footer.description': 'A space dedicated to your emotional well-being and personal growth.',
        'footer.quickLinks': 'Quick Links',
        'footer.contact': 'Contacts',
        'footer.followUs': 'Follow Us',
        'footer.rights': 'All rights reserved.',
        'contact.title': 'Get in Touch',
        'contact.subtitle': 'We are here to help. You can contact us through the form or our direct contacts.',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.phone': 'Phone',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Message',
        'contact.form.send': 'Send Message',
        'contact.info.address': 'Address',
        'contact.info.hours': 'Hours',
        'home.hero.badge': 'Mental Health & Well-being',
        'home.hero.title': 'Some experiences ask for <span class="italic text-clarity-primary">listening</span>.',
        'home.hero.description': 'At Psicologia do 1º Andar, we offer a space for meeting, listening, and reflection in the heart of Viseu. Change begins when what was experienced can finally be understood - in connection, in words, in time.',
        'home.hero.cta.primary': 'Schedule Session',
        'home.hero.cta.secondary': 'Our Services',
        'home.hero.teamBadge': 'Team of Excellence',
        'home.hero.quote': 'A space where you feel at home.',
        'home.intro.title': 'A human approach',
        'home.intro.description': 'More than intervening in problems, we create space to understand experiences with empathy and scientific rigor.',
        'home.intro.card1.title': 'Place of Empathy',
        'home.intro.card1.desc': 'Every story is sacred. We listen without judgment, creating an essential bond of trust.',
        'home.intro.card2.title': 'Safe Space',
        'home.intro.card2.desc': 'Confidentiality guides our practice. The space was designed to offer privacy and comfort.',
        'home.intro.card3.title': 'Continuous Training',
        'home.intro.card3.desc': 'Our team is constantly training to offer you the best practices.',
        'home.services.badge': 'Areas of Expertise',
        'home.services.title': 'How we can help',
        'home.services.all': 'See all services',
        'home.team.title': 'Who we are',
        'home.team.description': 'Dedicated professionals, united by the passion to help others.',
        'home.blog.badge': 'Blog',
        'home.blog.title': 'Latest from 1º Andar',
        'home.blog.all': 'Read all articles',
        'home.blog.loading': 'Loading articles...',
        'home.blog.empty': 'New articles coming soon.',
        'home.cta.title': 'Start your change today.',
        'home.cta.button': 'Book First Appointment',
        'services.title': 'Our Services',
        'services.subtitle': 'We offer various therapeutic approaches adapted to your specific needs.',
        'services.recommended': 'Recommended for:',
        'services.benefits': 'Main Benefits',
        'team.title': 'Our Team',
        'team.subtitle': 'Meet the professionals who will accompany you on your journey.',
        'team.specializations': 'Specializations',
        'team.approach': 'Approach',
        'team.academic': 'Academic Background',
        'team.contact': 'Contact directly',
        'blog.title': 'Blog & Reflections',
        'blog.subtitle': 'Texts and ideas about mental health, relationships, and well-being.',
        'blog.readMore': 'Read more',
        'blog.author': 'By',
        'blog.back': 'Back to blog'
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        const saved = localStorage.getItem('language');
        return (saved as Language) || 'pt';
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations['pt']] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
