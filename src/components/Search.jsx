import React, { useState } from "react";

function Search(props){
    const[searchValue,setSearchValue]=useState("");

    function handleChange(event){
       setSearchValue(event.target.value)
    }

    return   <form>
                 <input className="input" placeholder="Search For Movie" onChange={handleChange} value={searchValue} type="text" />
                 <input  onClick={(e) => {
                  e.preventDefault();
                 props.search(searchValue)
                  setSearchValue("")
                 ;}}
                 className="submit" value="search" type="submit" />
             </form>
          
}

export default Search;