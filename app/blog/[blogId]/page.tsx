import BlogBack from "@/app/components/BlogBack";
import Titles from "@/app/components/Titles";
import { notFound } from "next/navigation";
import React from "react";

function BlogPost({ params }: { params: { blogId: string } }) {
  const { blogId } = params;
  return (
    <>
      <Titles>{blogId}</Titles>
      <main>
        <BlogBack>
          <p>this is a blog content</p>
          {/* <Titles>{blogPost.toString() !== blogId ? notFound() : blogPost}</Titles> */}
        </BlogBack>
      </main>
    </>
  );
}

export default BlogPost;
