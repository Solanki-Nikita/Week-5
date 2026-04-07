import React from 'react'
import { useCreatePostMutation, useGetApiByNameQuery, useDeletePostMutation, useUpdatePostMutation } from './services/api'

export default function App() {
  const {data, error,isLoading, isSuccess, isFetching} = useGetApiByNameQuery();
  return (
    <div>
      <h1>React RTK Query</h1>
      {isLoading && <h2>Loading.....</h2>}
      {isFetching && <h2>Fetching</h2>}
      {error && <h2>Error</h2>}
      {isSuccess && (
        <div>
          {data?.map(posts => {
            return(
              <div key ={posts.id}>
                <span>{posts.title}</span>
              </div>
            )
          })}
        </div>
      )}
      <div>
        <AddPost/> 
      </div>
    </div>
  )
}
export const AddPost = () => {
  const[AddPost] = useCreatePostMutation();
  const[deletePost] = useDeletePostMutation();
  const[updatePost] = useUpdatePostMutation();
  
  const posts = {
    "id" : 4,
    "title":"Posted",
    "author":"Me"
  };
  
  const postsUpdate = {
    "id": 4,
    "title": "Updated",
    "author" : "Me Update" ,
  };




  const handler = async() =>{
    await AddPost(posts);
  } 
   const handleDelete = async() =>{
    await deletePost(posts.id);
  } 
   const handleUpdate = async() =>{
    await updatePost(postsUpdate);
  } 
  return(<>
    <button onClick={handler}>Add Posts</button>
    <button onClick={handleDelete}>DELETE</button>
    <button onClick={handleUpdate}>UPDATE</button>
    </>
  )
}
