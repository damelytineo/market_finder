import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom'
import Markets from '../components/markets/Markets'
import Market from '../components/markets/Market'

class MarketsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markets: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/markets')
            .then(response => response.json())
            .then(markets => {
                this.setState({ markets: markets });
            });
    }

    render() {
        return (
            <Switch>
                <Route exact path={`/markets/:market_id`} render={routerProps => <Market {...routerProps} userMarkets={this.props.userMarkets} markets={this.state.markets}/>} />
                <Route path="/markets" render={()=> <Markets markets={this.state.markets} userMarkets={this.props.userMarkets}/>} />
                <Redirect from="*" to="/index.html" />
            </Switch>
        );
    }
}

export default MarketsContainer;