import React from "react";
import Movies from "./Data";
import { useState } from "react";



function MovieCard (Movie){

return(
<div className=" card">
  <img src={Movie.posterURL} className=" w-48 "/>
  <div className=" text-4xl ">{Movie.title}</div>
 <p className="text-sm">{Movie.description}</p>
 <p>{Movie.rating}</p>
</div>



)


}



  export default MovieCard;