import React from "react";

export const Loader: React.FC = () => {
  return (
    <div
      className="animate-spin inline-block w-11 h-11 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500 relative"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
