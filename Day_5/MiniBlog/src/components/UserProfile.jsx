import React from 'react'

export default function UserProfile() {
  //  Static user data (can be dynamic later)

  const user = {
    name:"Nikita",
    role:"Fontend Developer"
  };

  return (
    <div className='user-profile'>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
    </div>
  );
}
