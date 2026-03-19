import React from 'react'
import PostItem from './PostItem';


export default function PostList({posts,addComment}) {
  //Receives posts as props
 
  return (
    <div>
      {posts.map((post) => (
        <PostItem 
        key={post.id}
        post={post}
        addComment={addComment}
        />
      ))}
    </div>
  );
}
