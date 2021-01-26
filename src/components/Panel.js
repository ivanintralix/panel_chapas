import React, { useState, useEffect } from 'react';
import Menu from "./Menu";
import MapaOSM from "./MapaOSM";
import MenuAcciones from "./MenuAcciones";
import "../index.css";

import { unidades, grupos } from "../temporales/unidades";

const Panel = () => {
    
    const [ marketPosition, setMarketPosition] = useState({ lat: '20.6425581900204', lng: '-103.43760089237433' })

    const positionCurrentMarket = id => {
        const unidad = unidades.filter( unidad => unidad.id === id);
        const { lat, lng } = unidad[0].informacion;
        setMarketPosition({lat,lng});
    }
    return ( 
        <div>
            <Menu />
            <div className='mapaInicio'>
                <MapaOSM 
                    unidades={unidades} 
                    marketPosition={marketPosition} 
                />
            </div>
            <MenuAcciones 
                unidades={unidades} 
                grupos={grupos} 
                positionCurrentMarket={ positionCurrentMarket }
            />
        </div> 
    );
}
 
export default Panel;