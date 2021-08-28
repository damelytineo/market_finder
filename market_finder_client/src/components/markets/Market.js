import React, { Component } from 'react';
import Map from '../Map';

class Market extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayAdd: true,
        }
    }
    componentDidMount() {
        for (let i = 0; i < this.props.userMarkets.length; i++) {
            if ((this.props.userMarkets)[i].id == this.props.market.id) {
                console.log("already in list")
                this.setState({ displayAdd: false })
            }
        }
    }

    handleAdd = (id) => {
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({ "market_id": id })
        }

        fetch('http://localhost:3000//user_markets', configObj)

        this.setState({ displayAdd: false })
    }

    render() {
        return (
            <div>
                <h5>{this.props.market.name}</h5>
                <h5>{this.props.market.latitude}</h5>
                <h5>{this.props.market.longitude}</h5>

                <Map />

                {this.state.displayAdd ? <button value={this.props.market.id} onClick={() => this.handleAdd(this.props.market.id)}>ADD</button> : ""}

            </div>
        );
    }
}

export default Market;