import React from "react";

function BlogCart({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border-2 rounded-lg p-2 border-neutral-200 min-h-screen mb-10 md:mx-20">
      {children}
    </div>
  );
}

export default BlogCart;
