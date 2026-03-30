import React from "react"

// React.memo prevents unnecessary re-render
// Component only re-renders if props change
const MovieItem = React.memo(({ movie }) => {

  return (
    <div style={{
      border:"1px solid gray",
      padding:"10px",
      margin:"10px",
      borderRadius:"5px"
    }}>
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
    </div>
  );

});

export default MovieItem;