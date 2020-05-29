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
                 <input value={searchValue} onChange={handleChange} type="text" />
                 <input onClick={handleClick} className="submit" value="search" type="submit" />
             </form>
          
}

export default Search;