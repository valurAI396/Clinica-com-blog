import { BlogPost } from '../types';

// TODO: REPLACE THIS WITH YOUR WORDPRESS URL
// Example: 'https://techcrunch.com/wp-json';
const WP_API_URL = 'https://demo.wp-api.org/wp-json'; 

export const getPosts = async (limit: number = 10): Promise<BlogPost[]> => {
  try {
    // We fetch with _embed to get the featured image and author details in one request
    const response = await fetch(`${WP_API_URL}/wp/v2/posts?_embed&per_page=${limit}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data = await response.json();

    return data.map((post: any) => transformWordPressPost(post));
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return [];
  }
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const response = await fetch(`${WP_API_URL}/wp/v2/posts?slug=${slug}&_embed`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }

    const data = await response.json();

    if (data.length === 0) return null;

    return transformWordPressPost(data[0]);
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    return null;
  }
};

// Helper to convert WP JSON to our Clean Architecture
const transformWordPressPost = (wpPost: any): BlogPost => {
  // Extract Featured Image
  let imageUrl = 'https://picsum.photos/800/600'; // Fallback
  if (wpPost._embedded && wpPost._embedded['wp:featuredmedia'] && wpPost._embedded['wp:featuredmedia'][0]) {
    imageUrl = wpPost._embedded['wp:featuredmedia'][0].source_url;
  }

  // Extract Author
  let authorName = 'Equipa Clínica';
  let authorImage = 'https://picsum.photos/100/100';
  if (wpPost._embedded && wpPost._embedded['author'] && wpPost._embedded['author'][0]) {
    authorName = wpPost._embedded['author'][0].name;
    if (wpPost._embedded['author'][0].avatar_urls) {
        authorImage = wpPost._embedded['author'][0].avatar_urls['96'];
    }
  }

  // Extract Category
  let category = 'Artigo';
  if (wpPost._embedded && wpPost._embedded['wp:term'] && wpPost._embedded['wp:term'][0] && wpPost._embedded['wp:term'][0].length > 0) {
    category = wpPost._embedded['wp:term'][0][0].name;
  }

  // Calculate Read Time (Avg 200 words per minute)
  const wordCount = wpPost.content.rendered.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200) + ' min';

  // Format Date
  const date = new Date(wpPost.date).toLocaleDateString('pt-PT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return {
    id: wpPost.slug, // We use slug as ID for routing
    title: wpPost.title.rendered,
    excerpt: wpPost.excerpt.rendered.replace(/<[^>]*>?/gm, '').slice(0, 150) + '...', // Strip HTML from excerpt
    content: wpPost.content.rendered,
    date: date,
    authorId: String(wpPost.author || '0'),
    author: {
        name: authorName,
        image: authorImage
    },
    category: category,
    image: imageUrl,
    readTime: readTime
  };
};