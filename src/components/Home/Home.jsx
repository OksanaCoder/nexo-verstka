import React from 'react'
import './style.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ECommerceStack from '../ECommerceStack/ECommerceStack'
import Games from '../Games/Games'

const Home = () => {
    return (
        <>
            <Container className='header' fluid>
                <Container className='header-text'>
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <p className='header-font'>Some start text</p>
                            <p className='header-secont-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                            <Row className='row-of-btns'>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <Button className='btn-nav head mb-2'>Get Started Now</Button>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <Button className='btn-nav-white'>Watch Video</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <ECommerceStack />
            <Games />
        </>
    )
}


export default Home