import React, { useState, useEffect } from 'react';
import '../App.css';
import { 
    Routes, Route, Link, NavLink, useParams, Outlet
  } from "react-router-dom";

const NameBookmarks = () => {

    const [bookmarks, setBookmarks] =useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/api/users/user/nameBookmarks', 
        {headers : {'Authorization': 'Basic ' + sessionStorage.getItem('user')}})
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setBookmarks(data.items);
          })
          .catch((err) => {
             console.log(err.message);
          });
     }, []);

    return(
        <>
            {bookmarks.map((names) => {
            var array = names.basicName.url.split('/');
            var nconst = array[array.length-1];
            return (
            <>
                <NavLink to={"/names/" + nconst}>
                    <div className='list-item'>
                        <h2>{names.basicName.primaryName}</h2>
                    </div>
                    <Outlet />
                </NavLink>
                <NavLink className="top-menu-button" to={"/userPage/nameBookmarks/delete/" + nconst}>Delete Bookmark</NavLink>
            </>
            );
            })
         }
            
        </>
    )

}

export default NameBookmarks;