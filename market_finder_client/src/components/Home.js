import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserMarkets from '../components/markets/UserMarkets'


class Home extends Component {

    render() {
        return (
            <div>
                USER HOME PAGE
                <p>User's saved markets:</p>
                <UserMarkets current_user={this.props.current_user} />
                <br />
                <Link to='/markets'><button>Markets</button></Link>
            </div>
        );
    }
}

export default Home;