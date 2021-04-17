import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Home from './Home';
import Markets from './Markets'
//import { Redirect } from 'react-router-dom';

class Router extends Component {
    render() {
        return (
            <div>
                 <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/markets' component={Markets} />
                    {/* <Route exact path='/login' component={LogIn} /> */}
                </Switch>
            </div>
        );
    }
}

export default Router;