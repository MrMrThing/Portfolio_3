import React, { useState, useEffect } from 'react';
import '../App.css';
import { 
    Routes, Route, Link, NavLink, useParams, Outlet, useNavigate, Navigate, json 
  } from "react-router-dom";

const Login = () => {

    var href = window.location.href;
    var array = href.split('/');

    var username = array[array.length-3];
    var password = array[array.length-1];

    var token = btoa(username+':'+password);

    sessionStorage.setItem('user', token);

   console.log(token);

     return(
        <>

            <h2>Created Bookmark</h2>        
        </>
     )

    

}

export default Login;