import React, { useCallback, useState } from 'react'
import MovieList from './components/MovieList'
import ErrorBoundary from "./ErrorBoundary";

// Initial movie data (static list)
const initialsMovies = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "Interstellar", year: 2014 },
  { id: 3, title: "The Dark Knight", year: 2008 },
  { id: 4, title: "Avengers Endgame", year: 2019 },
  { id: 5, title: "Titanic", year: 1997 }
];




export default function App() {
   // Store movie list in state
  // This rarely changes but is stored to simulate real apps
  const[movies] = useState(initialsMovies);
  // State to store search text from input field
  const[search, setSearch] = useState("");
  // State used to force re-render of the app
  // This helps demonstrate optimization
  const[count, setCount] = useState(0);

   // useCallback memoizes this function
  // Without this, a new function would be created on every render
  //useCallback prevent function recreation
  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  },[]);


  return (
    <div>
       {/* Title of the app */}
      <h1>Movie List</h1>
      {/* Search input field */}
      <input type='text' p
      laceholder="Search Movie..."
      value={search}
      onChange={handleSearch}/>

    {/* Button used to force re-render of the App */}
      <button onClick={() => setCount(count + 1)}>
        Re-render App{count}
      </button>
    {/* Passing movies and search text as props */}
     
       {/* Error Boundary wraps MovieList */}
      <ErrorBoundary>

        <MovieList movies={movies} search={search} />

      </ErrorBoundary>
    </div>
  )
}
