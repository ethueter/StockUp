import React from 'react';
import { Switch} from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import CurrentMarket from '../pages/CurrentMarket';
import Portfolio from '../pages/Portfolio';
import Research from '../pages/Research';
import Trade from '../pages/Trade';

export default function Routes() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/currentmarket" component={CurrentMarket} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/research" component={Research} />
        <Route path="/trade" component={Trade} />
      </Switch>
    );
}