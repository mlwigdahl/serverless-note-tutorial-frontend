import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './containers/NotFound';

import Home from './containers/Home';
export default () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
    </Switch>
);