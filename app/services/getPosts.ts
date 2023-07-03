export const getData = async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  if (!response.ok) {
    throw new Error("ошибка");
  }

  return response.json();
};

export const getPostsBySearch = async function (search: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  let posts = await response.json();
  return posts.filter((post: any) => post.title.includes(search));
};
