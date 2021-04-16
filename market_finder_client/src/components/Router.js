import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Home from './Home';
import LogIn from './LogIn'
//import { Redirect } from 'react-router-dom';

class Router extends Component {
    render() {
        return (
            <div>
                 <Switch>
                    <Route exact path='/' component={Home} />
                    {/* <Route exact path='/login' component={LogIn} /> */}
                </Switch>
            </div>
        );
    }
}

export default Router;