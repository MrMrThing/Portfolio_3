import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const NamesList = () => {

   var page = (window.location.href.split('?'))[1];

   const [NextPage, setNextPage] = useState("");
   const [FirstPage,setFirstPage] = useState("");
   const [LastPage, setLastPage] = useState("");
   const [PrevPage, setPrevPage] = useState("");

    const [posts, setPosts] = useState([]);
    useEffect(() => {
       fetch('http://localhost:5001/api/names/list?' + page)
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data.items);   

             var LastPage_array = data.lastPageUrl.split('?');
             var FirstPage_array = data.firstPageUrl.split('?');
             var NextPage_array = data.nextPageUrl.split('?');
             var PrevPage_array = data.prevPageUrl.split('?');
             setLastPage(LastPage_array[1]);  
             setPrevPage(PrevPage_array[1]); 
             setFirstPage(FirstPage_array[1]);  
             setNextPage(NextPage_array[1]);

          })
          .catch((err) => {
             console.log(err.message);
          });
    }, [LastPage]);


    return(
      <div>

      <NavLink className="top-menu-button"to={"?"+FirstPage} onClick={FirstPage}>First Page</NavLink>
      <NavLink className="top-menu-button"to={"?"+PrevPage} onClick={PrevPage}>Previous Page</NavLink>
      <NavLink className="top-menu-button"to={"?"+NextPage} onClick={NextPage}>Next Page</NavLink>
      <NavLink className="top-menu-button"to={"?"+LastPage} onClick={LastPage}>Last Page</NavLink>

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