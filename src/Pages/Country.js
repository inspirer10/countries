import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Country = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState();
    const [moreInfo, setMoreInfo] = useState(false);

    const pathname = window.location.pathname;
    var countryName = pathname.substr(1, pathname.length);

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
            .then(res => res.json())
            .then(data => setData(data))
        setLoading(true)
    }, [data, countryName]);

    if (data === [] || loading === false) {
        return <h1>Loading</h1>
    }

    const handleClick = () => {
        setMoreInfo(true)
    }

    return (
        <section>
            {data.map((element, index) => (
                <div key={index}>
                    <h2 className="name_subPage">{element.name}</h2><br></br>
                    <p className="capital_subPage">Stolica: <strong>{element.capital ? element.capital : '-'}</strong></p>
                    <p className="currency_subPage">Waluta: {element.currencies.map(currency => currency.code)}</p>
                    <p className="currency_subPage">{element.currencies.map(currency => currency.name)} - {element.currencies.map(currency => currency.symbol)}</p>
                    {   moreInfo ?
                        <>
                            <p class='country_info'>Population: {element.population}</p>
                            <p class='country_info'>Region: {element.subregion}</p>
                            <p class='country_info'>Language: {element.languages.map(language=> language.name)}</p><br></br>
                            <img src={element.flag} className='flag' alt={`${element.name} flag`}></img>
                        </>
                        : null
                    }
                </div>
            ))}

            <button onClick={handleClick} className="backButton">Pobierz więcej informacji!</button>

            <Link to={''}><button className="backButton">Powrót</button></Link>
        </section>
    )
}

export default Country;