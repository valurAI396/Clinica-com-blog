import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Shield, Sparkles, Clock, Loader2 } from 'lucide-react';
import { services, team, homeContent } from '../data';
import { contentfulClient } from '../lib/contentful';
import { BlogPost } from '../types';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'blogPost',
          order: ['-sys.createdAt'],
          limit: 3,
        });

        const formattedPosts: BlogPost[] = response.items.map((item: any) => ({
          id: item.fields.slug || item.sys.id,
          title: item.fields.title,
          excerpt: item.fields.excerpt,
          content: '',
          date: new Date(item.fields.date || item.sys.createdAt).toLocaleDateString('pt-PT', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          }),
          authorId: item.fields.author || 'equipa-clinica',
          category: item.fields.category,
          image: item.fields.featuredImage?.fields?.file?.url ? `https:${item.fields.featuredImage.fields.file.url}` : 'https://picsum.photos/800/600',
          readTime: item.fields.readTime || '5 min'
        }));

        setPosts(formattedPosts);
      } catch (error) {
        console.error('Error fetching posts for home:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col w-full">

      {/* Hero Section - Split Layout */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="space-y-8 fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-clarity-primary animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wide text-clarity-primary uppercase">Saúde Mental & Bem-estar</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-clarity-text font-medium">
              Há experiências que pedem <span className="italic text-clarity-primary">escuta</span>.
            </h1>

            <p className="text-lg text-clarity-muted leading-relaxed max-w-lg">
              Na Psicologia do 1º Andar, oferecemos um espaço de encontro, escuta e reflexão no coração de Viseu. A mudança começa quando aquilo que foi vivido pode finalmente ser compreendido - em relação, em palavras, em tempo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/contactos"
                className="px-8 py-4 bg-clarity-primary text-white rounded-full font-medium hover:bg-clarity-primaryLight transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
              >
                Agendar Sessão
              </Link>
              <Link
                to="/servicos"
                className="px-8 py-4 bg-white text-clarity-text border border-stone-200 rounded-full font-medium hover:bg-stone-50 transition-all text-center group"
              >
                Nossos Serviços <ArrowRight size={18} className="inline ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {homeContent.hero.avatars.map((avatarUrl, idx) => (
                  <div key={idx} className="w-10 h-10 rounded-full border-2 border-clarity-bg bg-stone-200 overflow-hidden">
                    <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-stone-600">
                <div className="flex items-center text-yellow-500 mb-0.5">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <span className="font-medium">Equipa de Excelência</span>
              </div>
            </div>
          </div>

          <div className="relative fade-in-up delay-200 hidden md:block h-full min-h-[500px]">
            <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-clarity-secondary rounded-[3rem] transform rotate-3 opacity-50"></div>
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src={homeContent.hero.image}
                alt="Ambiente Terapêutico"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-8">
                <p className="text-white/90 font-serif italic text-xl">"Um espaço onde se sente em casa."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Clean */}
      <section className="py-24 bg-white rounded-t-[3rem] md:rounded-t-[4rem] -mt-10 relative z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-clarity-text mb-6">Uma abordagem humana</h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Mais do que intervir sobre problemas, criamos espaço para compreender o que se vive com empatia e rigor científico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-clarity-bg rounded-[2rem] hover:bg-clarity-accent transition-colors duration-300">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-clarity-primary mb-6 shadow-sm">
                <Heart size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Lugar de Empatia</h3>
              <p className="text-stone-500">Cada história é sagrada. Ouvimos sem julgamento, criando um laço de confiança essencial.</p>
            </div>
            <div className="p-8 bg-clarity-bg rounded-[2rem] hover:bg-clarity-accent transition-colors duration-300">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-clarity-primary mb-6 shadow-sm">
                <Shield size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Espaço Seguro</h3>
              <p className="text-stone-500">A confidencialidade orienta a nossa prática. O espaço foi pensado para oferecer privacidade e conforto.</p>
            </div>
            <div className="p-8 bg-clarity-bg rounded-[2rem] hover:bg-clarity-accent transition-colors duration-300">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-clarity-primary mb-6 shadow-sm">
                <Sparkles size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Formação Contínua</h3>
              <p className="text-stone-500">A nossa equipa mantém-se em constante formação para lhe oferecer as melhores práticas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Scroller */}
      <section className="py-24 bg-clarity-primary text-white rounded-[3rem] mx-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-clarity-secondary font-medium tracking-widest uppercase text-sm">Áreas de Atuação</span>
              <h2 className="font-serif text-3xl md:text-5xl mt-4">Como podemos ajudar</h2>
            </div>
            <Link to="/servicos" className="text-white border-b border-white/30 pb-1 hover:border-white hover:text-clarity-secondary transition-colors">
              Ver todos os serviços
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <Link to="/servicos" key={service.id} className="group bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/20 transition-all duration-300">
                <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">{service.shortDescription}</p>
                <span className="inline-flex items-center text-sm font-medium text-clarity-secondary group-hover:text-white transition-colors">
                  Saber mais <ArrowRight size={16} className="ml-2" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-clarity-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-stone-800 mb-4">Quem somos</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Profissionais dedicados, unidos pela paixão de ajudar o outro.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Link to={`/equipa/${member.id}`} key={member.id} className="group">
                <div className="relative mb-4 overflow-hidden rounded-[2rem] aspect-[3/4] bg-stone-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <h3 className="font-serif text-lg font-medium text-stone-800">{member.name}</h3>
                <p className="text-sm text-clarity-primary">{member.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-clarity-primary font-medium tracking-widest uppercase text-sm">Blog</span>
              <h2 className="font-serif text-3xl md:text-5xl mt-4 text-stone-800">Últimas do 1º Andar</h2>
            </div>
            <Link to="/blog" className="text-stone-500 border-b border-stone-200 pb-1 hover:border-clarity-primary hover:text-clarity-primary transition-colors flex items-center">
              Ler todos os artigos <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="animate-spin text-clarity-primary mb-4" size={40} />
              <p className="text-stone-500 font-serif italic text-lg">A carregar artigos...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20 bg-clarity-bg rounded-[3rem] border border-dashed border-stone-200">
              <p className="text-stone-500 font-serif italic text-lg">Novos artigos em breve.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className="group cursor-pointer">
                  <div className="aspect-[16/10] rounded-[2rem] overflow-hidden bg-stone-100 mb-6 relative">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-clarity-primary uppercase tracking-wide shadow-sm">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-stone-400 text-xs mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-800 mb-2 group-hover:text-clarity-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-stone-500 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-clarity-secondary/30 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-8">Comece hoje a sua mudança.</h2>
            <Link
              to="/contactos"
              className="inline-block bg-clarity-primary text-white px-10 py-4 rounded-full font-bold hover:bg-clarity-primaryLight transition-transform hover:scale-105 shadow-xl"
            >
              Marcar Primeira Consulta
            </Link>
          </div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/40 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/40 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;