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
    useEffect(() => {
       fetch('http://localhost:5001/api/titles/' + tconst)
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
         <p>Rating: {posts.averageRating}</p>
         <p>Year: {posts.startYear}</p>
         <p>R Rated? {posts.isAdult}</p>
         <p>Runtime: {posts.runTimeMinutes}</p>
         <p>Genres: {posts.genres}</p>
       </div>
      
      <NavLink classname="top-menu-button" to={'crew'}>Crew List</NavLink>

      <Outlet />

      </>

    )

};

export default TitleDetailed;

