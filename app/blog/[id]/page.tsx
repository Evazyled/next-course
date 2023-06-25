import React from "react";

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
}

export async function generateMetadata({ params: { id } }: Props) {
  let post = await getData(id);
  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  let post = await getData(id);
  return (
    <>
      <h1>Post {post.title}</h1>
      <div> {post.body}</div>
    </>
  );
}
