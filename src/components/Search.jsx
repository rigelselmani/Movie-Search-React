import React,{useState} from "react";

function Search(props){
   
   const[movie,setMovie]=useState();
   const[text,headingText]=useState([]);

   function handleChange(event){
      setMovie(event.target.value)
   }

   function handleClick(){
      headingText(prevValue=>{
         return[...prevValue,movie]
      });
   }

    return (
     <div>  
        <div className="input-group mb-3 justify-content-center">
          <input onChange={handleChange} type="text" className="form-control mt-3 col-2" />
          <button onClick={handleClick} type="button" className="btn btn-secondary ml-2 mt-3 bg-light text-dark">Search</button>
        </div>
        <div className="justify-content-center text-center">
           <p>Sharing a few of our favorite movies {text}</p>
        </div>
     </div> 
    )
}

export default Search;