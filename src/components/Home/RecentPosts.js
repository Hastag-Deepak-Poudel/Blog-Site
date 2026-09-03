import React from "react";

const RecentPosts = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return null;
  }

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Recent Posts
        </h2>
      </div>
      <p className="mt-4 text-dark/60 dark:text-light/60 text-lg">
        No recent posts yet. Check back soon.
      </p>
    </section>
  );
};

export default RecentPosts;
