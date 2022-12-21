import React, { useState, useEffect } from 'react';
import '../App.css';
import { 
    Routes, Route, Link, NavLink, useParams, Outlet
  } from "react-router-dom";



const Top_Menu = () => {

    const [search_string, setSearch_string] = useState('');
    const [Category_select, setCategory_select] = useState('names');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <>
            <div className="top-menu">

            <select className="top-menu-select" id="Category-select" onChange={event => setCategory_select(event.target.value)}>
                <option>all</option>
                <option>names</option>
                <option>titles</option>
            </select>
            
            <input type="text" id="search-string" onChange={event => setSearch_string(event.target.value)}></input>
            <NavLink className="top-menu-button" to={"/search/" + Category_select + "?searchContent=" + search_string} >Search</NavLink>

            <NavLink className="top-menu-button" to="/titles">Movies</NavLink>
            <NavLink className="top-menu-button" to="/names">Actors</NavLink>
            <button className="top-menu-button">USER</button>

            <label>Username:</label>
            <input type="text" id="username" onChange={event => setUsername(event.target.value)}></input>

            <label>Password:</label>
            <input type="text" id="password" onChange={event => setPassword(event.target.value)}></input>

            <NavLink className="top-menu-button" to={"/login/username/" + username + "/" + "password/" + password}>Login</NavLink>
            
        </div>

        <Outlet />

      </>
    )

};

export default Top_Menu;