import React, { useState, useEffect } from 'react';
import './App.css';
import { 
   Routes, Route, Link, NavLink, useParams, Outlet
 } from "react-router-dom";


const TitlesList = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
       fetch('http://localhost:5001/api/titles')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
 
   return(

   <div>
       
      {posts.map((post) => {
         return (
            <NavLink to={"/titles/" + post.tconst}>
               <div className="list-item" key={post.tconst}>
                  <h2>{post.originalTitle}</h2>
                  <p>Rating: {post.averageRating}</p>
                  <p>Year: {post.endYear}</p>
                  <p>Genre: {post.genres}</p>
                  <p>{post.isAdult}</p>
                  <p>Run Time: {post.runTimeMinutes} minutes</p>
               </div>
            </NavLink>
         );
         })
      }
   </div>  
       
    )
    
};

export default TitlesList;