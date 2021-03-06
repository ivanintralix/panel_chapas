import React, { useState, useEffect } from 'react';
import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import { FaLock, FaArrowAltCircleDown, FaSearch } from 'react-icons/fa';
import { Accordion, Card, Button, InputGroup, FormControl } from 'react-bootstrap';

const MenuAcciones = ({unidades, grupos, positionCurrentMarket}) => {
  
  const [gruposModal, setGruposModal] = useState(grupos);
  

  const buscarUnidad = e => {
    e.preventDefault();
    const arrayGrupos = [];
    let tempGrupos = grupos;
    tempGrupos = tempGrupos.filter(grupo =>(grupo.unidades.filter(unidad => unidad.toString().search(e.target.value) !== -1)).length > 0);
    tempGrupos.map(grupo => {
      const grupoT = grupo;
      const unidadesT = grupoT.unidades.filter(unidad => unidad.toString().search(e.target.value) !== -1 );
      arrayGrupos.push({id:grupoT.id,nombre:grupoT.nombre,unidades:unidadesT});
    })
    console.log(arrayGrupos);
    setGruposModal(arrayGrupos);
  }

  return ( 
      <ProSidebar className='sidebaracciones' >
        <SidebarHeader>
          <div className='sidebarMNHeader' >
            <Button variant="outline-success">Abrir</Button>{' '}
            <Button variant="outline-primary">Restablecer</Button>{' '}
            <Button variant="outline-warning">Cerrar</Button>{' '}
            <br></br><br></br>
            <InputGroup onChange={ buscarUnidad } size="sm" className="mb-3">
              <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm"><FaSearch/></InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
          </div>
        </SidebarHeader>
        <SidebarContent>
          {/**Acordeon que me acumula todo un grupo */}
          {
            gruposModal.map(grupo => (
              <Accordion key={grupo.id + "G"} defaultActiveKey="0">
                <Card>
                    <Card.Header >
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <FaArrowAltCircleDown />{grupo.nombre}
                        </Accordion.Toggle>
                        <input className="checbokGroup" type="checkbox" />
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        {/**Todas las unidades del grupo */}
                        <Card.Body style={{padding: "10px 10px 10px 20px", color: "#000000"}}>
                          {
                            grupo.unidades.map(unidad => (
                              <span key={unidad + "MA"} style={{cursor: "pointer"}} onClick={ () => positionCurrentMarket(unidad)}>
                                <span><FaLock size={20} /> Unidad: {unidad}</span>
                                <input className="checbokUnidad" type="checkbox" />
                                <br></br>
                              </span>  
                            ))
                          }  
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
              </Accordion>
            ))
          }
          
        </SidebarContent>
        <SidebarFooter>
          <div className="sidebar-btn-wrapper sidebarMNFooter" >
            <h2>Alertas</h2>
            <p style={{color: "red"}}>Unidad: 25789  Sistema violado</p>
            <p style={{color: "green"}}>Unidad: 25789  Chapa abierta</p>
            <p style={{color: "orange"}}>unidad: 25789  Chapa cerrada</p>
          </div>
        </SidebarFooter>
      </ProSidebar>
    );
}
 
export default MenuAcciones;