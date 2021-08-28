import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserMarkets from '../components/markets/UserMarkets'
import MarketsContainer from '../containers/MarketsContainer'
import { BrowserRouter as Switch, Route } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markets: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/users/${this.props.current_user}/markets`)
            .then(response => response.json())
            .then(markets => {
                this.setState({ markets: markets });
            });

    }

    render() {
        return (
            <div>
                USER HOME PAGE
                <br />
                <br />
                <Switch>
                    <Route exact path='/' component={() => <UserMarkets userMarkets={this.state.markets} />} />
                    <Route path='/markets' component={() => <MarketsContainer userMarkets={this.state.markets} />} />
                </Switch>
                <br />

            </div>
        );
    }
}

export default Home;