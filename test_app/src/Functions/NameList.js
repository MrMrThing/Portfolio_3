import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const NamesList = () => {

   const [NextPage, setNextPage] = useState([]);
   const [LastPage, setLastPage] = useState([]);
   const [PrevPage, setPrevPage] = useState([]);

    const [posts, setPosts] = useState([]);
    useEffect(() => {
       fetch('http://localhost:5001/api/names/list')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data.items);
             setNextPage(data.nextPageUrl);
             setLastPage(data.lastPageUrl);
             setPrevPage(data.prevPageUrl)
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
 
    return(
       <div>
       
      <NavLink to={LastPage}>Last Page</NavLink>
      <NavLink to={PrevPage}>Previus Page</NavLink>
      <NavLink to={NextPage}>Next Page</NavLink>

          {posts.map((post) => {
             var array = post.basicName.url.split('/');
             var nconst = array[array.length-1];
                return (
                  <NavLink to={"/names/" + nconst}>
                     <div className="list-item" key={post.tconst}>
                        <h2>{post.basicName.primaryName}</h2>
                     </div>
                   </NavLink>
                );
             })
         }
       
       </div>
    )
 
 };

 export default NamesList;