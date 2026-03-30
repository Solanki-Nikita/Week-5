import React from 'react'
import MovieUser from './MovieUser'
import MovieList from './MovieList';

export default function App() {
  const movies = [
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "Interstellar", year: 2014 },
    { id: 3, title: "The Dark Knight", year: 2008 },
    { id: 4, title: "Avengers: Endgame", year: 2019 }
  ];

  return (
    <div className="container">
      {/* <MovieUser/> */}
    <h1>Movie List App</h1>
      {/* Passing movies as props */}
      <MovieList movies= {movies}/>

      

    </div>
  )
}
