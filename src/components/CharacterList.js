import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import CharacterCard from "./CharacterCard"; 

export default function CharacterList() {
   // array of character objects  
   const [characters, setCharacters] = useState([])
   
   useEffect(() => {
      const getCharacters = () => {
          axios
              .get('https://rickandmortyapi.com/api/character/')
              .then(response => {
                  // successful 

                  console.log("characters array:", response.data.results)
                  
                  // get character array 
                  setCharacters(response.data.results); 
              })

              .catch(error => {
                  // unsuccessful 
                  
                  console.error("The API is currently down:", error);
              });
      }

      getCharacters(); 

   }, []);

  return (
    <section className='character-list grid-view'>

      {characters.map(character => {
          
          // create a character card for each character 
         return <Link to={`/characters`}><CharacterCard character = {character} /></Link>
      })}

    </section>
  ) 
  
}
