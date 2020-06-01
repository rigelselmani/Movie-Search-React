import React, {useState, useEffect} from "react";
import Header from "./Header"
import Search from "./Search";
import Movie from "./Movie";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"


function App(){

   const [loading,setLoading]=useState(true);
   const [ movies,setMovies]=useState([]);
   const [errorMessage,setErrorMessage] = useState(null);
   
   useEffect(()=>{
   fetch(MOVIE_API_URL)
      .then(response=>response.json())
      .then(jsonResponse =>{
        setMovies(jsonResponse.Search);
      //   setLoading(false);
      })
   },[]);

    function search(){
       setLoading(true);
       setErrorMessage(false)
    }
  
      console.log(MOVIE_API_URL)
   return <div className="App">
               <Header />
               <Search search={search} />
               <div className="movies">
                  {loading && !errorMessage ?(
                     <span>loading...</span>
                  ):errorMessage ? (
                     <div className="errorMessage">{errorMessage}</div>
                  ) :(
                     movies.map((movie, index)=>(
                        <Movie key={`${index}-${movie.Title}`} movie={movie} />
                     ))
                  )}
               </div>
          </div>
}

export default App;