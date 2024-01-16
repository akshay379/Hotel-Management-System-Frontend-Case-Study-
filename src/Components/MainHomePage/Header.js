import React, { Component } from 'react'
import {Navbar,Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
             
            <Navbar className='navcolor' expand="lg" fixed='top'>
            <Container>
              <Navbar.Brand style={{fontSize:'1.5em'}} className='heading'><span>HMS</span></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll"  />
              <Navbar.Collapse id="navbarScroll" className="justify-content-end" style={{backgroundColor:' #0079b1;'}}>
                 
                  <Nav.Link><Link to='/' className='navlist'>Home</Link></Nav.Link>
                <Nav.Link ><Link to='/about' className='navlist'>About</Link></Nav.Link>         
       
    
       <NavDropdown
         id="nav-dropdown-white-example"
        //  className='navlist'
        title={<span className="text-light my-auto">Login</span>}
         style={{color:'white'}}
         menuVariant="white"
       >
           <Link to='/login' className='navlist'><NavDropdown.Item href="#action/3.1">Login as Owner</NavDropdown.Item></Link>
           <Link to='/receptionist' className='navlist'><NavDropdown.Item href="#action/3.2">Login as Receptionist</NavDropdown.Item></Link>
           <Link to='/manager' className='navlist'><NavDropdown.Item href="#action/3.3">Login as Manager</NavDropdown.Item></Link>
       </NavDropdown>
     <NavDropdown
         id="nav-dropdown-light-example"
         title={<span className="text-light my-auto">Register</span>}
         menuVariant="light"
       >
           <Link to='/sign-up' className='navlist'><NavDropdown.Item href="#action/3.1">Register as Owner</NavDropdown.Item></Link>
           <Link to='#/' className='navlist'><NavDropdown.Item href="#action/3.2">Register as Receptionist</NavDropdown.Item></Link>
       </NavDropdown>
                 
  
              </Navbar.Collapse>
            </Container>
          </Navbar>
        
        )
    }
}

export default Header
