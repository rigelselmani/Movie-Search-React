import React from "react";


function Movie(props){
    

    return <div className="movie">
        <h2>{props.name}</h2>
        <div>
            <img width="200" alt={props.post} src={props.post} />
        </div>
        <p>{props.year}</p>
    </div>
}

export default Movie;