import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import logo_small from '../../images/logo-small.svg'
import './style.css'

const Footer = () => {
    return (
        <Container className='footer-wrapper mt-65'>
            <Row className='align-items-center text-center'>
                <Col lg={4} md={4} sm={12} xs={12}>
                    <small className='link-web'>playthem.com</small>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                    <img src={logo_small} alt='logo' />
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                    <Button className='btn-nav active btn-text'>Get Started Now</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer