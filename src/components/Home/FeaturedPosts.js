import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";

const FeaturedPosts = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return null;
  }

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        Featured Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-[250px] sm:auto-rows-[300px] gap-4 sm:gap-6 mt-10 sm:mt-16">
        {blogs.slice(0, 4).map((blog, index) => (
          <article
            key={blog.slug}
            className={`relative ${
              index === 0
                ? "sm:row-span-2"
                : index === 3
                ? "sm:col-span-2"
                : ""
            }`}
          >
            <BlogLayoutOne blog={blog} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
