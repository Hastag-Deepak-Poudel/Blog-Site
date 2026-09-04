import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { sortBlogs } from '@/src/utils';

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const latestBlog = sortedBlogs[0];

  if (!latestBlog) {
    return (
      <div className="w-full inline-block">
        <article className="flex flex-col items-center justify-center relative h-[60vh] sm:h-[85vh] rounded-3xl overflow-hidden bg-dark">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-bold text-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-tight">
              Welcome to My Blog
            </h1>
            <p className="mt-6 text-light/70 text-lg sm:text-xl md:text-2xl max-w-2xl font-in">
              A personal space for thoughts, ideas, and stories.
            </p>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-center justify-center relative h-[60vh] sm:h-[85vh] rounded-3xl overflow-hidden bg-dark">
        <Link href={latestBlog.url} className="absolute top-0 left-0 bottom-0 right-0 h-full">
          <Image
            src={latestBlog.image.src}
            placeholder="blur"
            blurDataURL={latestBlog.image.blurDataURL}
            alt={latestBlog.title}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </Link>
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6">
          <span className="text-light/80 text-sm sm:text-base uppercase tracking-widest font-semibold">
            {latestBlog.tags[0]}
          </span>
          <Link href={latestBlog.url}>
            <h1 className="font-bold text-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-tight mt-4 hover:text-accent transition-colors duration-300">
              {latestBlog.title}
            </h1>
          </Link>
          <p className="mt-4 sm:mt-6 text-light/70 text-lg sm:text-xl max-w-2xl font-in line-clamp-2">
            {latestBlog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
