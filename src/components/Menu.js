import React, { useState, useEffect } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import { FaCog, FaLock, FaWrench } from 'react-icons/fa';

const MenuLateral = () => {

  const [collapsed, setCollapsed] = useState(true);
  
  const outSidebar = () => {
    setCollapsed(true)
  }

  const openSidebar = () => {
    setCollapsed(false)
  }
  return ( 
    <ProSidebar
      className='sidebarinicio'
      collapsed={collapsed}
      breakPoint="md"
      onMouseLeave={() => outSidebar()}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          <FaLock 
            onClick={() => openSidebar()}
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<FaLock />}>Panel</MenuItem>
          <MenuItem icon={<FaWrench />}>Equipos</MenuItem>
          <MenuItem icon={<FaCog />}>Programción</MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        ></div>
      </SidebarFooter>
    </ProSidebar>
  );
}
 
export default MenuLateral;