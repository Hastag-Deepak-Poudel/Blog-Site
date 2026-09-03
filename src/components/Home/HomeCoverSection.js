import React from 'react';

const HomeCoverSection = ({ blogs }) => {
  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-center justify-center mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh] rounded-3xl overflow-hidden bg-dark">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-bold text-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-tight">
            Welcome to My Blog
          </h1>
          <p className="mt-6 text-light/70 text-lg sm:text-xl md:text-2xl max-w-2xl font-in">
            A personal space for thoughts, ideas, and stories. Posts coming soon.
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;