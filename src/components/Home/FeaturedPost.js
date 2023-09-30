import { sortBlogs } from '@/src/utils';
import React from 'react';
import BlogLayoutOne from '../Blog/BlogLayoutOne';
import BlogLayoutTwo from '../Blog/BlogLayoutTwo';

const FeaturedPost = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="mt-32 w-full px-32 flex flex-col items-center justify-center">
      <h1 className="w-full font-bold inline-block text-4xl capitalize">
        Featured posts
      </h1>
      <div className="flex items-center justify-center mt-16 gap-4">
        <div className="w-1/2">
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </div>
        <div className="w-1/2 flex flex-col gap-4 items-center justify-center">
          <BlogLayoutTwo blog={sortedBlogs[2]} />
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
