import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Moodle from './Moodle.png';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navigation.css";
import "../../index.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import { NavLink } from 'react-bootstrap'

const Navigation = () => {
  const studentLoginStatus = localStorage.getItem('studentLoginStatus')
 
  return (
    <div className="all-nav">
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
    {/* <Navbar.Brand href="https://moodle.bolton.ac.uk/my/" className="edowl"><img className="bolton-img" src="/Image/mixed.png" alt="Bolton Moodle" className="boltonMoodle"/></Navbar.Brand> */}
    <Navbar.Brand href="https://moodle.bolton.ac.uk/my/" className="edowl medium-scale"><img src={Moodle} alt="Bolton Moodle" className="bolton-img boltonMoodle" href="https://moodle.bolton.ac.uk/my/" /></Navbar.Brand>
    <Navbar.Brand className="edowl-title small-scale"> </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">

        {/* <NavLink className="tiny-scale" href={"/Feed"}>
              <span className='Main-element'> Feed </span>
          </NavLink> */}

        <Nav.Link className="tiny-scale" to="/">
          <span className='Main-element'>Home</span>
        </Nav.Link>

        <Nav.Link className="tiny-scale" >
          <span className='Main-element'>About us</span>
        </Nav.Link>

        <Nav.Link className="tiny-scale" >
          <span className='Main-element'>News</span>
        </Nav.Link>

        <Nav.Link className="tiny-scale" >
          <span className='Main-element'>Explore!</span>
        </Nav.Link>

        <Nav.Link className="tiny-scale">
          <span className='Main-element'> About Us </span>
        </Nav.Link>

        <NavDropdown className="Main-element tiny-scale" title="Updates" id="basic-nav-dropdown">
        
        </NavDropdown>

        <NavDropdown className="Main-element tiny-scale" title="Notes" id="basic-nav-dropdown">
        
        </NavDropdown>
    
      
      
    
      </Nav>
      
      <Nav className="ms-auto">

      {/* <Button className="float-sm-end" variant="light">Sign Up</Button>
      <Button className="float-sm-end" variant="light">Sign In</Button> */}

      <NavDropdown style={{margin:"0 100px"}} className="Main-element tiny-scale" title="User" id="basic-nav-dropdown">
              {studentLoginStatus!='true' && <><NavDropdown.Item componentClass='span' as={Link} to="/role">Login</NavDropdown.Item>
              <NavDropdown.Item componentClass='span' as={Link} to="/regrole">Register</NavDropdown.Item></>}
              
              <NavDropdown.Item >
              {studentLoginStatus=='true' && <>
              <NavDropdown.Item componentClass='span'>Account settings</NavDropdown.Item>
              <NavDropdown.Item componentClass='span'as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Item componentClass='span'as={Link} to="/student-logout">Logout</NavDropdown.Item></>}
              

              </NavDropdown.Item>
      </NavDropdown>

      </Nav>
     
    </Navbar.Collapse>
  </Navbar>

  {/* <div className="wave">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
  </div> */}
</div>

  )
}
{/* <Navbar.Brand className="edowl-title small-scale"> <Link to={"/"} className="edowl-link">Ed Owl</Link></Navbar.Brand> */}
{/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav"> */}
export default Navigation