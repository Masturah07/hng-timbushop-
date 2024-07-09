import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// import { Link } from 'react-router-dom';

const NovelsNavbar = () => {
  return (
    <Navbar  expand="lg">
      <section className='novels'>
        <Container fluid className='noves'>
          
           <aside className='both'>
              <div className='vels'>
                <h3>Novels</h3>
              </div>
    
              <section className='options'>
                <div className='thrill'>
                  <Form.Select>
                    <option>All Genres <br />
                    </option>
                    <option value="1">Horror </option>
                    <option value="3">Thriller</option>
                    <option value="2">Fantancy</option>
                    <option value="3">Romance</option>
                    <option value="2">Adventure</option>
                  </Form.Select>
                </div>
      
                <div className='stock'>
                  <Form.Select>
                    <option>Latest Stocks <br />
                    </option>
                    <option value="1">All Novels </option>
                    <option value="3">Best Sellers</option>
                  </Form.Select>
                </div>
              </section>
           </aside>
            
        </Container>
       
      </section>
    </Navbar>
  );
};

export default NovelsNavbar;
