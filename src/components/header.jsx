import React from 'react';

import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../assets/images/logo.png'

export default function AppHeader (){
  return (
    <section className='head'>
      
      <Navbar bg="light" expand="lg">
        <Container fluid>
  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Story Books</Nav.Link>
              <Nav.Link href="#" className='sel'>Novels</Nav.Link>
              <Nav.Link href="#">Educational Books</Nav.Link>
              <Nav.Link href="#">All</Nav.Link>
          
            </Nav>
  
            <Navbar.Brand href="#home" className='logo'>
              <a href='#'><img src={logo} alt="Logo"/></a>
  
          </Navbar.Brand>
            <aside className='left-menubar'>
                <Form className="d-flex form-border" >
               <Button variant="outline-success">
                    <i className="bi bi-search"></i>
                  </Button>
                  <FormControl
                    type="search"
                    placeholder="Search title, author"
                    className="me-2"
                    aria-label="Search"
                  />
                 
                </Form>
                <Nav.Link href="#" className="ml-3">
                <i class="bi bi-cart3" style={{ fontSize: '24px' }}></i>
                </Nav.Link>
            </aside>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};


