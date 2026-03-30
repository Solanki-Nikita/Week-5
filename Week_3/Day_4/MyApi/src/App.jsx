
import { useState, useEffect } from 'react'
 //
import { getPost } from './api/index.jsx';

import PostCard from './component/PostCard.jsx';  


export default function App() {

 const [posts, setPosts] = useState(null);   

useEffect(() => {
// The getPost() function is called to fetch the data from the API.
  getPost().then((posts) => setPosts(posts))
    
    // The setPosts() function is used to update the state of the posts variable with the data fetched from the API.
   
  }, []);

  return (
    <div>
      {/* The posts variable is checked to see if it contains data. If it does,
       the map() function is used to iterate over the posts and display the title of each post in a list item.
        If the posts variable is null, a loading message is displayed instead. */}
      { 
      posts ? posts.map((e) => <PostCard post={e} key={e.id} />) : <p>Loading...</p>
      }
    </div>
  )
}
