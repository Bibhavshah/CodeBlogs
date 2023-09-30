'use client';
import { sortBlogs } from '@/src/utils';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { slug } from 'github-slugger';

const Hero = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const heroBlog = sortedBlogs[0];
  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh]">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0"></div>
        <Image
          src={heroBlog.image.filePath.replace('../public', '')}
          alt={heroBlog.title}
          placeholder="blur"
          blurDataURL={heroBlog.image.blurhashDataUrl}
          fill
          className="w-full h-full object-center object-cover rounded-3xl -z-10"
        />

        <div className="flex flex-col w-3/4 p-16 items-start justify-center z-0 text-light">
          <Link
            href={`/categories/${slug(heroBlog.tags[0])}`}
            className="py-3 px-10 border-2 border-light rounded-full bg-dark capitalize font-semibold hover:scale-125 transition-all ease duration-200"
          >
            {heroBlog.tags[0]}{' '}
          </Link>
          <Link href={`${heroBlog.url_path}`} className="mt-6">
            <h1 className="font-bold text-4xl capitalize">
              <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_4px] hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                {heroBlog.title}
              </span>
            </h1>
          </Link>
          <p className="mt-4 font-in text-lg">{heroBlog.description}</p>
        </div>
      </article>
    </div>
  );
};

export default Hero;
