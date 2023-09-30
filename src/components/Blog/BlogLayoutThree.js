import React from 'react';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

const BlogLayoutThree = ({ blog }) => {
  const date = blog.publishedAt.split('T')[0];
  return (
    <div className="group flex flex-col items-center text-dark ">
      <Link
        href={`${blog.url}`}
        className="w-full h-full rounded-xl overflow-hidden"
      >
        <Image
          src={blog.image.filePath.replace('../public', '')}
          alt={blog.title}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          width={150}
          height={150}
          className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease delay-300"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-center mt-4 gap-2">
        <h2 className="inline-block w-full uppercase text-accent dark:text-accentDark font-semibold text-sm">
          {blog.tags[0]}
        </h2>
        <Link href={`${blog.url_path}`}>
          <h2 className="font-bold text-xl capitalize">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_4px] group-hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h2>
        </Link>
        <span className="capitalize text-dark/50 font-semibold text-base">
          {format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
