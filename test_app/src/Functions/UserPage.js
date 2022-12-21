import React, { useState, useEffect } from 'react';
import '../App.css';
import { 
    Routes, Route, Link, NavLink, useParams, Outlet
  } from "react-router-dom";

const UserPage = () => {

    return(
        <>
            <div>
                <NavLink to="nameBookmarks">Name Bookmarks</NavLink> 
                <NavLink>Title Bookmars</NavLink> 
                <NavLink to="searchHistory">Search History</NavLink> 
                <NavLink>My Ratings</NavLink> 
            </div>

            <Outlet />

        </>
    )

}

export default UserPage;