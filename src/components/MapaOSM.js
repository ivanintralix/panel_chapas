import { faWineGlass } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, MapConsumer } from 'react-leaflet'
const position = [20.745675621278505, -103.34453047338549]

const MapaOSM = ({unidades, marketPosition}) => {

    return ( 
        <MapContainer className="map" center={marketPosition} zoom={13} scrollWheelZoom={false} style={{height: '400px; !important'}} >
        <MapConsumer>
          {(map) => {
            map.flyTo(marketPosition, map.getZoom())
            return null
          }}
        </MapConsumer>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          unidades.map(unidad => (
            <Marker key={unidad.id + "M"} position={[unidad.informacion.lat,unidad.informacion.lng]}>
              <Popup>
                Unidad: {unidad.id}
                <br></br>
                Información
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Coordenadas</th>
                      <th scope="col">Direccion</th>
                      <th scope="col">Fecha</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{unidad.informacion.lat}<br></br>{unidad.informacion.lng}</td>
                      <td>{unidad.informacion.direccion}</td>
                      <td>{unidad.informacion.fecha}</td>
                    </tr>
                  </tbody>
                </table>
                programacion
                <br></br>
                {
                  unidad.reglas.map(regla => (
                    <div key={regla.nombre} >
                      {regla.nombre} 
                      <br></br>
                      Hora : {regla.hora}
                      <br></br>
                      Comando : {regla.comando}
                      <br></br>
                      {
                        regla.tipo === 'recurrente' ? 
                          <span>Recurente: {regla.dias.map(dia => (<span key={dia}>{dia}, </span>))}</span>
                        : 
                          <span>Fecha : {regla.fecha} </span>
                      }
                    </div>
                  ))
                }
              </Popup>
            </Marker>
          ))
        }
      </MapContainer>
    );
}
 
export default MapaOSM;