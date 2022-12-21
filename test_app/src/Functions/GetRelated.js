import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


const GetRelated = () => {

    var href = window.location.href;
    var array = href.split('/');

    var nconst = array[array.length-2];

    const [related, setRelated] =useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/api/names/' + nconst + '/contributing')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setRelated(data.items);
          })
          .catch((err) => {
             console.log(err.message);
          });
     }, []);

     return(

        <div>

            {related.map((movies) => {
                var array = movies.basicTitle.url.split('/');
                var tconst = array[array.length-1];
                return (
                    <NavLink to={'/titles/' + tconst}>
                        <div className='list-item'>
                            <h3>{movies.basicTitle.primaryTitle}</h3>
                            <p></p>
                        </div>
                    </NavLink>
                );
                })
            }

        </div>
     )

}

export default GetRelated;
