import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import LocationCard from "./LocationCard"; 

export default function LocationsList() {
    // array of location objects 
    const [locations, setLocations] = useState([])

       
    useEffect(() => {
        const getLocation = () => {
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

        getLocation(); 
   
    }, []); 
        
    

    return (
        <section className='locations-list grid-view'>

            {locations.map(location => {
            
            // create a location card for each location 
            return <Link to={`/locations`}><LocationCard name = {location.name} type = {location.type} dimension = {location.dimension} residents = {location.residents} /></Link>

            })}

        </section>
    )
}
