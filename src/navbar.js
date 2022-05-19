import React from "react";
import {Link} from "react-router-dom";
import { useState, useEffect} from 'react';


const Navbar = () => {
    const [data,setData] = useState("spider");
    const [movie,setMovie] = useState([]);
    const [favourite,setFavourite] = useState([]);

    const addFavourite = (movie) => {
  const newFavourite = [...favourite, movie]
  setFavourite(newFavourite);
  console.log(favourite);
    }
   
    function fetchData(){
        fetch(`https://omdbapi.com/?s=${data}&apikey=29c40569`)
        .then(response => response.json())
        .then(result => {console.log(result)
        setMovie(result.Search)}
        )
    }
    useState(()=>{
        fetchData();
    })

   

    return(
   <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" onSubmit={fetchData}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setData(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </div>
   
  </div>
  
</nav>

<div className="d-flex">
   
   {
        movie?.map((item, index)=>{
            return(
               <>
                <div className="card col-lg-4 col-md-3 col-sm-12 d-flex" style={{width: "18rem" , height:"200px"}}>
        <img src={item.Poster} className="card-img-top" style={{height:"20rem"}} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{item.Title}</h5>
         
          <a href="#" class="btn btn-primary" onClick={()=>{addFavourite(movie)}}>Add to favourite</a>
        </div>
      </div>
               </>
            )
           
        }
        
        )
    }
   
       
      </div>
       
      
       </div>
   

    )
}

export default Navbar;