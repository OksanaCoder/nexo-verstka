import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './style.css'
import Footer from '../Footer/Footer'
import GetStartedSection from '../GetStartedSection/GetStartedSection'

const Pricing = () => {
    return (
        <>
            <Container className='pricing-wrapper'>
                <h5 className='h5-pricing text-center'>Pop Up buildings price
             Straightforward, affordable pricing</h5>
                <p className='small-text-pricing text-center m-15'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                <Row className='justify-content-around m-33'>
                    <Col lg={12} md={12} sm={12} xs={12} className='box-price mb-2'>
                        <h5 className='m-24-54'>Premium</h5>
                        <h2 className='price'>$39/mon</h2>
                        <ul className='list-unstyled list-pricing'>
                            <li>1 site</li>
                            <li>Game selection</li>
                            <li>Smart triggers</li>
                            <li>Real-time statistics</li>
                            <li>Design customization</li>
                            <li>Set coupons</li>
                            <li>Image Upload</li>
                            <li>Frequency settings</li>
                            <li>Scheduling</li>
                            <li>Real-time statistics</li>
                            <li>Mobile responsive</li>
                        </ul>
                        <Row className='text-center'>
                            <Button className='btn-nav active btn-text'>Select plan</Button>
                        </Row>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12} className='box-price-right'>
                        <h5 className='m-24-54 text-white'>Premium</h5>
                        <h2 className='price text-white'>$39/mon</h2>
                        <ul className='list-unstyled list-pricing-right'>
                            <li>1 site</li>
                            <li>Game selection</li>
                            <li>Smart triggers</li>
                            <li>Real-time statistics</li>
                            <li>Design customization</li>
                            <li>Set coupons</li>
                            <li>Image Upload</li>
                            <li>Frequency settings</li>
                            <li>Scheduling</li>
                            <li>Real-time statistics</li>
                            <li>Mobile responsive</li>
                        </ul>
                        <Row className='text-center'>
                            <Button className='btn-nav inactive-pricing btn-text'>Select plan</Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <GetStartedSection title='Start a free trial' />
            <Footer />
        </>
    )
}
export default Pricing