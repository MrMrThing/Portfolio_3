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
import SearchList from './Functions/SearchList';
import SearchListTitles from './Functions/SearchListTitles.js';
import SearchListNames from './Functions/SearchListNames';
import GetTitleCrew from './Functions/GetTitleCrew.js';
import UserPage from './Functions/UserPage.js';
import NameBookmarks from './Functions/NameBookmarks';
import DeleteNameBookmarks from './Functions/DeleteNameBookmark';
import CreateNameBookmarks from './Functions/CreateNameBookmark';
import Login from './Functions/Login.js';
import SearchHistory from './Functions/SearchHistory';
import GetRelated from './Functions/GetRelated';
import Rating from './Functions/Rating';


const App = () => 

   <>
      <Routes>
         <Route path="/"                           element={<Top_Menu />}>
            <Route path="/titles"                  element={<TitlesList />}/>
            <Route path="/titles/:tconst"          element={<TitleDetailed />}>
               <Route path="/titles/:tconst/rate/:number"  element={<Rating />}/>
               <Route path="/titles/:tconst/crew"  element={<GetTitleCrew />}/>
            </Route>
            <Route path="/login/username/:username/password/:password" element={<Login />}/>
            <Route path="/names/list"               element={<NamesList />}/>
            <Route path="/names/:nconst"           element={<NameDetailed />}>
               <Route path="/names/:nconst/related" element={<GetRelated />}/>
            </Route>
            <Route path="/search/names"            element={<SearchListNames />}/>
            <Route path="/search/titles"           element={<SearchListTitles />}/>
            <Route path="/search/all"              element={<SearchList />}/>
            <Route path="/userPage"                element={<UserPage />}>
               <Route path="/userPage/ratings"     element={<MyRatings />}/>
               <Route path="/userPage/searchHistory"        element={<SearchHistory />}/>
               <Route path="/userPage/nameBookmarks"        element={<NameBookmarks />}/>
               <Route path="/userPage/nameBookmarks/delete/:nconst" element={<DeleteNameBookmarks />}></Route>
               <Route path="/userPage/nameBookmarks/create/:nconst" element={<CreateNameBookmarks />}></Route>
            </Route>

            
         </Route>

      </Routes>

   </>;


export default App;