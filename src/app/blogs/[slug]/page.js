import { allBlogs } from '@/.contentlayer/generated/index.mjs';
import Link from 'next/link';
import Image from 'next/image';
import BlogDetails from '@/src/components/Blog/BlogDetails';
import RenderDetails from '@/src/components/Blog/RenderDetails';
import { slug } from 'github-slugger';
import siteMetadata from '@/src/utils/siteMetadata';

export async function generateStaticParams() {
  return allBlogs.map((blog) => {
    return {
      slug: blog._raw.flattenedPath,
    };
  });
}

export async function generateMetadata({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === 'string'
        ? [siteMetadata.siteUrl + blog.image.filePath.replace('../public', '')]
        : blog.image;
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes('http') ? img : siteMetadata.siteUrl + img };
  });

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link
            href={`/categories/${slug(blog.tags[0])}`}
            className="py-3 text-base px-10 border-2 border-light rounded-full bg-dark capitalize font-semibold hover:scale-105 transition-all ease duration-300"
          >
            <span className="text-light">{blog.tags[0]} </span>
          </Link>
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-5xl leading-normal relative w-5/6">
            {blog.title}
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60" />
        <Image
          src={blog.image.filePath.replace('../public', '')}
          alt={blog.title}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          width={blog.image.width}
          height={blog.image.height}
          className="w-full h-full rounded-xl object-cover object-center group-hover:scale-105 transition-all ease duration-300"
        />
      </div>
      <BlogDetails blog={blog} slug={params.slug} />
      <div className="flex items-start justify-center gap-16 mt-8 px-10">
        <div className="w-1/2">
          <details
            className=" border-[1px] border-solid border-dark text-dark rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary className="text-lg font-semibold cursor-pointer capitalize">
              Table of Contents
            </summary>
            <ul className="mt-4 font-in text-base">
              {blog.toc.map((heading) => {
                return (
                  <li key={`#${heading.slug}`} className="py-1">
                    <a
                      href={`#${heading.slug}`}
                      data-level={heading.level}
                      className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid boder-dark/80
                      data-[level=three]:pl-6 flex items-center justify-start
                      "
                    >
                      {heading.level == 'three' ? (
                        <span className="flex w-1 h-1 bg-dark mr-2">
                          &nbsp;
                        </span>
                      ) : null}
                      <span className="hover:underline">{heading.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        <RenderDetails blog={blog} />
      </div>
    </article>
  );
}
