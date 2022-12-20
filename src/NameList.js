import React, { useState, useEffect } from 'react';
import './App.css';

const NamesList = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
       fetch('http://localhost:5001/api/names')
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
                return (
                   <div className="list-item" key={post.tconst}>
                      <h2>{post.primaryName}</h2>
                      <p>Born: {post.birthYear}</p>
                      <p>Died: {post.deathYear}</p>
                   </div>
                );
             })}
       
       </div>
    )
 
 };

 export default NamesList;