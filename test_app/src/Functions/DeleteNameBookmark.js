import React, { useState, useEffect } from 'react';
import '../App.css';
import { 
    Routes, Route, Link, NavLink, useParams, Outlet, useNavigate, Navigate 
  } from "react-router-dom";

const DeleteNameBookmarks = () => {

    var href = window.location.href;
    var array = href.split('/');

    var nconst = array[array.length-1];
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5001/api/users/user/nameBookmarks/' + nconst, 
            {headers : {'Authorization': 'Basic dGVzdFVzZXI6cDRzc1cwcmQ='},
             method : "DELETE"})
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

            <h2>Deleted Bookmark</h2>        
            {navigate(".../")}
        </>
     )

    

}

export default DeleteNameBookmarks;