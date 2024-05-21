export * from './component';
export * from './number';

export const getHash = (path: any): string => {
  const hashIndex = path.indexOf('#');
  const hash = hashIndex !== -1 ? path.substring(hashIndex) : '#';
  return hash;
};

export const buildTitle = (path: any) => {
  const title = path.substr(1).replaceAll('-', ' ');
  return title;
};

export const checkLocale = () => {
  return {
    isEng: window.navigator.language.startsWith('en'),
    isEs: window.navigator.language.startsWith('es'),
  };
};

export const parseBlogData = (blog: any) => {
  if (!blog) {
    return {};
  }
  return {
    id: blog.id,
    slug: blog.slug,
    img: blog.featured_media_src_url,
    title: blog.title.rendered,
    description: blog.excerpt.rendered,
    author: 'Admin',
    date: blog.date,
    link: blog.link,
    content: blog.content.rendered,
  } as Blog;
};
