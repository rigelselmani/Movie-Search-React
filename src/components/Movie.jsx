import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "http://2.bp.blogspot.com/-I91kB3xYppQ/TZDPvc-ilzI/AAAAAAAABvw/JQBz0_8E_I4/s1600/Natural+Scenes+%25286%2529.jpg";

function Movie(props){

    const poster =
    props.post === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : props.post;
    return <div className="movie">
            <div className="title">
              <h2 className="movie-title">{props.name}</h2>
            </div>
              <div className="">
                  <img width="200" height="300"  alt={props.post} src={poster} />
              </div>
              <p>{props.year}</p>
           </div>
           
}

export default Movie;