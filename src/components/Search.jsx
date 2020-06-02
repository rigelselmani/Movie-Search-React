import React, { useState } from "react";

function Search(props){
    const[searchValue,setSearchValue]=useState("");

    function handleChange(event){
       setSearchValue(event.target.value)
    }

    // function handleClick(e){
    //    e.preventDefault();
    //    props.search(searchValue)
    // }
    

    return   <form>
                 <input onChange={handleChange} value={searchValue} type="text" />
                 <input  onClick={(e) => {
                  e.preventDefault();
                 props.search(searchValue);}}
                 className="submit" value="search" type="submit" />
             </form>
          
}

export default Search;