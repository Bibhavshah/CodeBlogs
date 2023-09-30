'use client';
import React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

const mdxComponents = {
  Image,
};

const RenderDetails = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);
  return (
    <div
      className="w-full font-in prose prose-lg max-w-max 
    prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6
     prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent"
    >
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderDetails;
