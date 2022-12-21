import React, { useState, useEffect } from 'react';
import '../App.css';
import { 
   Routes, Route, Link, NavLink, useParams, Outlet
 } from "react-router-dom";


const NameDetailed = () => {

    var href = window.location.href;
    var array = href.split('/');

    var nconst = array[array.length-1];

    const [posts, setPosts] = useState([]);
    useEffect(() => {
       fetch('http://localhost:5001/api/names/detailed/' + nconst)
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

    const [titles, setTitles] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5001/api/names' + nconst + '/contributing')
         .then((response) => response.json())
         .then((contributing_data) => {
            console.log(contributing_data);
            setTitles(contributing_data);
         })
         .catch((err) => {
            console.log(err.message);
         });
    }, []);

    return(
      <>
       <div className='title_detailed'>
         <h3>{posts.primaryName}</h3>
         <p>Birth: {posts.birthYear}</p>
         <p>Death: {posts.deathYear}</p>
       </div>

      <div>
         <NavLink to={"/userPage/nameBookmarks/create/" + nconst}>Create Bookmark</NavLink>

         <NavLink to={"/names/" + nconst + "/related"}>Movies Related to this Actor</NavLink>
      </div>
      <Outlet />
      </>
    )

};

export default NameDetailed;