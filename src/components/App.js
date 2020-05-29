import React from "react";
import Header from "./Header"
import Search from "./Search";

function App(props){

   const MOVIE_API_URL = "https://www.omdbapi.com/?s=title&apikey=4a3b711b"

   return <div className="App">
               <Header />
               <Search />
          </div>
}

export default App;