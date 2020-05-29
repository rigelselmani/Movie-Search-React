import React from "react";

function input(){
    return (
     <div >  
        <div className="input-group mb-3 justify-content-center">
          <input type="text" className="form-control mt-2 col-2" />
          <button type="button" className="btn btn-secondary ml-2 mt-2 bg-light text-dark">Search</button>
        </div>
        <div className="text text-align-center justify-content-center">
          <p className="justify-content-center">Sharing a few of our favorite movies</p>
        </div>
     </div> 
    )
}

export default input;