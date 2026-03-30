import React from "react";


const PostCard = ({ post }) => {
  return (
    // The PostCard component is a functional component that takes a post object as a prop and
    //  returns a JSX element that displays the title and body of the post.
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
    );
};

export default PostCard;      