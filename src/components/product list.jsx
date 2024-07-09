import React from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import logo from '../assets/images/logo.png'
import Form from 'react-bootstrap/Form';



// Import images
import wildeInLove from '../assets/images/wilde in love.jpg';
import solarBones from '../assets/images/solar bone.jpg';
import jaws from '../assets/images/jaws.webp';
import lastWatch from '../assets/images/last watch.jpg';
import dragon from '../assets/images/dragon.jpg';
import thread from '../assets/images/thread.jpg';
import harry from '../assets/images/harry.png';
import demon from '../assets/images/demon.jpg';
import memory from '../assets/images/memory.jpg';
import unsee from '../assets/images/unsee.jpg';

// Dummy data for the products
const products = [
    {
        id: 1,
        name: 'Wilde in Love',
        description: 'Genre: Romance',
        image: wildeInLove,
        price: '#15,000',
    },
    {
        id: 2,
        name: 'Solar Bones',
        description: 'Genre: Horror',
        image: solarBones,
        price: '#15,000',
    },
    {
        id: 3,
        name: 'Jaws',
        description: 'Genre: Thriller',
        image: jaws,
        price: '#15,000',
    },
    {
        id: 4,
        name: 'The Last Watch',
        description: 'Genre: Adventure',
        image: lastWatch,
        price: '#15,000',
    },
    {
        id: 5,
        name: 'Enchanting Dragon Lord',
        description: 'Genre: Fantasy',
        image: dragon,
        price: '#15,000',
    },
    {
        id: 6,
        name: 'Thread',
        description: 'Genre: Horror',
        image: thread,
        price: '#15,000',
    },
    {
        id: 7,
        name: 'Harry Porter',
        description: 'Genre: Adventure',
        image: harry,
        price: '#15,000',
    },
    {
        id: 8,
        name: 'Spirit Demon',
        description: 'Genre: Fantasy',
        image: demon,
        price: '#15,000',
    },
    {
        id: 9,
        name: 'Memory',
        description: 'Genre: Romance',
        image: memory,
        price: '#15,000',
    },
    {
        id: 10,
        name: 'Unsee Lie',
        description: 'Genre: Thriller',
        image: unsee,
        price: '#15,000',
    },
];

const AppList = () => {
    return (
        <div className='full-container'>
            <Container>
                <Row className='map'>
                    {products.map(product => (
                        <Col style={{ margin: '10px' }} key={product.id} sm={12} md={6} lg={4} xl={2} className='book-column'>
                            <Card style={{ margin: '10px' }}>
                                <div className='image-container'><Card.Img variant="top" src={product.image} /></div>
                                <Card.Body className='list-body'>
                                    <Card.Title className='product-tittle'>{product.name}</Card.Title>
                                    <Card.Text className='product-discription'>{product.description}</Card.Text>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="price">{product.price}</div>
                                        <Button variant="primary" className='button' >Add to Cart</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <main className='down'>
                <Container fluid>
                    <section className='sub'>
                        <div className='subscribe'>
                            <h3>Subscribe to Our FREE VIP Email Alerts.</h3>
                            <p>sign up today and never miss our new books and sales deals again.</p>
                        </div>
                        <Form className='holder'>
                            <Row className='form-el'>
                                <Col className='mail' >
                                    <Form.Control placeholder="Enter your email" />
                                </Col>
                                <Col > <Button type="submit">Sign Up</Button></Col>
                            </Row>
                        </Form>
                    </section>

                    <section className='bile'>
                        <aside className='mobile'>
                            <h3>Download Mobile App</h3>
                        </aside>
                        <aside className='download'>
                            <Col className='btn'>
                                <Button type="submit">
                                    <div className='apple'>
                                        <svg width="40" height="40" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M33.275 28.5183C32.8135 29.5942 32.2433 30.62 31.5733 31.58C30.6783 32.8583 29.9433 33.7417 29.38 34.2333C28.505 35.0367 27.565 35.45 26.56 35.4733C25.84 35.4733 24.97 35.2683 23.9567 34.8517C22.94 34.4367 22.0067 34.2333 21.1517 34.2333C20.2567 34.2333 19.2967 34.4367 18.2683 34.8517C17.2417 35.2683 16.4117 35.4867 15.7767 35.5067C14.815 35.5483 13.8533 35.125 12.895 34.2333C12.2833 33.7 11.5183 32.7833 10.6 31.4867C9.61668 30.105 8.80834 28.4967 8.17501 26.6683C7.49668 24.69 7.15668 22.7767 7.15668 20.9233C7.15668 18.8017 7.61501 16.97 8.53334 15.4367C9.22792 14.2324 10.2209 13.2274 11.4167 12.5183C12.5958 11.8111 13.9418 11.4303 15.3167 11.415C16.0833 11.415 17.0883 11.6517 18.3333 12.1183C19.5783 12.585 20.3783 12.8217 20.7267 12.8217C20.99 12.8217 21.875 12.5433 23.3817 11.9917C24.8033 11.48 26.0033 11.2683 26.9867 11.3517C29.6533 11.5667 31.655 12.6167 32.9867 14.51C30.6033 15.955 29.425 17.9767 29.4483 20.5717C29.4683 22.5933 30.2033 24.275 31.6433 25.61C32.28 26.2192 33.0228 26.7067 33.835 27.0483C33.6583 27.56 33.4717 28.0483 33.275 28.5183ZM27.1633 4.46667C27.1633 6.05 26.5833 7.53 25.4317 8.89833C24.0383 10.525 22.355 11.4667 20.53 11.3183C20.5061 11.1192 20.4945 10.9189 20.495 10.7183C20.495 9.19666 21.155 7.57 22.3333 6.23833C22.92 5.565 23.6667 5.00333 24.5717 4.55667C25.475 4.11667 26.3283 3.87333 27.1317 3.83167C27.1533 4.045 27.1633 4.25667 27.1633 4.46667Z" fill="#2A192B" />
                                        </svg>

                                        <div className='store'>
                                            <h3>Download on the <span>App Store</span></h3>
                                        </div>
                                    </div>
                                </Button>
                            </Col>
                        </aside>
                        <aside>
                            <Col className='get' >
                                <Button type="submit">
                                    <div className='google'>
                                        <svg width="35" height="37" viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_256_13317)">
                                                <path d="M16.3781 17.6625L0.640781 33.4548C0.81751 34.0546 1.1351 34.6079 1.56927 35.0722C2.00344 35.5365 2.54269 35.8995 3.14581 36.1336C3.74893 36.3677 4.39995 36.4666 5.04909 36.4228C5.69824 36.379 6.32833 36.1936 6.8912 35.8808L24.5987 26.2213L16.3781 17.6625Z" fill="#EA4335" />
                                                <path d="M32.2913 14.9781L24.634 10.7772L16.0148 18.0217L24.6691 26.1986L32.2681 22.0427C32.9413 21.7051 33.5051 21.1975 33.8986 20.5748C34.292 19.9521 34.5 19.2382 34.5 18.5104C34.5 17.7825 34.292 17.0686 33.8986 16.4459C33.5051 15.8232 32.9413 15.3156 32.2681 14.978L32.2913 14.9781Z" fill="#FBBC04" />
                                                <path d="M0.640784 3.48773C0.545716 3.82457 0.498365 4.17212 0.500003 4.52105V32.4213C0.500942 32.7701 0.548249 33.1174 0.640784 33.4547L16.9176 18.0668L0.640784 3.48773Z" fill="#4285F4" />
                                                <path d="M16.4954 18.4713L24.6339 10.7773L6.94991 1.07283C6.28455 0.699624 5.52782 0.501975 4.75677 0.500008C2.84334 0.496446 1.16114 1.71281 0.640781 3.47656L16.4954 18.4713Z" fill="#34A853" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_256_13317">
                                                    <rect width="34" height="36"  transform="translate(0.5 0.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <div className='play'>
                                            <h3>GET IT On <span>Google Play</span></h3>
                                        </div>
                                    </div>

                                </Button>
                            </Col>
                        </aside>
                    </section>
                </Container>
            </main>
            <section className='foot' >
            <Container fluid className='over'>
                <Nav className="navs">
                <a href='#'><img src={logo} alt="Logo"/></a>
                <Nav.Link href="#" className='icon'><i class="fa-solid fa-phone"></i><span>Contact Us</span></Nav.Link>
                <Nav.Link href="#" className='wise'>Wise'R'books.All rights Reserved</Nav.Link>
                <div className='comb'>
                    <Nav.Link href="#" className='privacy'><span>Privacy</span></Nav.Link>
                    <Nav.Link href="#" className='terms'><span
                    >Terms</span></Nav.Link>
                </div>
            
              </Nav>
            </Container>
            </section>
        </div>
    );
};

export default AppList;