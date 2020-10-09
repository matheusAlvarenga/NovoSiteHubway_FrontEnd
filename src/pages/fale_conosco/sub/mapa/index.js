import React from 'react';
import { Map } from 'react-leaflet';

import './style.css';

export default function Mapa({ dados }) {
    const position = [51.505, -0.09];
    return (
        <div className="mapa-container">
            <Map
                center={position}
                zoom={11}
                style={{ width: '100%', height: '500px' }}
            ></Map>
        </div>
    );
}
