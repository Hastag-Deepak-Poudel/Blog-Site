import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return null;
  }

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        Featured Posts
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 mt-10 sm:mt-16">
        {blogs.slice(0, 4).map((blog, index) => (
          <article
            key={blog.slug}
            className={`relative ${index === 0 ? "col-span-2 sm:col-span-3 lg:col-span-2 row-span-2" : "col-span-1"}`}
          >
            <BlogLayoutOne blog={blog} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
