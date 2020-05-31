import React, {useState, useEffect} from "react";
import Header from "./Header"
import Search from "./Search";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=title&apikey=4a3b711b"


function App(props){

   const [loading,setLoading]=useState(true);
   const [ movies,setMovies]=useState([]);
   
   useEffect(()=>{
      .then(response=>response.json());
   });

    function search(){
       setLoading(true);
    }
  
      console.log(MOVIE_API_URL)
   return <div className="App">
               <Header />
               <Search search={search} />
          </div>
}

export default App;