import React, { useState, useEffect } from 'react';
import '../App.css';
import { 
    Routes, Route, Link, NavLink, useParams, Outlet
  } from "react-router-dom";
import DeleteNameBookmarks from './DeleteNameBookmark';

const SearchHistory = () => {

    const [histories, setHistories] =useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/api/users/user/searches', 
        {headers : {'Authorization': 'Basic ' + sessionStorage.getItem('user')}})
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setHistories(data.items);
          })
          .catch((err) => {
             console.log(err.message);
          });
     }, []);

    return(
        <>
            {histories.map((history) => {

            return (
            <>
                <NavLink to={"/names/"}>
                    <div className='list-item'>
                        <h2>{history.searchContent}</h2>
                    </div>
                    <Outlet />
                </NavLink>
            </>
            );
            })
         }
            
        </>
    )

}

export default SearchHistory;