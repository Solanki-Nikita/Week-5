import React, { useState } from 'react'
import UserProfile from './components/UserProfile';
import PostList from './components/PostList';
import './App.css';

export default function App() {
  //Global State 
  const [posts, setPosts] = useState([
    {
      id:1,
      title: "First Post",
      content:"This is my first blog post",
      comments: []
    }
  ]);
  //Add Comment to a specific post

   const addComment = (postId, comment) => {

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [...post.comments, comment]
            }
          : post
      )
    );
  };
  return (
    <div className='app-container'>
      <h1>Mini Blog App </h1>
           {/* User Profile */}
           <UserProfile />
            {/* Post List */}
      <PostList posts={posts} addComment={addComment} />


    </div>
  )
}
