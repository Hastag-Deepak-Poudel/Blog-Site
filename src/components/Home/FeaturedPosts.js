import React from "react";

const FeaturedPosts = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return null;
  }

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        Featured Posts
      </h2>
      <p className="mt-4 text-dark/60 dark:text-light/60 text-lg">
        No featured posts yet. Check back soon.
      </p>
    </section>
  );
};

export default FeaturedPosts;
