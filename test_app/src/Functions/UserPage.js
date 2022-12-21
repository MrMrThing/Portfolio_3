import React, { useState, useEffect } from 'react';
import '../App.css';
import { 
    Routes, Route, Link, NavLink, useParams, Outlet
  } from "react-router-dom";

const UserPage = () => {

    return(
        <>
            <div>
                <NavLink className="top-menu-button" to="nameBookmarks">Name Bookmarks</NavLink> 
                <NavLink className="top-menu-button">Title Bookmarks</NavLink> 
                <NavLink className="top-menu-button" to="searchHistory">Search History</NavLink> 
                <NavLink className="top-menu-button" to="ratings">My Ratings</NavLink> 
            </div>

            <Outlet />

        </>
    )

}

export default UserPage;