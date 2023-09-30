import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { slug } from 'github-slugger';

const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="group w-full relative inline-block text-light">
      <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10"></div>
      <Image
        src={blog.image.filePath.replace('../public', '')}
        alt={blog.title}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        width={blog.image.width}
        height={blog.image.height}
        className="w-full h-full rounded-xl object-cover object-center group-hover:scale-105 transition-all ease duration-300"
      />
      <div className="w-full flex flex-col items-start absolute bottom-0 p-10 z-20">
        <Link
          href={`/categories/${slug(blog.tags[0])}`}
          className="py-2 text-sm px-6 border-2 border-light rounded-full bg-dark capitalize font-semibold hover:scale-105 transition-all ease duration-300"
        >
          <span className="text-light">{blog.tags[0]} </span>
        </Link>
        <Link href={blog.url_path} className="mt-6">
          <h2 className="font-bold text-2xl capitalize">
            <span
              className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] dark:from-accentDark/50 dark:to-accentDark/50
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
