import React, { useState, useEffect } from 'react';
import '../App.css';
import TitlesList from './TitleList';
import { 
   Routes, Route, Link, NavLink, useParams, Outlet
 } from "react-router-dom";


const TitleDetailed = () => {

    var href = window.location.href;
    var array = href.split('/');

    var tconst = array[array.length-1];

    const [posts, setPosts] = useState([]);
    const [rate_number, setRate_number] = useState();

    useEffect(() => {
       fetch('http://localhost:5001/api/titles/detailed/' + tconst)
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
             console.log(array[array.length-2])
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, [TitlesList, TitleDetailed]);



    

    return(
      <>
       <div className='title_detailed'>
         <h3>{posts.primaryTitle}</h3>
         <p>Rating: {posts.rating}</p>
         <p>Year: {posts.startYear}</p>
         <p>R Rated? {posts.isAdult}</p>
         <p>Runtime: {posts.runtime}</p>
         <p>Genres: {posts.genres}</p>
         <p>{posts.plot}</p>
       </div>

      <label>Rate Between 1 - 10</label>
      <input type="text" id="rate-number" onChange={event => setRate_number(event.target.value)}></input>
      <NavLink className="top-menu-button" to={'/titles/' + tconst + '/rate/' + rate_number}>Rate!</NavLink>
      
      <NavLink classname="top-menu-button" to='crew'>Crew List</NavLink>

      <Outlet />

      </>

    )

};

export default TitleDetailed;

