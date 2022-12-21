import React, { useState, useEffect } from 'react';
import '../App.css';
import { 
   Routes, Route, Link, NavLink, useParams, Outlet
 } from "react-router-dom";


const SearchListTitles = () => {


   
    var href = window.location.href;
    var searchcontent_array = href.split('/');

    var searchcontent = searchcontent_array[searchcontent_array.length-1];

    const [posts, setPosts] = useState([]);
    useEffect(() => {
       fetch('http://localhost:5001/api/search/'+ searchcontent)
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data.items);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

    return(
        <div>
         
         {posts.map((post) => {
            return (
               <NavLink to={"/titles/" + post.basicTitle.tconst}>
                  <div className="list-item">{post.basicTitle.primaryTitle}</div>
               </NavLink>
            );
            })
         }
      </div>  
    )

};

export default SearchListTitles;
