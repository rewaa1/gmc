import React, { useState } from "react";
import MovieCard from "./movieCard";
import Movies from "./Data";
import Filter from "./filter";

const MovieList = () => {
  const [currentMovies, setMovies] = useState(Movies);
  return (
    <div>
      <Filter setMovies = {setMovies} Movies = {Movies}/>
      {currentMovies.map((movie) => (
        <MovieCard
          key={movie.title}
          title={movie.title}
          description={movie.description}
          posterURL={movie.PosterURL}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MovieList;