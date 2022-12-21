import React, { useState, useEffect } from 'react';
import '../App.css';
import { 
   Routes, Route, Link, NavLink, useParams, Outlet
 } from "react-router-dom";


const TitlesList = () => {

    const [posts, setPosts] = useState([]);
    const [NextPage, setNextPage] = useState([]);
    const [LastPage, setLastPage] = useState([]);
    const [PrevPage, setPrevPage] = useState([]);

    useEffect(() => {
       fetch('http://localhost:5001/api/titles/list')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data.items);
             setNextPage(data.nextPageUrl);
             setLastPage(data.lastPageUrl);
             setPrevPage(data.prevPageUrl)
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
 
   return(
      <div>

      <NavLink className="top-menu-button"to={LastPage}>Last Page</NavLink>
      <NavLink className="top-menu-button"to={PrevPage}>Previus Page</NavLink>
      <NavLink className="top-menu-button"to={NextPage}>Next Page</NavLink>
         
         {posts.map((post) => {
            var array = post.basicTitle.url.split('/');
            var tconst = array[array.length-1];
            return (
               <NavLink to={"/titles/" + tconst}>
                  <div className="list-item">
                     <h2>{post.basicTitle.primaryTitle}</h2>
                     <p>Rating: {post.rating}</p>
                     <p>Year: {post.basicTitle.startYear}</p>
                     <p>Genre: {post.genres}</p>
                     <p>{post.isAdult}</p>
                     <p>Run Time: {post.runtime} minutes</p>
                  </div>
               </NavLink>
            );
            })
         }
      </div>  

    )
    
};

export default TitlesList;