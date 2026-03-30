// movies prop contains array passed from parent
 import React from "react";

function MovieList({ movies }) {
 /*  Conditional Rendering
    If movies array length is 0,
  show "No Movies Found"
  */
       if ( movies.length === 0 ){
       return(
        <p className="no-movies">No Message found</p>
        );
      }
  // If movies exist → render list

  return (
    <div className="movie-grid">
 {/* map() loops through movie array */}
      {movies.map((movie) => (
      //  key helps React identify list items
        <div className="movie-card" key={movie.id}>

          <div className="movie-title">
            {movie.title}
          </div>

          <div className="movie-year">
            Year: {movie.year}
          </div>

        </div>

      ))}

    </div>
  );
}

export default MovieList;






 

       
 
          