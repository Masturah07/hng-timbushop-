import React from 'react';
import { Container, Row, Col, Button, Table, Image, ButtonGroup } from 'react-bootstrap';
import last from '../assets/images/last.jpg'


const ShoppingCart = () => {
  const books = [
    {
      id: 1,
      title: 'The Last watch',
      author: ' j.s.Dewes',
      genre: 'Adventure',
      price: 15000,
      quantity: 1,
      image: last,
      bestSeller: true,
    },

  ];

  const handleRemove = (id) => {
    // Handle remove logic
  };

  const handleQuantityChange = (id, delta) => {
    // Handle quantity change logic
  };

  const totalAmount = books.reduce((acc, book) => acc + book.price * book.quantity, 0);
  const [discount, setDiscount] = useState(0.00);

  return (
    <section className='shopping'>
      Shopping cart
      {/* <Container fluid className="mt-4">
        <aside className='shop'>
          <div className='arrow'><i class="bi bi-arrow-left"></i><h3>Back</h3></div>
          <div className='my'><h1>Shopping Cart</h1></div>
        </aside>

        <article className='tabs'>
          <Table striped bordered hover>
            <thead className='detail'>
              <tr className='prb'>
                <div className='bq'>
                  <th className='tail'>Book Details</th>
                  <th className='quan'>Quantity</th>
                  <th className='move'>Remove</th>
                  <th className='rice'>Price</th>
                </div>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>

                  <Row>

                    <section className='round'>


                      <div className='bm'>
                        <Image src={book.image} rounded />
                        {book.bestSeller && <div className="best-seller-box"><h5>#1Best Seller</h5></div>}
                      </div>
                      <div className='story'>
                        <h5>{book.title}</h5>
                        <p className='p1'>by {book.author}</p>
                        <p className='p2'>Hard Cover</p>
                        <p className='p3'>Genre: {book.genre}</p>
                      </div>

                      <Col className='second'>
                        <ButtonGroup>
                          <Button variant="outline-secondary" size="sm" onClick={() => handleQuantityChange(book.id, -1)}>-</Button>
                          <Button variant="light" size="sm" disabled>{book.quantity}</Button>
                          <Button variant="outline-secondary" size="sm" onClick={() => handleQuantityChange(book.id, 1)}>+</Button>
                        </ButtonGroup>
                      </Col>


                      <div className='sec'>
                        <Button variant="light" size="sm" onClick={() => handleRemove(book.id)}>
                          <span aria-hidden="true">&times;</span>
                        </Button>
                      </div>

                      <div className='owo'>#{book.price.toLocaleString()}</div>
                    </section>
                  </Row>
                
                    <Row>
                      <Col md={{ span: 6, offset: 3 }}>
                        <Card>
                          <Card.Body>
                            <InputGroup className="mb-3">
                              <FormControl
                                placeholder="Discount"
                                aria-label="Discount"
                              />
                              <InputGroup.Text className="ms-3">₦{discount.toFixed(2)}</InputGroup.Text>
                            </InputGroup>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>

                  </section>




                </tr>
              ))}
            </tbody>
          </Table>

        </article>

      </Container> */}
    </section>
  );
};

export default ShoppingCart;
