import React, { useState, useEffect } from 'react';
import '../App.css';
import { 
    Routes, Route, Link, NavLink, useParams, Outlet, useNavigate, Navigate, json 
  } from "react-router-dom";


const CreateNameBookmarks = () => {

    var href = window.location.href;
    var array = href.split('/');

    var nconst = array[array.length-1];
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch('http://localhost:5001/api/users/user/nameBookmarks', 
            {headers : {'Authorization': 'Basic ' + sessionStorage.getItem('user'), 'Content-Type': 'application/json'} ,
             method : "POST",
             body : JSON.stringify({"nconst" : nconst})})
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

            <h2>Created Bookmark</h2>        
            {navigate(".../")}
        </>
     )

    

}

export default CreateNameBookmarks;