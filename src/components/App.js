import React, {useState, useEffect} from "react";
import Header from "./Header"
import Search from "./Search";
import Movie from "./Movie";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

function App(){

   const [movies,setMovies]=useState([]);
   const [errorMessage,setErrotMessage]= useState(null)

   useEffect(() =>{
      fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse =>{
         setMovies(jsonResponse.Search);
      });
  }, []);


  function searchValue(inputText){
     setErrotMessage(null);
  fetch("https://www.omdbapi.com/?s="+inputText+"&apikey=4a3b711b")
  .then(response => response.json())
  .then(jsonResponse =>{
     if(jsonResponse.Response==="True"){
      setMovies(jsonResponse.Search)
     }else{
       setErrotMessage(jsonResponse.Error);
     }
  })
}

   return (
   <div className="App">
      <Header />
      <Search search={searchValue} />
      <div className="movies">
      {movies ?
         movies.map((movie,index) =>(
         <Movie key={index} name={movie.Title} post={movie.Poster} year={movie.Year}/>
      )) :(
      <div className="errorMessage">{errorMessage}</div>)}
      </div>
   </div>
   )
}


export default App;