import React from "react";

function BlogBack({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border-2 rounded-lg p-4 border-neutral-200 min-h-screen px-5 lg:px-20 mb-10">
      {children}
    </div>
  );
}

export default BlogBack;
