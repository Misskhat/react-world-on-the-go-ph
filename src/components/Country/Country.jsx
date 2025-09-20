import React, { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = ()=>{
    // system one
    //    if(visited){
    //     setVisited(false)
    //    }else{
    //     setVisited(true)
    //    }

    // system two
    // visited ? setVisited(false): setVisited(true)

    // system three
    setVisited(!visited)

    }
    // console.log(country.flags.flags.png)
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? <strong>Big Country</strong>: <strong>Small Country</strong>} </p>
            <button onClick={handleVisited}>
                {visited ? "Visited": "Not Visited"}
            </button>
        </div>
    );
};

export default Country;