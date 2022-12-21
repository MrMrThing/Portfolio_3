import React, { useState, useEffect } from 'react';
import '../App.css';
import { 
   Routes, Route, Link, NavLink, useParams, Outlet
 } from "react-router-dom";


const SearchList = () => {


   
    var href = window.location.href;
    var searchcontent_array = href.split('/');

    var searchcontent = searchcontent_array[searchcontent_array.length-1];

    const [names, setNames] = useState([]);
    const [titles, setTitles] = useState([]);
    useEffect(() => {
       fetch('http://localhost:5001/api/search/'+ searchcontent)
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setNames(data.nameResults.nameResultItems);
             setTitles(data.titleResults.titleResultItems)
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

    return(
        <div>
         
         <h2>Titles</h2>

         {titles.map((title) => {

            var array = title.basicTitle.url.split('/');
            var tconst = array[array.length-1];

            return (
               <>
                  <div>
                     <NavLink to={"/titles/" + tconst}>
                        <div className="list-item">{title.basicTitle.primaryTitle}</div>
                     </NavLink>
                  </div>
               </>
            );
            })
         }

         <h2>Names</h2>

         {names.map((name) => {

            var array = name.basicName.url.split('/');
            var nconst = array[array.length-1];

            return(
               <>
                  <NavLink to={"/names/" + nconst}>
                           <div className="list-item">{name.basicName.primaryName}</div>
                  </NavLink>
               </>
            )

         })}

      </div>  
    )

};

export default SearchList;
