import React from "react";
import SlidesNew from "./SlidesNew";

const News = () => {
  return (
    <div className="w-full bg-gray-100 pb-8">
      <h1 className="text-center font-bold text-sky-500 text-xl md:text-2xl mx-auto py-6 border-b border-gray-300 max-w-[1240px]">
        News
      </h1>
      <div className="max-w-[1240px] mx-auto py-4 z-10 relative">
        <SlidesNew />
      </div>
    </div>
  );
};

export default News;
