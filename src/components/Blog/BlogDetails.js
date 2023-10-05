import React from 'react';
import format from 'date-fns/format';
import Link from 'next/link';
import ViewsCounter from './ViewsCounter';
import { slug } from 'github-slugger';

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="w-[95%] px-10 py-2 mx-auto h-[4.25rem] bg-accent flex items-center justify-around rounded-lg mb-8 text-light text-xl font-medium">
      <time className="m-3">
        {format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}
      </time>
      <p className="m-3">
        <ViewsCounter slug={blogSlug} />
      </p>
      <p className="m-3">{blog.readingTime.text}</p>
      <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
        #{blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
