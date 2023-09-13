import './Country.css'
export default
    function Country({ country }) {
    const { name, flags, population, area, languages, cca3 } = country;
    return (
        <div className='country'>
            <h4>Name: {name?.common}</h4>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area} sq.km.</p>
            <p>language: {languages?.ara}</p>
            <p><small>code: {cca3}</small></p>
        </div>
    )
}