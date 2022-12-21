import React, { useState, useEffect } from 'react';
import '../App.css';
import { 
    Routes, Route, Link, NavLink, useParams, Outlet
  } from "react-router-dom";
import DeleteNameBookmarks from './DeleteNameBookmark';

const MyRatings = () => {

    const [ratings, setRatings] =useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/api/users/user/ratings', 
        {headers : {'Authorization': 'Basic ' + sessionStorage.getItem('user')}})
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setRatings(data.items);
          })
          .catch((err) => {
             console.log(err.message);
          });
     }, []);

    return(
        <>
            {ratings.map((rating) => {

            return (
            <>
                <h2>{rating.titleModel.primaryTitle}</h2>
                <p>My Rating: {rating.rating}</p>
            </>
            );
            })
         }
            
        </>
    )

}

export default MyRatings;