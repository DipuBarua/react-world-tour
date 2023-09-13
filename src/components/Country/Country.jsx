import { useState } from 'react';
import './Country.css'
export default
    function Country({ country }) {
    const { name, flags, population, area, languages, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h4>Name: {name?.common}</h4>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area} sq.km.</p>
            <p>language: {languages?.ara}</p>
            <p><small>code: {cca3}</small></p>

            <button className='btn' onClick={handleVisited}>{visited ? "visited" : "Going"}</button>
            {visited ? '  you have already visited!!!' : '  you should visit.'}
        </div>
    )
}