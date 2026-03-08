import { Post } from '@/lib/articles';

export const createPostJsonLd = (post: Post) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.meta.title,
    url: `https://saurabhcoded.github.io/posts/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: [
      {
        '@type': 'Person',
        name: 'Saurabh Sharma',
        url: 'https://saurabhcoded.github.io',
      },
    ],
  };
};
