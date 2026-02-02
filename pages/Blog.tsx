import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { team } from '../data';
import { Clock, ArrowRight, Loader2 } from 'lucide-react';
import { contentfulClient } from '../lib/contentful';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'blogPost',
          order: ['-sys.createdAt'],
        });

        const formattedPosts: BlogPost[] = response.items.map((item: any) => ({
          id: item.fields.slug || item.sys.id,
          title: item.fields.title,
          excerpt: item.fields.excerpt,
          content: '', // Not needed for the grid view
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
        console.error('Error fetching posts from Contentful:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="pt-32 min-h-screen bg-clarity-bg pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <span className="text-clarity-primary font-medium tracking-widest uppercase text-sm mb-4 block">Journal</span>
          <h1 className="font-serif text-4xl md:text-6xl text-stone-800 mb-6">Reflexões & Artigos</h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            Um espaço de partilha sobre psicologia, bem-estar e saúde mental.
            Informação curada pela nossa equipa clínica.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="animate-spin text-clarity-primary mb-4" size={40} />
            <p className="text-stone-500 font-serif italic text-lg text-center">A carregar artigos...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-stone-200">
            <p className="text-stone-500 font-serif italic text-lg">Ainda não foram publicados artigos.</p>
          </div>
        ) : (
          /* Blog Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const author = team.find(m => m.id === post.authorId);

              return (
                <Link
                  to={`/blog/${post.id}`}
                  key={post.id}
                  className="group bg-white rounded-[2.5rem] overflow-hidden border border-stone-100 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden bg-stone-100 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-clarity-primary uppercase tracking-wide">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-stone-400 text-xs mb-3">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-stone-800 mb-3 group-hover:text-clarity-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {author ? (
                          <>
                            <img src={author.image} alt={author.name} className="w-8 h-8 rounded-full object-cover" />
                            <span className="text-xs font-medium text-stone-600">{author.name}</span>
                          </>
                        ) : (
                          <span className="text-xs font-medium text-stone-600">Equipa Clínica</span>
                        )}
                      </div>
                      <span className="text-clarity-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300">
                        <ArrowRight size={20} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;