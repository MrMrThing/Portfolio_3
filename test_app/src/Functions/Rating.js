import React, { useState, useEffect } from 'react';
import '../App.css';
import { 
    Routes, Route, Link, NavLink, useParams, Outlet, useNavigate, Navigate, json 
  } from "react-router-dom";


const Rating = () => {

    var href = window.location.href;
    var array = href.split('/');

    var tconst = array[array.length-3];
    var theRating = parseInt(array[array.length-1]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch('http://localhost:5001/api/users/user/ratings', 
            {headers : {'Authorization': 'Basic ' + sessionStorage.getItem('user'), 'Content-Type': 'application/json'} ,
             method : "POST",
             body : JSON.stringify({ "rating" : theRating, "tconst" : tconst})})
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
     }, []);

     return(
        <>

            <h2>Rating Sent</h2>        
        </>
     )

    

}

export default Rating;