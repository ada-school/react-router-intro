import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogPosts } from "../services/blogPostsService";

export function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getBlogPosts(id).then((data) => setPost(data));
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
