import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { team as allTeam } from '../data';
import { ChevronLeft, Clock, Calendar, Share2, Linkedin, Facebook, Loader2 } from 'lucide-react';
import { contentfulClient } from '../lib/contentful';
import { BlogPost as BlogPostType } from '../types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { useLanguage } from '../context/LanguageContext';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const team = allTeam[language];
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'blogPost',
          'fields.slug': id,
          limit: 1,
        });

        if (response.items.length > 0) {
          const item: any = response.items[0];
          setPost({
            id: item.fields.slug || item.sys.id,
            title: item.fields.title,
            excerpt: item.fields.excerpt,
            content: item.fields.content, // This is now a Rich Text object
            date: new Date(item.fields.date || item.sys.createdAt).toLocaleDateString(language === 'pt' ? 'pt-PT' : 'en-US', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            }),
            authorId: item.fields.author || 'equipa-clinica',
            category: item.fields.category,
            image: item.fields.featuredImage?.fields?.file?.url ? `https:${item.fields.featuredImage.fields.file.url}` : 'https://picsum.photos/800/600',
            readTime: item.fields.readTime || '5 min'
          });
        } else {
          navigate('/blog');
        }
      } catch (error) {
        console.error('Error fetching post from Contentful:', error);
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
    window.scrollTo(0, 0);
  }, [id, navigate, language]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-clarity-bg">
        <Loader2 className="animate-spin text-clarity-primary mb-4" size={40} />
        <p className="text-stone-500 font-serif italic text-lg">{t('home.blog.loading')}</p>
      </div>
    );
  }

  if (!post) return null;

  const author = team.find(m => m.id === post.authorId);

  // Contentful Rich Text Options
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: any) => <strong className="font-bold text-stone-900">{text}</strong>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_: any, children: any) => <p className="mb-6 leading-relaxed text-stone-600">{children}</p>,
      [BLOCKS.HEADING_1]: (_: any, children: any) => <h1 className="font-serif text-3xl md:text-4xl text-stone-800 mt-12 mb-6">{children}</h1>,
      [BLOCKS.HEADING_2]: (_: any, children: any) => <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mt-10 mb-5">{children}</h2>,
      [BLOCKS.HEADING_3]: (_: any, children: any) => <h3 className="font-serif text-xl md:text-2xl text-stone-800 mt-8 mb-4">{children}</h3>,
      [BLOCKS.UL_LIST]: (_: any, children: any) => <ul className="list-disc pl-6 mb-8 space-y-2 text-stone-600">{children}</ul>,
      [BLOCKS.OL_LIST]: (_: any, children: any) => <ol className="list-decimal pl-6 mb-8 space-y-2 text-stone-600">{children}</ol>,
    },
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-end pb-20">
          <div className="max-w-4xl mx-auto px-6 w-full text-white">
            <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <ChevronLeft size={18} />
              <span className="ml-1 text-sm font-medium">{t('blog.back')}</span>
            </Link>

            <div className="flex items-center gap-4 mb-4 text-sm font-medium">
              <span className="bg-clarity-primary px-3 py-1 rounded-lg text-white">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-white/90">
                <Clock size={16} /> {post.readTime}
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl font-medium leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-4">
              {author && (
                <div className="flex items-center gap-3">
                  <img src={author.image} alt={author.name} className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                  <div>
                    <p className="font-medium text-white">{author.name}</p>
                    <div className="flex items-center text-white/70 text-sm gap-2">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="prose prose-lg prose-stone prose-headings:font-serif prose-headings:text-stone-800 prose-img:rounded-3xl">
          {documentToReactComponents(post.content as any, options)}
        </div>

        {/* Share & Tags */}
        <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-stone-500 font-serif italic text-lg">
            {language === 'pt' ? 'Gostou deste artigo?' : 'Did you like this article?'}
          </p>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-100 text-stone-600 hover:bg-clarity-primary hover:text-white transition-all text-sm font-medium">
              <Share2 size={16} /> {language === 'pt' ? 'Partilhar' : 'Share'}
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-[#0077b5] hover:text-white transition-all">
              <Linkedin size={18} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-[#1877f2] hover:text-white transition-all">
              <Facebook size={18} />
            </button>
          </div>
        </div>

        {/* Author Box */}
        {author && (
          <div className="mt-16 bg-clarity-bg rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            <Link to={`/equipa/${author.id}`} className="shrink-0 group">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-2 mx-auto md:mx-0">
                <img src={author.image} alt={author.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            </Link>
            <div>
              <h4 className="font-serif text-xl font-bold text-stone-800 mb-2">
                {language === 'pt' ? 'Sobre o Autor' : 'About the Author'}
              </h4>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                {author.bio.slice(0, 150)}...
              </p>
              <Link to={`/equipa/${author.id}`} className="text-clarity-primary font-medium text-sm hover:underline">
                {language === 'pt' ? 'Ver perfil completo' : 'View full profile'}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Newsletter / CTA */}
      <div className="bg-clarity-primary py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl text-white mb-4">
            {language === 'pt' ? 'A sua saúde mental em primeiro lugar.' : 'Your mental health first.'}
          </h2>
          <p className="text-white/80 mb-8">
            {language === 'pt' ? 'Marque uma consulta de avaliação e comece o seu percurso.' : 'Book an assessment appointment and start your journey.'}
          </p>
          <Link
            to="/contactos"
            className="inline-block bg-white text-clarity-primary px-8 py-3 rounded-full font-bold hover:bg-stone-100 transition-colors shadow-lg"
          >
            {t('nav.button')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;