import React from 'react'
import CommentForm from './CommentForm';

export default function CommentSection({ comments, postId, addComment }) {  return (
    <div className='comments'>
      <h2>Comments</h2>
      {/* conditional Rendering */}
      {comments.length === 0 ? (
        <p>NO Comment yet </p>
      ):(
        comments.map((c, index) => (
            <p key = {index}>• {c}</p>
        ))
      )}
      {/* comment Form */}
      <CommentForm postId={postId} addComment={addComment} />
      <p></p>
    </div>
  )
}
