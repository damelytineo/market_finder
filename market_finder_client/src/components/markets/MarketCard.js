// import React, { Component } from 'react';
// import Market from '../markets/Market';
// import Button from 'react-bootstrap/Button';


// class MarketCard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             displayMarket: false,
//         }
//     }

//     //let[displayMarket, setDisplayMarket] = useState(false);

//     render() {
//         return (
//             <div>
//                 {this.state.displayMarket ? <Market market={this.props.market} userMarkets={this.props.userMarkets} /> :
//                     <div>
//                         <p>{this.props.market.name}</p>
//                         <p>{this.props.market.street_address}</p>
//                         <p>{this.props.market.borough}</p>
//                         <Button variant="success" value={this.props.market.id} onClick={() => this.setState({ displayMarket: true })}>MORE...</Button>
//                         <br />
//                     </div>}
//             </div>
//         );
//     }
// }

// export default MarketCard;

import React, { useState } from 'react';
import Market from '../markets/Market';
import Button from 'react-bootstrap/Button';


const MarketCard = (props) => {
    let [displayMarket, setDisplayMarket] = useState(false);

    const handleDisplay = () => {
        setDisplayMarket(true);
    }

    return (
        <div>
            {displayMarket ? <Market market={props.market} userMarkets={props.userMarkets} /> :
                <div>
                    <p>{props.market.name}</p>
                    <p>{props.market.street_address}</p>
                    <p>{props.market.borough}</p>
                    <Button variant="success" value={props.market.id} onClick={handleDisplay}>MORE...</Button>
                    <br />
                </div>}
        </div>
    );
};

export default MarketCard;


