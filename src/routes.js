import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './pages/Main';
import Box from './pages/Box';
import Dashboard from './pages/Dashboard';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/box/:id" component={Box} />
            <Route path="/boxes" component={Dashboard} />
        </Switch>
    </BrowserRouter>
);

export default Routes;