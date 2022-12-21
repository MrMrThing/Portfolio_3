import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


const GetTitleCrew = () => {

    var href = window.location.href;
    var array = href.split('/');

    var tconst = array[array.length-2];

    const [crew, setCrew] =useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/api/titles/' + tconst + '/crew')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setCrew(data.items);
          })
          .catch((err) => {
             console.log(err.message);
          });
     }, []);

     return(

        <div>

            {crew.map((crews) => {
                var array = crews.basicName.url.split('/');
                var nconst = array[array.length-1];
                return (
                    <NavLink to={'/names/list' + nconst}>
                        <div className='list-item'>
                            <h3>{crews.basicName.primaryName}</h3>
                            <p>Character Name: {crews.characterName}</p>
                            <p>Job: {crews.category}</p>
                            <p></p>
                        </div>
                    </NavLink>
                );
                })
            }

        </div>
     )

}

export default GetTitleCrew;
