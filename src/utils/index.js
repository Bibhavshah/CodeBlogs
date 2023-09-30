export const cx = (...className) => className.filter(Boolean).join(' ');

export const sortBlogs = (blogs) => {
  return blogs.sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });
};
