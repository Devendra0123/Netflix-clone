import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function Header(){
   
   const [show,setShow] = useState(false);
   
   function handleMouseOver(){
     setShow(true);
   }

    function handleMouseleave(){
      setShow(false);
    }

    useEffect(()=>{
      async function fetchData(){
      const request = await axios.get("/news");
      console.log(request);
      return request;
     }
     fetchData();
},[]);


  return(<div className="navbar">
    <Link to="/">DEVEN</Link>
    <ul>
        <li onMouseOver={handleMouseOver} onMouseLeave={handleMouseleave}>
          Movies
          </li>
        <li>Series</li>
        <li>Live TV</li>
    </ul>
    <ul className="left">
    <div className="searchBar">
    <i className="fas fa-search"></i>
    </div>
    <button type="button"><Link to="/signIn">Sign Up</Link></button>
    </ul>
  </div>)
}

export default Header;