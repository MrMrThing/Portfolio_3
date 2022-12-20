import React, { useState, useEffect } from 'react';
import './App.css';


const TitleDetailed = () => {

    var href = window.location.href;
    var array = href.split('/');

    var tconst = array[array.length-1];

    const [posts, setPosts] = useState([]);
    useEffect(() => {
       fetch('http://localhost:5001/api/titles/' + tconst)
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

    return(
       <div>
          {posts.map((post) => {

             })}
       </div>
    )

};

export default TitleDetailed;

