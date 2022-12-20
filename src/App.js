import React, { useState, useEffect } from 'react';
import './App.css';

import { 
   Routes, Route, Link, NavLink, useParams, Outlet
 } from "react-router-dom";

import TitlesList  from './TitleList.js';
import NamesList from './NameList.js';
import NameDetailed from './NameDetailed.js';
import TitleDetailed from './TitleDetailed.js';


const App = () => 

   <>
      <div className="top-menu">

         <select className="top-menu-select">
            <option>Category</option>
            <option>Names</option>
            <option>Titles</option>
            <option>Actors</option>
         </select>

         <input type="text" id="search-string"></input>
         <button className="top-menu-button">Search</button>

         <button className="top-menu-button">TV-Shows</button>
         <NavLink className="top-menu-button" to="/titles">Movies</NavLink>
         <NavLink className="top-menu-button" to="/names">Actors</NavLink>
         <button className="top-menu-button">USER</button>
      </div>

      

      <Routes>
         <Route path="/ "                element={<TitlesList />}/>
         <Route path="/titles"           element={<TitlesList />}/>
         <Route path="/titles/:tconst"   element={<TitleDetailed />}/>
         <Route path="/names"            element={<NamesList />}/>
         <Route path="/names/:nconst"   element={<NameDetailed />}/>

      </Routes>

   </>;








export default App;