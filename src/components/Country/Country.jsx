import React from 'react';
import './Country.css'

const Country = ({country}) => {
    // console.log(country.flags.flags.png)
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? <strong>Big Country</strong>: <strong>Small Country</strong>} </p>
        </div>
    );
};

export default Country;