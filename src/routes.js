import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/index';
import Login from './pages/Login/index';

function Routes() {
    return (
        
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/homepage" component={Homepage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;