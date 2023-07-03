import React from "react";
import Posts from "@/components/Posts";
import PostSearch from "@/components/PostSearch";

export default function Blog() {
  return (
    <>
      <PostSearch />
      {<Posts />}
    </>
  );
}
