import React from 'react'

// user list component that displays a list of users and products using map function 
export default function UserList() {
    const users = ["Alice", "Bob", "Charlie", "David", "Eve"];


// product list with id, name and price
    const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 499 },
    { id: 3, name: "Headphones", price: 199 }
    ]
  
//Renders: - A list of users using Array.map()  (Basic mapping)
    return (
    <div>
        <h2>User List</h2>
         <ul>
            {users.map((user, index) => (
                <li key = {index}>{user}</li>
            ))}
        </ul> 
        
        <h2>Product List</h2>
        <ul>
            {products.map (products => (
                <div key = {products.id}>
                <h3>{products.name}</h3>
                <p>${products.price}</p>
                </div>
            ))}
        </ul>

{/* conditional rendering */}
     {/* { users.length === 0 ? ( 
     <p>No users found.</p>) :(
        users.map(users => <li key={users.id}>{users.name}</li>)
     )} */}


{/* filtering + mapping */}
{/* 
{ users
.filter(user => user.isActive)
.map(user => (<li key={user.id}>{user.name}</li>))} */}


        

    </div>
  )
}
