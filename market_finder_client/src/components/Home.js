import React, { useEffect, useState } from 'react';
import UserMarkets from '../components/markets/UserMarkets';
import MarketsContainer from '../containers/MarketsContainer';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router'

const Home = (props) => {
    let [uMarkets, setMarkets] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/users/${props.currentUser}/markets`)
            .then(response => response.json())
            .then(markets => {
                setMarkets(markets);
            });
    }, [props.currentUser])

    const logout = () => {
        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include"
        }
        fetch(`http://localhost:3000/logout`, configObj)
    }

    return (
        <div>
            <Navbar>
                <Nav.Link href="/"> HOME </Nav.Link>
                <Nav.Link href="/markets">MARKETS</Nav.Link>
                <Nav.Link href="/login" onClick={() => logout()}>LOGOUT</Nav.Link>
            </Navbar>

            {(uMarkets.length > 0) ?
                <Switch>
                    <Route exact path='/' component={() => <UserMarkets userMarkets={uMarkets} />} />
                    <Route path='/markets' component={() => <MarketsContainer userMarkets={uMarkets} />} />
                </Switch>
                : <div>Loading</div>}
        </div>
    );
};

export default withRouter(Home);