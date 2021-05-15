import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import MarketsContainer from '../containers/MarketsContainer'

//import { Redirect } from 'react-router-dom';

class Router extends Component {
    render() {
        return (

            <div>
                <Switch>
                    <Route exact path='/' component={() => <Home current_user={this.props.current_user} />} />

                    <Route path='/markets' component={MarketsContainer} />
                </Switch>
            </div>
        );
    }
}

export default Router;