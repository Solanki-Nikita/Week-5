import React from 'react'
import CommentSection from './CommentSection';

export default function PostItem({ post, addComment }) {
  return (
    <div className='post-card'>
      <h3 className='post-title'>{post.title}</h3>
      <p className='post-content'>{post.content}</p>

      {/* CommentSectoion */}
       <CommentSection
        comments={post.comments}
        postId={post.id}
        addComment={addComment}
      />

    </div>
  )
}
