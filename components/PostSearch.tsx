"use client";
import { usePosts } from "@/store";
import React, { FormEventHandler, useState } from "react";
export default function PostSearch() {
  const [search, setSearch] = useState("");
  const getPostsBySearch = usePosts((state) => state.getPostBySearch);

  const handler: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    await getPostsBySearch(search);
  };

  return (
    <form onSubmit={handler}>
      <input
        type="search"
        placeholder="поиск"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">search</button>
    </form>
  );
}
