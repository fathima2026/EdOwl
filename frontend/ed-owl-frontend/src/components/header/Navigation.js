import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css'
import { Link } from 'react-router-dom';
const Navigation = () => {
  const studentLoginStatus = localStorage.getItem('studentLoginStatus')
 
  return (
    <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect>
  
    <Navbar.Brand href="#home"style={{marginLeft:'25px'}}>
    <img 
              style={{margin:'0px',padding:'0px'}}
              src="/Image/logo.png"
              width="130"
              className="d-inline-block align-top"
              alt="Website logo"
            />
          </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link style={{color:'black',fontSize:'18px'}} href="#features">Home</Nav.Link>
          <Nav.Link style={{color:'black',fontSize:'18px'}} href="#pricing">About</Nav.Link>
          <Nav.Link style={{color:'black',fontSize:'18px'}} href="#pricing">Contact</Nav.Link>
          <Nav.Link style={{color:'black',fontSize:'18px'}} href="#pricing">Dashboard</Nav.Link>
          <Nav.Link style={{color:'black',fontSize:'18px'}} href="#pricing">News</Nav.Link>
        </Nav>
        <Nav style={{marginRight:'35px'}}>
        <NavDropdown title="USER" id="collapsible-nav-dropdown" style={{fontSize:'18px',color:'blue'}}>
          {studentLoginStatus!='true' && <>
              
              <NavDropdown.Item componentClass='span' as={Link} to="/role">Login</NavDropdown.Item>
              <NavDropdown.Item componentClass='span' as={Link} to="/regrole">Register</NavDropdown.Item></>}
              
             
              {studentLoginStatus=='true' && <>
              <NavDropdown.Item componentClass='span' as={Link} to="/regrole">Register</NavDropdown.Item>
              <NavDropdown.Item className='dropdown-text' componentClass='span'as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Item  componentClass='span'as={Link} to="/student-logout">Logout</NavDropdown.Item></>}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
  
  </Navbar>
  )
}

export default Navigation