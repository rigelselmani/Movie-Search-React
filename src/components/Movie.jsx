import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

function Movie(props){
    

    const poster =
    props.post === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : props.post;
    console.log(poster)
    return <div className="movie">
            <div className="title">
              <h2 className="movie-title">{props.name}</h2>
            </div>
              <div>
                  <img width="200" height="300"  alt={props.post} src={poster}/>
              </div>
              <p>{props.year}</p>
           </div>
           
}

export default Movie;