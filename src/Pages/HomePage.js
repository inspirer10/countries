import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import Pagination from '../Pagination.js';

import '../App.css';


function HomePage() {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [search, setSearch] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);

    //const [currentPage, setCurrentPage] = useState(1);
    //const [postsPerPage] = useState(4); //zmienić na 20

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/name/united')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    const handleClick = (e) => {
        e.preventDefault()

        if (!inputValue) {
            fetch('https://restcountries.eu/rest/v2/name/united')
            .then(res => res.json())
            .then(data => setData(data))
        } else {
            fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`)
                .then(res => res.json())
                .then(data => setData(data))
        }

        setSearch('')
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
/*
    const indexOfLastPost = (currentPage * postsPerPage);
    const indexOfFirstPost = (indexOfLastPost - postsPerPage);
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
*/
    useEffect(() => {
        setFilteredCountries(
            data.filter(country => {
                return country.name.toLowerCase().includes(search.toLowerCase());
            })
        )
    }, [search, data]);

    if (filteredCountries === []) {
        return (<h1>Loading</h1>)
    }

    return (
        <section>
            <form>
                <input className='input' type="text" onChange={handleChange} placeholder='Podaj nazwę kraju' />
                <button className='searchButton' onClick={handleClick}>Wyszukaj!</button>
            </form>

            <form>
                <input onChange={e=>setSearch(e.target.value)} className='input' type="text" placeholder='Sortuj' />
            </form>

            <article>
                {filteredCountries.map((element, index) =>(
                    <div key={index} className="item">
                        <Link to={element.name} target='_blank' rel="noreferrer">
                            <h3 className="name">{element.name}:</h3>
                            <ul>
                                <li className="capital">Stolica: <strong>{element.capital ? element.capital : '-'}</strong></li>
                                <li className="currency">Waluta: {element.currencies.map(currency => currency.code)}</li>
                            </ul>
                        </Link>
                    </div>
                ))}
            </article>
            {/*<Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} /> */}
        </section>
    );
}

export default HomePage;