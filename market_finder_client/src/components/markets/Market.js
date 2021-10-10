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
        return () => console.log('This return function will run when the component is unmounted');
    }, [props.userMarkets, props.market.id])

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