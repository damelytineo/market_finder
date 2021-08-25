import React from 'react';
import Map from '../Map'


const Market = ({ market }) => {
    return (
        <div>
            <h5>{market.name}</h5>
            <h5>{market.latitude}</h5>
            <h5>{market.longitude}</h5>

            <Map />
        </div>
    );
};

export default Market;

