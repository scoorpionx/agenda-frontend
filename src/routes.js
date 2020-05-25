import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Main from './pages/Main';
import New from './components/New/index';
import Edit from './components/Edit/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/signin" component={SignIn}/>
                <Route exact path="/pagina-inicial" component={Main}/>
                <Route exact path="/novo" component={New}/>
                <Route exact path="/editar" component={Edit}/>
            </Switch>
        </BrowserRouter>
    )
}