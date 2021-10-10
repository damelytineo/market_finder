import React, { useEffect, useState } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom'
import Markets from '../components/markets/Markets'
import Market from '../components/markets/Market'

const MarketsContainer = (props) => {
    const [markets, setMarkets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/markets')
            .then(response => response.json())
            .then(markets => {
                setMarkets(markets);
            });
    }, [])

    return (
        <Switch>
            {/* <Market> content will depend on which market is clicked on - we can see this in url path */}
            <Route exact path={`/markets/:market_id`} render={routerProps => <Market {...routerProps} userMarkets={props.userMarkets} markets={markets} />} />
            <Route path="/markets" render={() => <Markets markets={markets} userMarkets={props.userMarkets} />} />
            <Redirect from="*" to="/index.html" />
        </Switch>
    );
};

export default MarketsContainer;

