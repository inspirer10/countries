import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Section from './Section.js';
import '../App.css';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className='App'>
                {<Section />}
            </div>
        </Router>
    );
}

export default App;