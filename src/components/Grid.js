import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Grid = () => {

    // array of character objects  
    const [characters, setCharacters] = useState([])

    // array of location objects 
    const [locations, setLocations] = useState([])

    // array of episode objects 
    const [episodes, setEpisodes] = useState([])
    
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

      const getLocations = () => {
        axios
            .get('https://rickandmortyapi.com/api/location/')
            .then(response => {
                // successful 
                
                console.log("locations array:", response.data.results)

                // get locations array 
                setLocations(response.data.results); 
            })

            .catch(error => {
                // unsuccessful 
                console.error("The API is currently down:", error);
            });
      }

      const getEpisodes = () => {
        axios
            .get('https://rickandmortyapi.com/api/episode/')
            .then(response => {
                // successful 

                console.log("episodes array:", response.data.results)

                // get episodes array 
                setEpisodes(response.data.results); 
            })

            .catch(error => {
                // unsuccessful 
                console.error("The API is currently down:", error);
            });
      }

    getCharacters(); 
    getLocations(); 
    getEpisodes(); 

    }, []);
    
    return (
      <div>
          <h1>Hello</h1>
        {/* {movies.map(movie => (
          // previous way to create a movie card <MovieDetails key={movie.id} movie={movie} />
          
          // create movie card using MovieCard component 
          <Link to={`/movies/${movie.id}`}><MovieCard key={movie.id} movie={movie} /></Link>
        ))} */}
      </div>
    );
  }

export default Grid; 