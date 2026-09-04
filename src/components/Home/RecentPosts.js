import React from "react";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";
import { sortBlogs } from "@/src/utils";

const RecentPosts = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return null;
  }

  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Recent Posts
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mt-10 sm:mt-16">
        {sortedBlogs.map((blog, index) => (
          <article key={blog.slug}>
            <BlogLayoutTwo blog={blog} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
