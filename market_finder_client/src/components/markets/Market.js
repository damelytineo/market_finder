// import React, { Component } from 'react';
// import Map from '../Map';
// import Button from 'react-bootstrap/Button';


// class Market extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             displayAdd: true,
//         }
//     }

//     componentDidMount() {
//         for (let i = 0; i < this.props.userMarkets.length; i++) {
//             if ((this.props.userMarkets)[i].id == this.props.market.id) {
//                 this.setState({ displayAdd: false })
//             }
//         }
//     }
//     //

//     handleAdd = (id) => {
//         let configObj = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             credentials: "include",
//             body: JSON.stringify({ "market_id": id })
//         }

//         fetch('http://localhost:3000//user_markets', configObj)

//         this.setState({ displayAdd: false })
//     }

//     render() {
//         return (
//             <div>
//                 <h5>{this.props.market.name}</h5>
//                 <h5>{this.props.market.latitude}</h5>
//                 <h5>{this.props.market.longitude}</h5>

//                 <Map latitude={this.props.market.latitude} longitude={this.props.market.longitude} />

//                 {this.state.displayAdd ? <Button variant="success" value={this.props.market.id} onClick={() => this.handleAdd(this.props.market.id)}>ADD</Button> : ""}
//             </div>
//         );
//     }
// }

// export default Market;

import React, { useEffect, useState } from 'react';
import Map from '../Map';
import Button from 'react-bootstrap/Button';

const Market = (props) => {
    let [displayAdd, setDisplayAdd] = useState(true);

    //useEffect is called after each render and when setState is used inside of it, it will cause the component to re-render which will call useEffect and so on...
    //passing an empty array as a second argument is away around this. The effect function should be called once after the first render only. 
    useEffect(() => {
        for (let i = 0; i < props.userMarkets.length; i++) {
            if ((props.userMarkets)[i].id == props.market.id) {
                setDisplayAdd(false)
            }
        }
    }, [])

    const handleAdd = (id) => {
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({ "market_id": id })
        }
        fetch('http://localhost:3000/user_markets', configObj)
        setDisplayAdd(false)
    }

    return (
        <div>
            <h5>{props.market.name}</h5>
            <h5>{props.market.latitude}</h5>
            <h5>{props.market.longitude}</h5>

            <Map latitude={props.market.latitude} longitude={props.market.longitude} />

            {displayAdd ? <Button variant="success" value={props.market.id} onClick={() => handleAdd(props.market.id)}>ADD</Button> : ""}
        </div>
    );
};

export default Market;