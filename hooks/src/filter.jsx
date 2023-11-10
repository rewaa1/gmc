import React, { useEffect, useState } from "react";


const Filter = ({setMovies, Movies}) => {
  const [movieFilter, setMovieFilter] = useState({title:"", rating:""});
  useEffect(()=>{
    var moviesFiltered = Movies;
    if(movieFilter.title!= "") moviesFiltered = moviesFiltered.filter((movie)=> movie.title == movieFilter.title);
    if(movieFilter.rating!= "") moviesFiltered = moviesFiltered.filter((movie)=> movie.rating == movieFilter.rating);
    setMovies(moviesFiltered);
  },[movieFilter]);
  return (
    <div>
      <label>Title:</label>
      <input type="text" onChange={(e)=>{
        setMovieFilter({...movieFilter, title: e.target.value});
      }} />
      <label>Rating:</label>
      <input type="number" onChange={(e)=>{
        setMovieFilter({...movieFilter, rating: e.target.value});}} />
    </div>
  );
};

export default Filter;