import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img from '../../images/shopify.svg'
import img1 from '../../images/amazon.svg'
import img2 from '../../images/yahoo.svg'
import img3 from '../../images/zencart.svg'
import img4 from '../../images/ebay.svg'
import img5 from '../../images/prostores.svg'
import img6 from '../../images/vendio.svg'
import img7 from '../../images/volusion.svg'
import './style.css'

const ECommerceStack = () => {
    return (
        <Container className='wrapper-ecommerce'>
            <h5 className='text-center h5-style'>Integrate playthem with your favorite eCommerce stack</h5>
            <Row className='row-ecommerce text-center'>
                <Col lg={3} md={4} sm={12} xs={12}>
                    <img src={img} alt='shopify' />
                </Col>
                <Col lg={3} md={4} sm={12} xs={12}>
                    <img src={img1} alt='shopify' />
                </Col>
                <Col lg={3} md={4} sm={12} xs={12}>
                    <img src={img2} alt='shopify' />
                </Col>
                <Col lg={3} md={4} sm={12} xs={12}>
                    <img src={img3} alt='shopify' />
                </Col>
                <Col lg={3} md={4} sm={12} xs={12}>
                    <img src={img4} alt='shopify' />
                </Col>
                <Col lg={3} md={4} sm={12} xs={12}>
                    <img src={img5} alt='shopify' />
                </Col>
                <Col lg={3} md={4} sm={12} xs={12}>
                    <img src={img6} alt='shopify' />
                </Col>
                <Col lg={3} md={4} sm={12} xs={12}>
                    <img src={img7} alt='shopify' />
                </Col>
            </Row>
        </Container>
    )
}

export default ECommerceStack