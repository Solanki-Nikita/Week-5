import React, { useState } from "react";

function CommentForm({ postId, addComment }) {

  /*
  Form state
  */
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  /*
  Handle Submit
  */
  const handleSubmit = (e) => {

    e.preventDefault();

    /*
    Validation
    */
    if (comment.trim() === "") {
      setError("Comment cannot be empty");
      return;
    }

    /*
    Clear error
    */
    setError("");

    /*
    Send comment to parent
    */
    addComment(postId, comment);

    /*
    Reset input
    */
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">

      <input
        type="text"
        value={comment}
        placeholder="Write a comment..."
        onChange={(e) => setComment(e.target.value)}
      />

      <button type="submit">Add</button>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

    </form>
  );
}

export default CommentForm;