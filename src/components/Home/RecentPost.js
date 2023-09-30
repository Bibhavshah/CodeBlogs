import { sortBlogs } from '@/src/utils';
import React from 'react';
import Link from 'next/link';
import BlogLayoutThree from '../Blog/BlogLayoutThree';

const RecentPost = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="mt-32 w-full px-32 flex flex-col items-center justify-center">
      <div className=" w-full flex items-center justify-between">
        <h1 className=" font-bold inline-block text-4xl capitalize">
          Recent Posts
        </h1>
        <Link
          href={`/blog`}
          className="inline-block text-accent underline underline-offset-2 font-medium text-lg w-max"
        >
          View all
        </Link>
      </div>

      <div className="grid grid-cols-3 grid-rows-3 gap-16 mt-16">
        {sortedBlogs.slice(5, 11).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />{' '}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPost;
