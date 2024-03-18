const posts = [
  {
    id: "react-components",
    title: "React components are the best!",
    content: "I love React components",
  },
  {
    id: "state-management-with-hooks",
    title: "State management with hooks",
    content: "I love hooks",
  },
  {
    id: "make-your-own-hooks",
    title: "How to make your own hooks",
    content: "I love making hooks",
  },
];

export const getBlogPosts = async (id) => {
  return posts.find((post) => post.id === id);
};
