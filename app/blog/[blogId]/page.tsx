import Titles from "@/app/components/Titles";
import { notFound } from "next/navigation";
import React from "react";

function BlogPost({ params }: { params: { blogId: string } }) {
  const { blogId } = params;
  const blogPost = parseInt(blogId);
  return (
    <Titles>{blogPost.toString() !== blogId ? notFound() : blogPost}</Titles>
  );
}

export default BlogPost;
