import React from "react";
import Movies from "./Data";
import { useState } from "react";



function MovieCard (Movie){

return(
<div className=" w-56 justify-center  p-2">
    <div>
        <img src={Movie.posterURL} className=" h-36 w-32"/>
    </div>
  <div className=" text-xl ">{Movie.title}</div>
 <p className="text-sm mx-1">{Movie.description}</p>
 <p>{Movie.rating}</p>
</div>



)


}



  export default MovieCard;