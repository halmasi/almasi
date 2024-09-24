import SingelBlogLoader from "@/components/SingelBlogLoader";
import Titles from "@/components/Titles";
import { notFound } from "next/navigation";
import React from "react";

function BlogPost({ params }: { params: { blogId: string } }) {
  const { blogId } = params;
  return (
    <>
      <header>
        <Titles>{blogId}</Titles>
      </header>
      <main>
        <SingelBlogLoader>
          <p>this is a blog content</p>
          {/* <Titles>{blogPost.toString() !== blogId ? notFound() : blogPost}</Titles> */}
        </SingelBlogLoader>
      </main>
    </>
  );
}

export default BlogPost;
