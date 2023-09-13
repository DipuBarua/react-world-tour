import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>hello show all countries</h1>
            <h2>countries: {countries.length}</h2>
            <div className="countries">
                {countries.map(country => <Country
                    key={country.cca3}
                    country={country}>
                </Country>)}
            </div>
        </div>
    );
};

export default Countries;