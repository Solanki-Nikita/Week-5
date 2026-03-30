import React, { useState } from 'react'
import './App.css';


export default function MovieUser()  {
const [movies, setMovies] = useState([])
  const [newMovie, setNewMovie] = useState('')

  const addMovie = () => {
    if (newMovie.trim() !== '') {
      setMovies([...movies, { id: Date.now(), title: newMovie.trim() }])
      setNewMovie('')
    }
  }

  const removeMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id))
  }

  return (
    <div className="app">
      <h1>Movie List</h1>
      <div className="add-movie">
        <input
          type="text"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          placeholder="Enter movie title"
          onKeyPress={(e) => e.key === 'Enter' && addMovie()}
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>
      <ul className="movie-list">
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => removeMovie(movie.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

