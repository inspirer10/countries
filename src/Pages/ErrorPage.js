import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <Link to='/'><button className="backButton">Powrót</button></Link>
    )
}

export default ErrorPage;