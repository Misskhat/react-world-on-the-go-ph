import React, {use, useState} from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    const handleVisitedFlag = (country) => {
        const newVisitedFlag = [...visitedFlag, country];
        setVisitedFlag(newVisitedFlag)
    };
    const handleVisitedCountries = (country) => {
        console.log("visited countries clicked", country.name.common);
        const newVisitedCountires = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountires);
    };
    // console.log(countries);
    return (
        <div>
            <h1>In the countries: {countries.length} </h1>
            <h3>Visited Countries: {visitedCountries.length} </h3>
            <h3>Visited Countries flat: {visitedFlag.length}</h3>
            <ol>
                {visitedCountries.map((country) => (
                    <li key={country.cca3.cca3}>{country.name.common}</li>
                ))}
            </ol>
            <ol>
                {
                    visitedFlag.map(country => <img key={country.cca3.cca3} src={country.flags.flags.png} alt="" width={'80px'} height={'40px'} style={{marginLeft: '5px'}} /> )
                }
            </ol>

            <div className="countries">
                {countries.map((country) => (
                    <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                    ></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;
