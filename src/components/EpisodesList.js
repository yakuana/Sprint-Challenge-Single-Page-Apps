import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import EpisodeCard from "./EpisodesCard"; 

export default function EpsiodeList() {
   // array of character objects  
   const [episodes, setEpisodes] = useState([])
   
   useEffect(() => {
      const getEpisodes = () => {
          axios
              .get('https://rickandmortyapi.com/api/episode/')
              .then(response => {
                  // successful 

                  console.log("episodes array:", response.data.results)
                  
                  // get character array 
                  setEpisodes(response.data.results); 
              })

              .catch(error => {
                  // unsuccessful 
                  
                  console.error("The API is currently down:", error);
              });
      }

      getEpisodes(); 

   }, []);

  return (
    <section className='episode-list grid-view'>

      {episodes.map(episode => {
          
          // create a character card for each character 
         return <Link to={`/episodes`}><EpisodeCard episode = {episode} /></Link>
      })}

    </section>
  ) 
  
}
