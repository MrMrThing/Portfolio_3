import React, { useState, useEffect } from 'react';
import './App.css';

import { 
   Routes, Route, Link, NavLink, useParams, Outlet
 } from "react-router-dom";

import TitlesList  from './Functions/TitleList.js';
import NamesList from './Functions/NameList.js';
import NameDetailed from './Functions/NameDetailed.js';
import TitleDetailed from './Functions/TitleDetailed.js';
import Top_Menu from './Functions/Top_menu.js';
import SearchList from './Functions/searchList.js';
import GetTitleCrew from './Functions/GetTitleCrew.js';
import UserPage from './Functions/UserPage.js';
import NameBookmarks from './Functions/NameBookmarks';
import DeleteNameBookmarks from './Functions/DeleteNameBookmark';
import CreateNameBookmarks from './Functions/CreateNameBookmark';
import Login from './Functions/Login.js';


const App = () => 

   <>
      <Routes>
         <Route path="/"                           element={<Top_Menu />}>
            <Route path="/titles"                  element={<TitlesList />}/>
            <Route path="/titles/:tconst"          element={<TitleDetailed />}>
               <Route path="/titles/:tconst/crew"  element={<GetTitleCrew />}/>
            </Route>
            <Route path="/login/username/:username/password/:password" element={<Login />}/>
            <Route path="/names"                   element={<NamesList />}/>
            <Route path="/names/:nconst"           element={<NameDetailed />}/>
            <Route path="/search/names"            element={<SearchList />}/>
            <Route path="/search/titles"           element={<SearchList />}/>
            <Route path="/userPage"                element={<UserPage />}>
               <Route path="/userPage/nameBookmarks"        element={<NameBookmarks />}/>
               <Route path="/userPage/nameBookmarks/delete/:nconst" element={<DeleteNameBookmarks />}></Route>
               <Route path="/userPage/nameBookmarks/create/:nconst" element={<CreateNameBookmarks />}></Route>
            </Route>
            
         </Route>

      </Routes>

   </>;


export default App;