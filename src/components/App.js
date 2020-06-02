import React, {useState, useEffect} from "react";
import Header from "./Header"
import Search from "./Search";
import Movie from "./Movie";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

function App(){

   const [movies,setMovies]=useState([]);

   useEffect(() =>{
      fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse =>{
         setMovies(jsonResponse.Search);
      });
  }, []);


  function searchValue(inputText){
  fetch("https://www.omdbapi.com/?s="+inputText+"&apikey=4a3b711b")
  .then(response => response.json())
  .then(jsonResponse =>{
     setMovies(jsonResponse.Search)
  })
}

   return (
   <div className="App">
      <Header />
      <Search search={searchValue} />
      <div className="container">
      {movies.map((movie,index) =>(
         <Movie key={index} name={movie.Title} post={movie.Poster} year={movie.Year}/>
      ))}
      </div>
   </div>
   )
}


export default App;