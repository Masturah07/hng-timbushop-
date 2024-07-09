import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';


const CheckoutPage = () => {
    return (
        <Container className="mt-4">
            <h1>Checkout Order</h1>

<section>
                <Row>
                    {/* Order Summary */}
                    <Col md={4}>
                        <Card>
                            <Card.Header>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>Order Summary</span>
                                    <Button variant="outline-secondary" size="sm">Edit Cart
    
                                    </Button>
                                </div>
                            </Card.Header>
                            <Card.Body className='order'>
    
                                <ul>
                                    <li>The Last watch novel (1 copy) <span>#15,000</span></li>
                                    <li>Shipping and Handling <span>#0.00</span></li>
                                    <li>Tax <span>#0.00</span></li>
                                </ul>
    
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span> OrderTotal:      #15,000</span>
    
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
    
                    {/* Delivery Address Form */}
                    <Col md={4}>
                        <Card>
                            <Card.Header>Delivery Address</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="formFirstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter first name" />
                                    </Form.Group>
                                    <Form.Group controlId="formLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter last name" />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" placeholder="eg. you@booksmall.com" />
                                    </Form.Group>
                                    <Form.Group controlId="formTelephone">
                                        <Form.Label>Telephone</Form.Label>
                                        <Form.Control type="tel" placeholder="080 0000 0000" />
                                    </Form.Group>
                                    <Form.Group controlId="formAddress">
                                        <Form.Label>Delivery Address</Form.Label>
                                        <Form.Control type="text" placeholder="Enter delivery address" />
                                    </Form.Group>
                                    <Form.Group controlId="formState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control type="text" placeholder="Enter state" />
                                    </Form.Group>
                                    <Form.Group controlId="formCountry">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control as="select">
     
                                                <option>Nigeria</option>
                                                    
    
                                        {/* Add other countries as needed */}
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
    
                {/* Payment Details */}
        <Col md={4}>
          <Card>
            <Card.Header>Payment Details</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formPaymentMethod">
                  <Form.Label>Payment Method</Form.Label>
                  <div className="d-flex flex-column">
                    <Button variant="outline-primary" className="mb-2">Pay with Apple Pay</Button>
                    <Button variant="outline-primary" className="mb-2">Pay with Google Pay</Button>
                  </div>
                </Form.Group>
                <Form.Group controlId="formCardName">
                  <Form.Label>Name on Card</Form.Label>
                  <Form.Control type="text" placeholder="Name on card" />
                </Form.Group>
                <Form.Group controlId="formCardNumber">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control type="text" placeholder="Card number" />
                </Form.Group>
                <Form.Group controlId="formExpiration">
                  <Form.Label>Expiration Date</Form.Label>
                  <Form.Control type="text" placeholder="MM/YY" />
                </Form.Group>
                <Form.Group controlId="formCVV">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control type="text" placeholder="CVV" />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                  Place Order
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </section>
    </Container>
  );
};

export default CheckoutPage;
