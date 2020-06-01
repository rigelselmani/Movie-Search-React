import React, { useState } from "react";

function Search(props){
    const[searchValue,setSearchValue]=useState("");
   
    function handleChange(event){
       setSearchValue(event.target.value)
    }

    function handleClick(event){
        event.preventDefault();
        props.search(searchValue)
    }
    

    return   <form>
                 <input onChange={handleChange} value={searchValue} type="text" />
                 <input onClick={handleClick} className="submit" value="search" type="submit" />
             </form>
          
}

export default Search;