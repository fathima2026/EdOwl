import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import { NavLink } from 'react-bootstrap'

const Navigation = () => {
  const studentLoginStatus = localStorage.getItem('studentLoginStatus')
 
  return (
    <Navbar collapseOnSelect expand="lg" className="mynav" style={{height:'60px'}}>
   
     <Navbar.Brand href="#home">
            <img 
              style={{marginLeft:'10px'}}
              src="/Image/logo.png"
              width="130"
              className="d-inline-block align-top"
              alt="Website logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-link-style ms-auto" style={{paddingLeft:'80px'}}>
            <Nav.Link className='nav-link-style' href="#home" style={{marginRight:'30px'}}>Home</Nav.Link>
            <Nav.Link className='nav-link-style' href="#link" >About</Nav.Link>
            <Nav.Link className='nav-link-style'  href="#link"style={{marginLeft:'30px'}}>Contact</Nav.Link>

          </Nav>
      
      <Nav className="ms-auto">

      {/* <Button className="float-sm-end" variant="light">Sign Up</Button>
      <Button className="float-sm-end" variant="light">Sign In</Button> */}

      <NavDropdown style={{margin:"0 100px"}} className="Main-element tiny-scale" title="User" id="basic-nav-dropdown">
              {studentLoginStatus!='true' && <><NavDropdown.Item componentClass='span' as={Link} to="/role">Login</NavDropdown.Item>
              <NavDropdown.Item componentClass='span' as={Link} to="/regrole">Register</NavDropdown.Item></>}
              
             
              {studentLoginStatus=='true' && <>
              <NavDropdown.Item className='dropdown-text' componentClass='span'>Account settings</NavDropdown.Item>
              <NavDropdown.Item className='dropdown-text' componentClass='span'as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Item componentClass='span'as={Link} to="/student-logout">Logout</NavDropdown.Item></>}
             
      </NavDropdown>

      </Nav>
     
    </Navbar.Collapse>

  </Navbar>



  )
}

export default Navigation