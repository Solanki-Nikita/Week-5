import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function Blog() {
  return (
    <div>
      <h2>Blog</h2>

{/* Loop through blog posts and generate links dynamically */}
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "15px" }}>
          <h3>{post.title}</h3>

{/* Dynamic link using post id */}
          <Link to={`/blog/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}