import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import './style.css';

export default function Mapa({ dados }) {
    const position = { lat: -23.570328, lng: -46.646204 };
    return (
        <div className="mapa-container">
            <Map
                center={position}
                zoom={17}
                style={{ width: '100%', height: '500px' }}
            >
                <Popup className="pop" position={position}>
                    <h3 className="titulo">Hubway Agência</h3>
                    <p className="corpo">
                        Av Paulista, 171<br></br>
                        4º Andar
                    </p>
                </Popup>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </Map>
        </div>
    );
}
