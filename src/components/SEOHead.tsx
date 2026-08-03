import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
}

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  ogImage
}) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper to set or create meta tag
    const setMetaTag = (nameOrProperty: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${nameOrProperty}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameOrProperty, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);

    if (ogImage) {
      setMetaTag('property', 'og:image', ogImage);
      setMetaTag('name', 'twitter:image', ogImage);
      setMetaTag('name', 'twitter:card', 'summary_large_image');
    }
  }, [title, description, ogImage]);

  return null;
};
