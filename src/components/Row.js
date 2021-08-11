import React, { useState, useEffect } from "react";
import instance from "./axios.js";
import "./row.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Rows({title, fetchURL}){
    
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
           async function fetchData(){
           const request = await instance.get(fetchURL);
           setMovies(request.data.results);
           return request;
          }
          fetchData();
    },[fetchURL]);
  
   return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
           { movies.map((movie)=>{
               return(<img key={movie.id} src={`${base_url}${movie.poster_path}`} alt={movie.title} />);
           })}
        </div>
    </div>
   );
}

export default Rows;