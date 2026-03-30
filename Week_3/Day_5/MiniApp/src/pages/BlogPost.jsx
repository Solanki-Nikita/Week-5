import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogPost() {
// Extract dynamic id from URL
  const { id } = useParams();

// Find matching blog post from data 
  const post = posts.find((p) => p.id === id);

// Handle invalid route case 
  if (!post) {
    return <h3>Post not found</h3>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}