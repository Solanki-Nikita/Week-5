import { useMemo } from "react";
import MovieItem from "./MovieItem";

function MovieList({ movies, search }) {

  // useMemo prevents recalculating filter every render
  // useMemo caches the filtered movie list
  // The filter runs only when movies or search changes
  const filteredMovies = useMemo(() => {

    // console.log("Filtering movies...");
    
    // Filter movies based on search input
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );

  }, [movies, search]);

  return (

    <div>
         {/* Loop through filtered movies */} 
      {filteredMovies.map(movie => (

         // Render a MovieItem for each movie
        // key helps React track list items efficiently
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>

  );

}

export default MovieList;