import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (


    <div class="sidenav">
  <NavLink exact to="/teacher/courses" style={{marginTop:'40px'}}><i class="fa-solid fa-graduation-cap" style={{marginRight:'47px'}}></i>Dashboard</NavLink>
  <NavLink exact to="/teacher/courses"><i class="fa-solid fa-book-open"style={{marginRight:'48px'}}></i>Courses</NavLink>
  <NavLink exact to="/teacher/courses"><i class="fa-solid fa-envelope"style={{marginRight:'50px'}}></i>Messages</NavLink>
  <NavLink exact to="/teacher/courses"><i class="fa-regular fa-address-card"style={{marginRight:'48px'}}></i>Profile</NavLink>
  
</div>

    // <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
    //   <CDBSidebar textColor="black" backgroundColor="white">
    //     <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
    //       <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
    //       </a>
    //     </CDBSidebarHeader>

    //     <CDBSidebarContent className="sidebar-content">
    //       <CDBSidebarMenu>
    //         <NavLink exact to="/" activeClassName="activeClicked">
    //           <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
    //         </NavLink>
    //         <NavLink exact to="/teacher/courses" activeClassName="activeClicked">
    //           <CDBSidebarMenuItem icon="table">Courses</CDBSidebarMenuItem>
    //         </NavLink>
    //         <NavLink exact to="/profile" activeClassName="activeClicked">
    //           <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
    //         </NavLink>
    //         <NavLink exact to="/analytics" activeClassName="activeClicked">
    //           <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
    //         </NavLink>

    //         <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
    //           <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
    //         </NavLink>
    //       </CDBSidebarMenu>
    //     </CDBSidebarContent>

    
    //   </CDBSidebar>
    // </div>
  );
};

export default Sidebar;