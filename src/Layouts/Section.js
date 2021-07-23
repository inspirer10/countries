import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Country from '../Pages/Country';
import ErrorPage from '../Pages/ErrorPage';

function Section(){
    return(
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='' render={() => (<Country />)} />
            <Route component={ErrorPage} />
        </Switch>
    );
}

export default Section;